import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { mockedHouseholdMembers } from '../../data/data';
import { HouseholdMember } from '../../data/types';

const householdmemberSlice = createSlice({
  name: 'householdmember',
  initialState: mockedHouseholdMembers,
  reducers: {
    addHouseholdmember: (state, action: PayloadAction<HouseholdMember>) => {
      state.push(action.payload);
    },
    // deleteHouseholdmember: (state, action: PayloadAction<number>) => {
    //   return state.filter(
    //     (householdmember) => householdmember.id !== action.payload,
    //   );
    // },
    updateHouseholdmember: (state, action: PayloadAction<HouseholdMember>) => {
      const index = state.findIndex(
        (householdmember) => householdmember.id === action.payload.id,
      );
      if (index !== -1) {
        state[index] = action.payload;
      }
    },
  },
});

export const householdmemberReducer = householdmemberSlice.reducer;
export const {
  addHouseholdmember,
  // deleteHouseholdmember,
  updateHouseholdmember,
} = householdmemberSlice.actions;
