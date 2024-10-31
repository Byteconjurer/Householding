import { createAsyncThunk } from '@reduxjs/toolkit';
import { Household, HouseholdData } from '../../data/types';
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  query,
  updateDoc,
  where,
  writeBatch,
} from 'firebase/firestore';
import { db } from '../../firebase';

export const addHousehold = createAsyncThunk<Household, HouseholdData>(
  'household/addHousehold',
  async (data, { rejectWithValue }) =>
    addDoc(collection(db, `Household`), data)
      .then((householdRef) => ({ id: householdRef.id, ...data }))
      .catch((error) => {
        console.error('Error adding household :', error);
        return rejectWithValue('Failed to add household ');
      }),
);

// Async thunk for updating a household
export const updateHousehold = createAsyncThunk<Household, Household>(
  'household/updateHousehold',
  async (household, { rejectWithValue }) => {
    try {
      const householdRef = doc(db, 'Household', household.id);
      await updateDoc(householdRef, household);
      return household;
    } catch (error) {
      console.error('Error updating household:', error);
      return rejectWithValue('Failed to update household');
    }
  },
);

// Async thunk for deleting a household and all its members
export const deleteHouseholdAndMembers = createAsyncThunk<
  void,
  string,
  { rejectValue: string }
>(
  'household/deleteHouseholdAndMembers',
  async (householdId, { rejectWithValue }) => {
    try {
      const householdRef = doc(db, 'Household', householdId);
      const householdMembersRef = collection(db, 'Householdmember');
      const membersQuery = query(
        householdMembersRef,
        where('householdId', '==', householdId),
      );
      const membersSnapshot = await getDocs(membersQuery);

      const batch = writeBatch(db);
      membersSnapshot.forEach((memberDoc) => {
        batch.delete(memberDoc.ref);
      });

      await batch.commit();

      await deleteDoc(householdRef);
    } catch (error) {
      console.error('Error deleting household and members:', error);
      return rejectWithValue('Failed to delete household and its members');
    }
  },
);

export const fetchHouseholds = createAsyncThunk<
  Household[],
  void,
  { rejectValue: string }
>('household/fetchHouseholds', async (_, { rejectWithValue }) => {
  try {
    const querySnapshot = await getDocs(collection(db, 'Household'));
    const households = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    })) as Household[];
    console.log('Households fetched:', households);
    return households;
  } catch (error) {
    console.error('Error fetching households:', error);
    return rejectWithValue('Failed to fetch households');
  }
});

// Async thunk for fetching a single household by its code
export const fetchHouseholdByCode = createAsyncThunk<
  Household,
  string,
  { rejectValue: string }
>('household/fetchHouseholdByCode', async (code, { rejectWithValue }) => {
  try {
    const querySnapshot = await getDocs(
      query(collection(db, 'Household'), where('code', '==', code)),
    );
    if (querySnapshot.empty) {
      return rejectWithValue('Household not found');
    }
    const doc = querySnapshot.docs[0];
    return { id: doc.id, ...doc.data() } as Household;
  } catch (error) {
    console.error('Error fetching household by code:', error);
    return rejectWithValue('Failed to fetch household by code');
  }
});
