import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { mockedChores } from '../../data/data';
import { Chore } from '../../data/types';

const choreSlice = createSlice({
  name: 'chore',
  initialState: mockedChores, // filtrerat på den valda hushållet (i efterhand med en selektorn / eller innan när datan hämtas from db)
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
});

export const choreReducer = choreSlice.reducer;
export const { addChore, updateChore } = choreSlice.actions;
// export const { addChore, deleteChore, updateChore } = choreSlice.actions;
