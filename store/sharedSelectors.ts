import { createSelector } from '@reduxjs/toolkit';
import { RootState } from './store';

export const selectChores = (state: RootState) => state.chore;

export const selectCompletedChore = (state: RootState) => state.choreCompleted;
export const selectCompletedChoresList = createSelector(
  [selectCompletedChore],
  (choreCompleted) => choreCompleted.list,
);

export const selectHousehold = (state: RootState) => state.household;
export const selectHouseholdsList = createSelector(
  [selectHousehold],
  (household) => household.list,
);
export const selectCurrentHousehold = createSelector(
  selectHousehold,
  (household) => household.current,
);
export const selectHouseholdLoading = (state: RootState) =>
  state.household.loading;
export const selectHouseholdError = (state: RootState) => state.household.error;

export const selectUser = (state: RootState) => state.user;
export const selectCurrentUser = createSelector(
  [selectUser],
  (user) => user.currentUser,
);

export const selectHouseholdMember = (state: RootState) =>
  state.householdmember;
export const selectHouseholdMembersList = createSelector(
  [selectHouseholdMember],
  (householdmember) => householdmember.list,
);
export const selectCurrentHouseholdMember = createSelector(
  [selectHouseholdMember],
  (householdmember) => householdmember.current,
);
