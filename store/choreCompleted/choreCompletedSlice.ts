import { createSlice } from '@reduxjs/toolkit';
import { ChoreCompleted } from '../../data/types';
import { addChoreCompleted, fetchChoresCompletedForHousehold } from './chorecompletedThunks';

type ChoreCompletedState = {
  list: ChoreCompleted[];
};

const initialState: ChoreCompletedState = {
  list: [],
};

const choreCompletedSlice = createSlice({
  name: 'choreCompleted',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(addChoreCompleted.fulfilled, (state, action) => {
      state.list.push(action.payload);
    });
    builder.addCase(fetchChoresCompletedForHousehold.fulfilled, (state, action) => {
      state.list = action.payload;
    });

  },
});

export const choreCompletedReducer = choreCompletedSlice.reducer;
/* export const { } = choreCompletedSlice.actions; */
