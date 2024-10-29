import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Chore } from '../../data/types';
import {
  addChore,
  modifyChoreInCurrentHousehold,
  deleteChoreInCurrentHousehold,
  fetchChoresForCurrentHousehold,
} from './choreThunks';

type ChoreState = Chore[];

const initialState: ChoreState = [];

const choreSlice = createSlice({
  name: 'chore',
  initialState: initialState, // filtrerat på den valda hushållet (i efterhand med en selektorn / eller innan när datan hämtas from db)
  reducers: {
    addChore: (state, action: PayloadAction<Chore>) => {
      state.push(action.payload);
    },
    // deleteChore: (state, action: PayloadAction<number>) => {
    //   return state.filter((chore) => chore.id !== action.payload);
    // },
    updateChore: (state, action: PayloadAction<Chore>) => {
      const index = state.findIndex((chore) => chore.id === action.payload.id);
      if (index !== -1) {
        state[index] = action.payload;
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(addChore.fulfilled, (state, action) => {
      state.push(action.payload);
    });
    builder.addCase(
      fetchChoresForCurrentHousehold.fulfilled,
      (state, action) => {
        return action.payload;
      },
    );
    builder.addCase(
      modifyChoreInCurrentHousehold.fulfilled,
      (state, action) => {
        const index = state.findIndex(
          (chore) => chore.id === action.payload.id,
        );
        if (index !== -1) {
          state[index] = action.payload;
        }
      },
    );
    builder.addCase(
      deleteChoreInCurrentHousehold.fulfilled,
      (state, action) => {
        return state.filter((chore) => chore.id !== action.payload);
      },
    );
  },
});

export const choreReducer = choreSlice.reducer;
export const { updateChore } = choreSlice.actions;
// export const { addChore, deleteChore, updateChore } = choreSlice.actions;
