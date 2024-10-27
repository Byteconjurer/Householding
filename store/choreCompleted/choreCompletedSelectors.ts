import { createSelector } from '@reduxjs/toolkit';
import { selectCurrentHousehold } from '../sharedSelectors';
import { selectHouseholdMembersList } from '../sharedSelectors';
import { selectChores, selectCompletedChoresList } from '../sharedSelectors';

export const selectCompletedChoresByCurrentHousehold = createSelector(
  [
    selectCompletedChoresList,
    selectHouseholdMembersList,
    selectCurrentHousehold,
    selectChores,
  ],
  (completedChores, householdMembers, household, chores) => {
    // Filter household members by the current household
    const householdMembersInCurrentHousehold = householdMembers.filter(
      (member) => member.householdId === household?.id,
    );

    // Extract the ids of the household members in the current household
    const householdMemberIds = householdMembersInCurrentHousehold.map(
      (member) => member.id,
    );

    // Filter completed chores by household members in the current household
    const filteredCompletedChores = completedChores.filter((chore) =>
      householdMemberIds.includes(chore.householdMemberId),
    );

    // Map the filtered completed chores to include the chore title
    return filteredCompletedChores.map((completedChore) => ({
      ...completedChore,
      title:
        chores.find((chore) => chore.id === completedChore.choreId)?.title ||
        'Untitled',
    }));
  },
);

export const selectGroupedCompletedChoresByCurrentHousehold = createSelector(
  [selectCompletedChoresByCurrentHousehold, selectHouseholdMembersList],
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

    completedChores.forEach((chore) => {
      const { choreId, householdMemberId, title } = chore;

      if (!groupedChores[choreId]) {
        groupedChores[choreId] = {
          id: choreId,
          title,
          householdMemberIds: [],
          avatars: [],
        };
      }

      if (householdMemberId) {
        if (
          !groupedChores[choreId].householdMemberIds.includes(householdMemberId)
        ) {
          groupedChores[choreId].householdMemberIds.push(householdMemberId);
        }

        const householdMember = householdMembers.find(
          (member) => member.id === householdMemberId,
        );

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
