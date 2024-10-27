import { createSelector } from '@reduxjs/toolkit';
import { mockedChores } from '../../data/data';
import { RootState } from '../store';

const mockedChoresIds = mockedChores.map((chore) => parseInt(chore.id, 10));
export const selectMockedChoresIds = () => mockedChoresIds;

const reduxChores = (state: RootState) => state.chore;
export const selectReduxChoresIds = createSelector([reduxChores], (chores) =>
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
