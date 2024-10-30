import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { mockedHouseholdMembers } from '../../data/data';
import { HouseholdMember } from '../../data/types';

type HouseholdMemberState = {
  list: HouseholdMember[];
  current?: HouseholdMember;
};

const initialState: HouseholdMemberState = {
  list: mockedHouseholdMembers,
  current: mockedHouseholdMembers[0],
};

const householdmemberSlice = createSlice({
  name: 'householdmember',
  initialState: initialState,
  reducers: {
    addHouseholdMember: (state, action: PayloadAction<HouseholdMember>) => {
      state.list.push(action.payload);
    },
    // deleteHouseholdmember: (state, action: PayloadAction<number>) => {
    //   return state.filter(
    //     (householdmember) => householdmember.id !== action.payload,
    //   );
    // },
    updateHouseholdMember: (state, action: PayloadAction<HouseholdMember>) => {
      const index = state.list.findIndex(
        (householdmember) => householdmember.id === action.payload.id,
      );
      if (index !== -1) {
        state.list[index] = action.payload;
      }
    },
    setCurrentHouseholdMember: (
      state,
      action: PayloadAction<{ userId: string; householdId: string }>,
    ) => {
      const householdmember = state.list.find(
        (member) =>
          member.userId === action.payload.userId &&
          member.householdId === action.payload.householdId,
      );
      if (householdmember) {
        state.current = householdmember;
      }
    },
  },
});

export const householdmemberReducer = householdmemberSlice.reducer;
export const {
  addHouseholdMember,
  // deleteHouseholdmember,
  updateHouseholdMember,
  setCurrentHouseholdMember,
} = householdmemberSlice.actions;
