import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { mockedHouseholds } from '../../data/data';
import { Household } from '../../data/types';

const householdSlice = createSlice({
  name: 'household',
  initialState: mockedHouseholds,
  reducers: {
    addHousehold: (state, action: PayloadAction<Household>) => {
      state.push(action.payload);
    },
    deleteHousehold: (state, action: PayloadAction<number>) => {
      return state.filter((household) => household.id !== action.payload);
    },
    updateHousehold: (state, action: PayloadAction<Household>) => {
      const index = state.findIndex((household) => household.id === action.payload.id);
      if (index !== -1) {
        state[index] = action.payload;
      }
    },
  },
});

export const householdReducer = householdSlice.reducer;
export const { addHousehold, deleteHousehold, updateHousehold } = householdSlice.actions;