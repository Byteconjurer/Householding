import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { mockedHouseholds } from '../../data/data';
import { Household } from '../../data/types';

type HouseholdState = { list: Household[]; current?: Household };
const initialState: HouseholdState = {
  list: mockedHouseholds,
  current: mockedHouseholds[0],
};

const householdSlice = createSlice({
  name: 'household',
  initialState: initialState, // ett subset av vad som finns i databasen
  reducers: {
    addHousehold: (state, action: PayloadAction<Household>) => {
      state.list.push(action.payload);
    },
    // deleteHousehold: (state, action: PayloadAction<string>) => {
    //   return state.list.filter((household) => household.id !== action.payload);
    // },
    updateHousehold: (state, action: PayloadAction<Household>) => {
      const index = state.list.findIndex(
        (household) => household.id === action.payload.id,
      );
      if (index !== -1) {
        state.list[index] = action.payload;
      }
    },
    setCurrentHousehold: (state, action: PayloadAction<string>) => {
      const household = state.list.find(
        (household) => household.id === action.payload
      );
      if (household) {
        state.current = household;
      }
    }
  },
});


export const householdReducer = householdSlice.reducer;
export const { addHousehold, updateHousehold, setCurrentHousehold } = householdSlice.actions;
// export const { addHousehold, deleteHousehold, updateHousehold } =
//   householdSlice.actions;
