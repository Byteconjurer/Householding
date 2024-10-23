import { createSlice } from '@reduxjs/toolkit';
import { mockedChoresCompleted } from '../../data/data';
import { ChoreCompleted } from '../../data/types';

type ChoreCompletedState = {
  list: ChoreCompleted[];
};

const initialState: ChoreCompletedState = {
  list: mockedChoresCompleted,
};

const choreCompletedSlice = createSlice({
  name: 'choreCompleted',
  initialState: initialState,
  reducers: {},
});

export const choreCompletedReducer = choreCompletedSlice.reducer;
export const {} = choreCompletedSlice.actions;
