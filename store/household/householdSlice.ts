import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Household } from '../../data/types';
import { addHousehold, fetchHouseholds } from './householdThunks';

type HouseholdState = {
  list: Household[];
  current?: Household;
  loading: boolean;
  error?: string;
};

const initialState: HouseholdState = {
  list: [],
  current: undefined,
  loading: false,
  error: undefined,
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
        (household) => household.id === action.payload,
      );
      if (household) {
        state.current = household;
      }
    },
    setHouseholdName: (state, action: PayloadAction<string>) => {
      if (state.current) {
        state.current.name = action.payload;
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(addHousehold.fulfilled, (state, action) => {
      state.list.push(action.payload);
    });
    builder.addCase(fetchHouseholds.pending, (state) => {
      state.loading = true;
      state.error = undefined;
    });
    builder.addCase(fetchHouseholds.fulfilled, (state, action) => {
      state.list = action.payload;
      state.loading = false;
    });
    builder.addCase(fetchHouseholds.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export const householdReducer = householdSlice.reducer;
export const { updateHousehold, setCurrentHousehold, setHouseholdName } =
  householdSlice.actions;
// export const { addHousehold, deleteHousehold, updateHousehold } =
//   householdSlice.actions;
