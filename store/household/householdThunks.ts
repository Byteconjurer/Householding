import { createAsyncThunk } from '@reduxjs/toolkit';
import { Household, HouseholdData } from '../../data/types';
import { addDoc, collection, deleteDoc, doc, getDocs } from 'firebase/firestore';
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

// Async thunk for deleting a household from Firestore
export const deleteHousehold = createAsyncThunk<
  void,
  string,
  { rejectValue: string }
>('household/deleteHousehold', async (id, { rejectWithValue }) =>
  deleteDoc(doc(db, 'Household', id))
    .then(() => {
      console.log('Household deleted');
    })
    .catch((error) => {
      console.error('Error deleting household:', error);
      return rejectWithValue('Failed to delete household');
    }),
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
