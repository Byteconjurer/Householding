import { createSelector } from '@reduxjs/toolkit';
import {
  selectChores,
  selectCurrentHousehold,
  selectCurrentUser,
  selectHouseholdMembersList,
  selectHouseholdsList,
} from '../sharedSelectors';

export const selectHouseholdById = (householdId: string) =>
  createSelector(
    [selectHouseholdsList],
    (householdList) =>
      householdList.find((household) => household.id === householdId) ||
      undefined,
  );

export const selectChoresByCurrentHousehold = createSelector(
  [selectChores, selectCurrentHousehold],
  (chores, household) =>
    chores.filter((chore) => chore.householdId === household?.id),
);

export const selectUserHouseholds = createSelector(
  [selectCurrentUser, selectHouseholdsList, selectHouseholdMembersList],
  (user, households, householdmembers) => {
    const userHouseholdIDs = householdmembers
      .filter((member) => member.userId === user?.uid)
      .map((member) => member.householdId);

    return households.filter((household) =>
      userHouseholdIDs.includes(household.id),
    );
  },
);

export const selectCurrentHouseholdAvatars = createSelector(
  [selectHouseholdMembersList, selectCurrentHousehold],
  (householdMembers, household) =>
    householdMembers
      .filter((member) => member.householdId === household?.id)
      .map((member) => member.avatar),
);
