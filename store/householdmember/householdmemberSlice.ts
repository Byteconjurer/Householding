import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { mockedHouseholdMembers } from '../../data/data';
import { HouseholdMember } from '../../data/types';
import { RootState } from '../store';

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
    addHouseholdmember: (state, action: PayloadAction<HouseholdMember>) => {
      state.list.push(action.payload);
    },
    // deleteHouseholdmember: (state, action: PayloadAction<number>) => {
    //   return state.filter(
    //     (householdmember) => householdmember.id !== action.payload,
    //   );
    // },
    updateHouseholdmember: (state, action: PayloadAction<HouseholdMember>) => {
      const index = state.list.findIndex(
        (householdmember) => householdmember.id === action.payload.id,
      );
      if (index !== -1) {
        state.list[index] = action.payload;
      }
    },
    setCurrentHouseholdMember: (state, action: PayloadAction<string>) => {
      const householdmember = state.list.find(
        (member) => member.userId === action.payload,
      );
      if (householdmember) {
        state.current = householdmember;
      }
    },
  },
});

// REDUCER AND ACTIONS
export const householdmemberReducer = householdmemberSlice.reducer;
export const {
  addHouseholdmember,
  // deleteHouseholdmember,
  updateHouseholdmember,
  setCurrentHouseholdMember,
} = householdmemberSlice.actions;

// SELECTORS
export const selectMembersByHouseholdId = (
  state: RootState,
  householdId: string,
) =>
  state.householdmember.list.filter(
    (member) => member.householdId === householdId,
  );

export const selectHouseholdMembers = (state: RootState) =>
  state.householdmember.list;

export const selectCurrentHouseholdMember = (state: RootState) =>
  state.householdmember.current;
