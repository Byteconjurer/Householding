import { createSelector } from '@reduxjs/toolkit';
import { mockedChores } from '../../data/data';
import { selectChores, selectCompletedChoresList } from '../sharedSelectors';

const mockedChoresIds = mockedChores.map((chore) => parseInt(chore.id, 10));
export const selectMockedChoresIds = () => mockedChoresIds;

export const selectReduxChoresIds = createSelector([selectChores], (chores) =>
  chores.map((chore) => parseInt(chore.id, 10)),
);

export const generateNextId = createSelector(
  [selectMockedChoresIds, selectReduxChoresIds],
  (mockedChoreIds, reduxIds) => {
    const allChoresIds = [...mockedChoreIds, ...reduxIds];
    const highestId = allChoresIds.length > 0 ? Math.max(...allChoresIds) : 0;

    return (highestId + 1).toString();
  },
);

export const selectChoreById = (choreId: string) =>
  createSelector([selectChores], (chores) =>
    chores.find((chore) => chore.id === choreId),
  );

export const generateCompletedChoreId = createSelector(
  [selectCompletedChoresList],
  (reduxCCIds) => {
    const ids = reduxCCIds.map((choreCompleted) =>
      parseInt(choreCompleted.id, 10),
    );
    const highestId = ids.length > 0 ? Math.max(...ids) : 0;
    return (highestId + 1).toString();
  },
);
