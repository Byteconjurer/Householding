import { createAsyncThunk } from '@reduxjs/toolkit';
import { ChoreCompleted, ChoreCompletedData } from '../../data/types';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../../firebase';

// Async thunk for adding a chorecompleted to Firestore
export const addChoreCompleted = createAsyncThunk<
  ChoreCompleted,
  ChoreCompletedData
>('chorecompleted/addChoreCompleted', async (data, { rejectWithValue }) =>
  addDoc(
    collection(db, `Householdmember/${data.householdMemberId}/ChoreCompleted`),
    data,
  )
    .then((choreCompletedRef) => ({ id: choreCompletedRef.id, ...data }))
    .catch((error) => {
      console.error('Error adding chorecompleted:', error);
      return rejectWithValue('Failed to add chorecompleted');
    }),
);
