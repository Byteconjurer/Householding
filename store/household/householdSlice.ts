import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { mockedHouseholds } from '../../data/data';
import { Household } from '../../data/types';

type HouseholdState = { list: Household[]; current?: Household };
const initialState: HouseholdState = {
  list: mockedHouseholds,
  current: mockedHouseholds[1],
};

const householdSlice = createSlice({
  name: 'household',
  initialState: initialState, // ett subset av vad som finns i databasen
  reducers: {
    addHousehold: (state, action: PayloadAction<Household>) => {
      state.list.push(action.payload);
    },
    updateHousehold: (state, action: PayloadAction<Household>) => {
      const index = state.list.findIndex(
        (household) => household.id === action.payload.id,
      );
      if (index !== -1) {
        state.list[index] = action.payload;
      }
    },
  },
});

export const householdReducer = householdSlice.reducer;
export const { addHousehold, updateHousehold } = householdSlice.actions;
