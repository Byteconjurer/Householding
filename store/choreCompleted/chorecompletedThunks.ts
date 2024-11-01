import { createAsyncThunk } from '@reduxjs/toolkit';
import { ChoreCompleted, ChoreCompletedData } from '../../data/types';
import { addDoc, collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../firebase';

// Async thunk for adding a chorecompleted to Firestore
export const addChoreCompleted = createAsyncThunk<
  ChoreCompleted,
  ChoreCompletedData
>('chorecompleted/addChoreCompleted', async (data, { rejectWithValue }) =>
  addDoc(
    collection(db, `Householdmember/${data.householdMemberId}/Chorecompleted`),
    data,
  )
    .then((choreCompletedRef) => ({ id: choreCompletedRef.id, ...data }))
    .catch((error) => {
      console.error('Error adding chorecompleted:', error);
      return rejectWithValue('Failed to add chorecompleted');
    }),
);

// Async thunk for fetching all Chorecompleted within the current week for a household from Firestore
export const fetchChoresCompletedByDateAndHousehold = createAsyncThunk<
  ChoreCompleted[],
  { householdId: string; startDate: string; endDate: string },
  { rejectValue: string }
>(
  'chorecompleted/fetchChoresCompleted',
  async ({ householdId, startDate, endDate }, { rejectWithValue }) => {
    try {
      const choreCompleteds: ChoreCompleted[] = [];

      // Get all household members for the specified householdId
      const householdMembersSnapshot = await getDocs(
        query(
          collection(db, 'Householdmember'),
          where('householdId', '==', householdId),
        ),
      );

      // Fetch ChoreCompleted subcollection documents for each member in the household
      const fetchChoreCompletedPromises = householdMembersSnapshot.docs.map(
        async (memberDoc) => {
          const choreCompletedSnapshot = await getDocs(
            query(
              collection(db, `Householdmember/${memberDoc.id}/Chorecompleted`),
              where('choreComplete', '>=', startDate),
              where('choreComplete', '<=', endDate),
            ),
          );

          choreCompletedSnapshot.forEach((doc) => {
            choreCompleteds.push({
              id: doc.id,
              ...doc.data(),
            } as ChoreCompleted);
          });
        },
      );

      await Promise.all(fetchChoreCompletedPromises);

      return choreCompleteds;
    } catch (error) {
      console.error('Error fetching chorecompleteds:', error);
      return rejectWithValue('Failed to fetch chorecompleteds');
    }
  },
);
