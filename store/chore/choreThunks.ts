import { createAsyncThunk } from '@reduxjs/toolkit';
import { Chore, ChoreData } from '../../data/types';
import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, updateDoc } from 'firebase/firestore';
import { db } from '../../firebase';
import { RootState } from '../store';
import {selectCurrentHousehold} from '../sharedSelectors';

// Async thunk for adding a chore to Firestore
export const addChore = createAsyncThunk<Chore, ChoreData>(
  'chore/addChore',
  async (data, { rejectWithValue }) =>
    addDoc(collection(db, `Household/${data.householdId}/Chore`), data)
      .then((choreRef) => ({ id: choreRef.id, ...data }))
      .catch((error) => {
        console.error('Error adding chore:', error);
        return rejectWithValue('Failed to add chore');
      }),
);

// Async thunk for modifying a chore in Firestore
export const modifyChoreInCurrentHousehold = createAsyncThunk<
  Chore,                         
  Partial<Chore> & { id: string }, 
  { state: RootState; rejectValue: string }       
>(
  'chore/modifyChore',
  async (chore, { getState, rejectWithValue }) => {
    const { id, ...choreData } = chore;
    const currentHousehold = selectCurrentHousehold(getState());
    try {
      const choreRef = doc(db, `Household/${currentHousehold!.id}/Chore/`, id);

      await updateDoc(choreRef, choreData);

      return { id, ...choreData } as Chore;
    } catch (error) {
      console.error("Error modifying chore:", error);
      return rejectWithValue('Failed to modify chore');
    }
  }
);

// Async thunk for deleting a chore from Firestore
export const deleteChoreInCurrentHousehold = createAsyncThunk<
  string,   
  string,           
  { state: RootState; rejectValue: string }
>(
  'chore/deleteChore',
  async (choreId, { getState, rejectWithValue }) => {
    const currentHousehold = selectCurrentHousehold(getState());

    try {
   
      const choreRef = doc(db, `Household/${currentHousehold!.id}/Chore/`, choreId);

      await deleteDoc(choreRef);

      return choreId;
    } catch (error) {
      console.error("Error deleting chore:", error);
      return rejectWithValue('Failed to delete chore');
    }
  }
);

// Async thunk for fetching chores for the current household from Firestore
export const fetchChoresForCurrentHousehold = createAsyncThunk<
  Chore[],
  void, 
  { state: RootState; rejectValue: string }
>(
  'chore/fetchChoresForCurrentHousehold',
  async (_, { getState, rejectWithValue }) => {
    const currentHousehold = selectCurrentHousehold(getState());

    return getDocs(collection(db, `Household/${currentHousehold!.id}/Chore`))
      .then((querySnapshot) => {
        const chores: Chore[] = [];
        querySnapshot.forEach((doc) => {
          chores.push({ id: doc.id, ...doc.data() as ChoreData });
        });
        return chores;
      })
      .catch((error) => {
        console.error('Error fetching chores:', error);
        return rejectWithValue('Failed to fetch chores');
      });
  }
);