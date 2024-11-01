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

// Async thunk for fetching all Chorecompleted entries for a household from Firestore
export const fetchChoresCompletedForHousehold = createAsyncThunk<
  ChoreCompleted[],
  string,
  { rejectValue: string }
>('chorecompleted/fetchChoresCompleted', async (householdId, { rejectWithValue }) => {
  try {
    const choreCompleteds: ChoreCompleted[] = [];
    
    const householdMembersSnapshot = await getDocs(
      query(collection(db, 'Householdmember'), where('householdId', '==', householdId))
    );
    
    const fetchChoreCompletedPromises = householdMembersSnapshot.docs.map(async (memberDoc) => {
      const choreCompletedSnapshot = await getDocs(
        collection(db, `Householdmember/${memberDoc.id}/Chorecompleted`)
      );
      
      choreCompletedSnapshot.forEach((doc) => {
        choreCompleteds.push({ id: doc.id, ...doc.data() } as ChoreCompleted);
      });
    });

    await Promise.all(fetchChoreCompletedPromises);

    return choreCompleteds;
  } catch (error) {
    console.error('Error fetching chorecompleteds:', error);
    return rejectWithValue('Failed to fetch chorecompleteds');
  }
});
