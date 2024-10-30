import { createSelector } from '@reduxjs/toolkit';
import { RootState } from './store';

export const selectChores = (state: RootState) => state.chore;

export const selectCompletedChore = (state: RootState) => state.choreCompleted;
export const selectCompletedChoresList = createSelector(
  [selectCompletedChore],
  (choreCompleted) => choreCompleted.list,
);

export const selectCompletedChoresTodayByChoreId = (choreId: string) =>
  createSelector([selectCompletedChoresList], (completedChores) => {
    const time = Date.now();
    const today = new Date(time).toISOString().split('T')[0];

    return completedChores.filter(
      (cc) => cc.choreComplete === today && cc.choreId === choreId,
    );
  });

export const selectLatestDateFromCompletedChoreByChoreId = (choreId: string) =>
  createSelector([selectCompletedChoresList], (allCompletedChores) => {
    const completedChores = allCompletedChores.filter(
      (cc) => cc.choreId === choreId,
    );

    if (completedChores.length === 0) return null;

    const latestCompletedDateStr = completedChores.reduce((latest, current) => {
      const currentDate = new Date(current.choreComplete);
      const latestDate = new Date(latest);
      return currentDate > latestDate ? current.choreComplete : latest;
    }, completedChores[0].choreComplete);

    return latestCompletedDateStr;
  });

export const selectHousehold = (state: RootState) => state.household;
export const selectHouseholdsList = createSelector(
  [selectHousehold],
  (household) => household.list,
);
export const selectCurrentHousehold = createSelector(
  selectHousehold,
  (household) => household.current,
);

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
