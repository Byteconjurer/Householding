import { createSelector } from '@reduxjs/toolkit';
import {
  selectCurrentHousehold,
  selectCurrentUser,
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

export const selectCurrentHouseholdMember = createSelector(
  [selectCurrentUser, selectCurrentHousehold, selectHouseholdMembersList],
  (user, currentHousehold, householdMembers) =>
    householdMembers.find(
      (member) =>
        member.userId === user?.uid &&
        member.householdId === currentHousehold?.id,
    ),
);
