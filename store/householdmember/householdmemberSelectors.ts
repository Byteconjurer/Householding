import { createSelector } from '@reduxjs/toolkit';
import {
  selectCurrentHousehold,
  selectHouseholdMembersList,
} from '../sharedSelectors';

export const selectMembersInCurrentHousehold = createSelector(
  [selectHouseholdMembersList, selectCurrentHousehold],
  (householdMembers, household) =>
    householdMembers.filter((member) => member.householdId === household?.id),
);

export const selectMembersByHouseholdId = (householdId: string) =>
  createSelector([selectHouseholdMembersList], (householdMembers) =>
    householdMembers.filter((member) => member.householdId === householdId),
  );
