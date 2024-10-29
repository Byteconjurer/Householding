import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { mockedChoresCompleted } from '../../data/data';
import { ChoreCompleted } from '../../data/types';
import { addChoreCompleted } from './chorecompletedThunks';

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
  extraReducers: (builder) => {
    builder.addCase(addChoreCompleted.fulfilled, (state, action) => {
      state.list.push(action.payload);
    });
  },
});

export const choreCompletedReducer = choreCompletedSlice.reducer;
export const { addChoreCompleted } = choreCompletedSlice.actions;
