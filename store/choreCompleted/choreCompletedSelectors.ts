import { createSelector } from '@reduxjs/toolkit';
import { selectCurrentHousehold } from '../household/householdSelectors';
import { selectHouseholdMembers } from '../householdmember/householdmemberSlice';
import { RootState } from '../store';

export const selectChores = (state: RootState) => state.chore;
export const selectCompletedChores = (state: RootState) =>
  state.choreCompleted.list;

export const selectCompletedChoresByCurrentHousehold = createSelector(
  [
    selectCompletedChores,
    selectHouseholdMembers,
    selectCurrentHousehold,
    selectChores,
  ],
  (completedChores, householdMembers, household, chores) => {
    // Filter household members by the current household.
    const householdMembersInCurrentHousehold = householdMembers.filter(
      (member) => member.householdId === household?.id,
    );

    // Extract the ids of the household members in the current household.
    const householdMemberIds = householdMembersInCurrentHousehold.map(
      (member) => member.id,
    );

    // Filter completed chores by household members in the current household, and map them to include the chore title.
    const filteredCompletedChoresInHousehold = completedChores
      .filter((chore) => householdMemberIds.includes(chore.householdMemberId))
      .map((completedChore) => ({
        ...completedChore,
        title:
          chores.find((chore) => chore.id === completedChore.choreId)?.title ||
          'Untitled',
      }));

    // Filter chores by the current household, and map them to include the chore title.
    const filteredChoresInHousehold = chores
      .filter((chore) => chore.householdId === household?.id)
      .map((chore) => ({
        ...chore,
        title: chore.title || 'Untitled',
      }));

    // Combine the filtered chores and completed chores in the current household.
    const allRelevantChores = [
      ...filteredCompletedChoresInHousehold,
      ...filteredChoresInHousehold,
    ];

    return allRelevantChores;
  },
);

export const selectGroupedCompletedChoresByCurrentHousehold = createSelector(
  [selectCompletedChoresByCurrentHousehold, selectHouseholdMembers],
  (completedChores, householdMembers) => {
    const groupedChores: Record<
      string,
      {
        id: string;
        title: string;
        householdMemberIds: string[];
        avatars: string[];
      }
    > = {};

    // Group completed chores by chore id and include the household members who completed them.
    completedChores.forEach((chore) => {
      const { title } = chore;
      const householdMemberId =
        'householdMemberId' in chore ? chore.householdMemberId : undefined;
      const choreId = 'choreId' in chore ? chore.choreId : chore.id;

      // If the chore id is not in the grouped chores object, add it with an empty array of household members.
      if (!groupedChores[choreId]) {
        groupedChores[choreId] = {
          id: choreId,
          title,
          householdMemberIds: [], // Array to store ids of members who completed the chore.
          avatars: [], // Array to store avatars of members who completed the chore.
        };
      }

      // If the household member id is defined and not already in the household member ids array, add it to the array.
      if (householdMemberId) {
        if (
          !groupedChores[choreId].householdMemberIds.includes(householdMemberId)
        ) {
          groupedChores[choreId].householdMemberIds.push(householdMemberId);
        }

        const householdMember = householdMembers.find(
          (member) => member.id === householdMemberId,
        );

        // If the household member has an avatar, add it to the avatars array.
        if (householdMember) {
          const avatar = householdMember.avatar;
          if (avatar) {
            groupedChores[choreId].avatars.push(avatar);
          }
        }
      }
    });

    return Object.values(groupedChores);
  },
);
