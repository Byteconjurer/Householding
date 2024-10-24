import { createSelector } from '@reduxjs/toolkit';
import { selectHouseholdMembers } from '../householdmember/householdmemberSlice';
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

export const selectHouseholds = (state: RootState) => state.household.list;

export const selectLoggedInUserId = (state: RootState) =>
  state.user.currentUser?.uid;

export const selectHouseholdById = (state: RootState, householdId: string) =>
  state.household.list.find((household) => household.id === householdId);

export const selectUserHouseholds = createSelector(
  [selectLoggedInUserId, selectHouseholds, selectHouseholdMembers],
  (uid, households, householdmembers) => {
    console.log(
      'selectUserHouseholds selektorns input resultat: ' + uid,
      households,
      householdmembers,
    );
    // Filtrera householdMembers för att hitta alla hushållsid där användaren är medlem
    const userHouseholdIDs = householdmembers
      .filter((member) => member.userId === uid)
      .map((member) => member.householdId);
    console.log(userHouseholdIDs);

    // Hämta alla hushåll baserat på hushålls-ID:n
    const userHouseholds = households.filter((household) =>
      userHouseholdIDs.includes(household.id),
    );

    return userHouseholds;
  },
);
