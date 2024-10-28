import { createSlice, PayloadAction } from '@reduxjs/toolkit';
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
  reducers: {
    addChoreCompleted: (state, action: PayloadAction<ChoreCompleted>) => {
      state.list.push(action.payload);
    },
  },
});

export const choreCompletedReducer = choreCompletedSlice.reducer;
export const { addChoreCompleted } = choreCompletedSlice.actions;
