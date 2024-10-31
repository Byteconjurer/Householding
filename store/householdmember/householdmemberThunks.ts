import { createAsyncThunk } from '@reduxjs/toolkit';
import { HouseholdMember, HouseholdMemberData } from '../../data/types';
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  query,
  where,
} from 'firebase/firestore';
import { db } from '../../firebase';
import { RootState } from '../store';
import { selectCurrentHousehold } from '../sharedSelectors';

// Async thunk for adding a householdmember to Firestore
export const addHouseholdMember = createAsyncThunk<
  HouseholdMember,
  HouseholdMemberData
>('householdmember/addHouseholdMember', async (data, { rejectWithValue }) =>
  addDoc(collection(db, `Householdmember`), data)
    .then((memberRef) => ({ id: memberRef.id, ...data }))
    .catch((error) => {
      console.error('Error adding household member:', error);
      return rejectWithValue('Failed to add household member');
    }),
);

// Async thunk for deleting a householdmember from Firestore
export const deleteHouseholdMember = createAsyncThunk<
  void,
  string,
  { rejectValue: string }
>('householdmember/deleteHouseholdMember', async (id, { rejectWithValue }) =>
  deleteDoc(doc(db, 'Householdmember', id))
    .then(() => {
      console.log('Household member deleted');
    })
    .catch((error) => {
      console.error('Error deleting household member:', error);
      return rejectWithValue('Failed to delete household member');
    }),
);

export const fetchUserHouseholdMembers = createAsyncThunk<
  HouseholdMember[],
  string,
  { rejectValue: string }
>('householdmember/fetchUserHouseholdMembers', (uid, { rejectWithValue }) => {
  const householdMembersQuery = query(
    collection(db, 'Householdmember'),
    where('userId', '==', uid),
  );

  return getDocs(householdMembersQuery)
    .then((querySnapshot) => {
      return querySnapshot.docs.map((doc) => {
        const data = doc.data() as HouseholdMemberData;
        return {
          id: doc.id,
          ...data,
        };
      });
    })
    .catch((error) => {
      console.error("Error fetching user's household members:", error);
      return rejectWithValue('Failed to fetch household members for the user');
    });
});

export const fetchHouseholdMembersInCurrentHousehold = createAsyncThunk<
  HouseholdMember[],
  void,
  { state: RootState; rejectValue: string }
>(
  'householdmember/fetchHouseholdMembersInCurrentHousehold',
  async (_, { getState, rejectWithValue }) => {
    const currentHousehold = selectCurrentHousehold(getState());

    if (!currentHousehold) {
      return rejectWithValue('No current household selected');
    }

    const householdMembersQuery = query(
      collection(db, 'Householdmember'),
      where('householdId', '==', currentHousehold.id),
    );

    try {
      const querySnapshot = await getDocs(householdMembersQuery);
      const householdMembers: HouseholdMember[] = querySnapshot.docs.map(
        (doc) => ({
          id: doc.id,
          ...(doc.data() as HouseholdMemberData),
        }),
      );
      return householdMembers;
    } catch (error) {
      console.error('Error fetching household members:', error);
      return rejectWithValue('Failed to fetch household members');
    }
  },
);

// Async thunk for fetching all household members in a specific household.
export const fetchHouseholdMembersInHousehold = createAsyncThunk<
  HouseholdMember[],
  string,
  { rejectValue: string }
>(
  'householdmember/fetchHouseholdMembersInHousehold',
  async (householdId, { rejectWithValue }) => {
    const householdMembersQuery = query(
      collection(db, 'Householdmember'),
      where('householdId', '==', householdId),
    );

    return getDocs(householdMembersQuery)
      .then((querySnapshot) => {
        return querySnapshot.docs.map((doc) => {
          const data = doc.data() as HouseholdMemberData;
          return {
            id: doc.id,
            ...data,
          };
        });
      })
      .catch((error) => {
        console.error('Error fetching household members:', error);
        return rejectWithValue('Failed to fetch household members');
      });
  },
);
