import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../store';

export const selectChores = (state: RootState) => state.chore;
export const selectCurrentHousehold = (state: RootState) =>
  state.household.current;

export const selectChoresByCurrentHousehold = createSelector(
  [selectChores, selectCurrentHousehold],
  (chores, household) => {
    return chores.filter((chore) => chore.householdId === household?.id);
  },
);
