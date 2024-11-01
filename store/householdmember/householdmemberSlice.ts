import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { mockedHouseholdMembers } from '../../data/data';
import { HouseholdMember } from '../../data/types';
import {
  addHouseholdMember,
  updateHouseholdMember,
  deleteHouseholdMember,
  fetchHouseholdMembersInCurrentHousehold,
  fetchHouseholdMembersInHousehold,
  fetchUserHouseholdMembers,
} from './householdmemberThunks';

type HouseholdMemberState = {
  list: HouseholdMember[];
  current?: HouseholdMember;
};

const initialState: HouseholdMemberState = {
  list: mockedHouseholdMembers,
  current: mockedHouseholdMembers[1],
};

const householdmemberSlice = createSlice({
  name: 'householdmember',
  initialState: initialState,
  reducers: {
    // deleteHouseholdmember: (state, action: PayloadAction<number>) => {
    //   return state.filter(
    //     (householdmember) => householdmember.id !== action.payload,
    //   );
    // },
/*     updateHouseholdMember: (state, action: PayloadAction<HouseholdMember>) => {
      const index = state.list.findIndex(
        (householdmember) => householdmember.id === action.payload.id,
      );
      if (index !== -1) {
        state.list[index] = action.payload;
      }
    }, */
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
  extraReducers: (builder) => {
    builder.addCase(addHouseholdMember.fulfilled, (state, action) => {
      state.list.push(action.payload);
    });
    builder.addCase(updateHouseholdMember.fulfilled, (state, action) => {
      const index = state.list.findIndex(
        (householdmember) => householdmember.id === action.payload.id,
      );
      if (index !== -1) {
        state.list[index] = action.payload;
      }
    });
    builder.addCase(deleteHouseholdMember.fulfilled, (state, action) => {
      state.list = state.list.filter(
        (householdmember) => householdmember.id !== action.payload,
      );
    });
    builder.addCase(fetchUserHouseholdMembers.fulfilled, (state, action) => {
      state.list = action.payload;
    });
    builder.addCase( 
      fetchHouseholdMembersInCurrentHousehold.fulfilled,
      (state, action) => {
        state.list = action.payload;
      },
    );
    builder.addCase(
      fetchHouseholdMembersInHousehold.fulfilled,
      (state, action) => {
        state.list = action.payload;
      },
    );
  },
});

export const householdmemberReducer = householdmemberSlice.reducer;
export const {
  // deleteHouseholdmember,
  // updateHouseholdMember,
  setCurrentHouseholdMember,
} = householdmemberSlice.actions;
