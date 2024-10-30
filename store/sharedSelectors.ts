import { createSelector } from '@reduxjs/toolkit';
import { RootState } from './store';

export const selectChores = (state: RootState) => state.chore;

export const selectCompletedChore = (state: RootState) => state.choreCompleted;
export const selectCompletedChoresList = createSelector(
  [selectCompletedChore],
  (choreCompleted) => choreCompleted.list,
);

export const selectCompletedChoresTodayByChoreId =
  (choreId: string) => (state: RootState) => {
    const time = Date.now();
    const today = new Date(time).toISOString().split('T')[0];

    const listOfDoneChoresByChoreIdForToday = selectCompletedChoresList(
      state,
    ).filter((cc) => cc.choreComplete === today && cc.choreId === choreId);

    return listOfDoneChoresByChoreIdForToday;
  };

// export const selectLatestCompletedChoreByChoreId =
//   (choreId: string) => (state: RootState) => {
//     const allCompletedChoresById = selectCompletedChoresList(state).filter(
//       (cc) => cc.choreId === choreId,
//     );
//     return null;
//   };

export const selectLatestDateFromCompletedChoreByChoreId =
  (choreId: string) =>
  (state: RootState): string | null => {
    // Filtrera completed chores baserat på angivet choreId
    const completedChores = selectCompletedChoresList(state).filter(
      (cc) => cc.choreId === choreId,
    );

    if (completedChores.length === 0) return null; // Om inga chores är kompletta för angivet choreId

    // Reducera för att hitta det senaste completed date
    const latestCompletedDateStr = completedChores.reduce((latest, current) => {
      const currentDate = new Date(current.choreComplete);
      const latestDate = new Date(latest);
      return currentDate > latestDate ? current.choreComplete : latest;
    }, completedChores[0].choreComplete);

    // console.log(latestCompletedDate);
    return latestCompletedDateStr;
  };

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
