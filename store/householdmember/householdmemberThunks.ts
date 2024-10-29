import { createAsyncThunk } from '@reduxjs/toolkit';
import { HouseholdMember, HouseholdMemberData } from '../../data/types';
import { addDoc, collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../firebase';

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
