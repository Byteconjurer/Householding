import { createSelector } from '@reduxjs/toolkit';
import { selectCurrentHousehold } from '../sharedSelectors';
import { selectHouseholdMembersList } from '../sharedSelectors';
import { selectChores, selectCompletedChoresList } from '../sharedSelectors';
import { RootState } from '../store';
import { avatarsMap } from '../../data/data';
import { pieDataItem } from 'gifted-charts-core';
import { selectMembersInCurrentHousehold } from '../householdmember/householdmemberSelectors';
import SvgComponent from '../../components/SvgComponent';

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

export const selectChoresPieDataByHouseholdMember = createSelector(
  [
    selectMembersInCurrentHousehold,
    selectChores,
    selectCompletedChoresList,
    (_: RootState, _householdId: string, startDate: Date) => startDate,
    (_: RootState, _householdId: string, _startDate: Date, endDate: Date) =>
      endDate,
  ],
  (householdMembers, chores, choresCompleted, startDate, endDate) => {
    const normalizedStartDate = new Date(startDate);
    normalizedStartDate.setHours(0, 0, 0, 0);

    const normalizedEndDate = new Date(endDate);
    normalizedEndDate.setHours(23, 59, 59, 999);

    const getPieData = (choreId: string) =>
      householdMembers.map((member) => {
        const completions = choresCompleted.filter(
          (completion) =>
            completion.householdMemberId === member.id &&
            completion.choreId === choreId &&
            new Date(completion.choreComplete) >= normalizedStartDate &&
            new Date(completion.choreComplete) <= normalizedEndDate,
        );

        const totalEnergyWeight = completions.reduce(
          (acc, completion) =>
            acc +
            (chores.find((chore) => chore.id === choreId)?.energyWeight || 0),
          0,
        );

        const avatarData = avatarsMap[member.avatar];
        return {
          value: totalEnergyWeight,
          color: avatarData.color,
          text: String(totalEnergyWeight),
        } as pieDataItem;
      });

    return chores.reduce(
      (pieDataByChore, chore) => {
        const pieData = getPieData(chore.id);

        const totalEnergyForChore = pieData.reduce(
          (acc, data) => acc + data.value,
          0,
        );
        if (totalEnergyForChore > 0) {
          pieDataByChore[chore.title] = pieData;
        }

        return pieDataByChore;
      },
      {} as Record<string, pieDataItem[]>,
    );
  },
);

export const selectNormalizedChoresPieData = createSelector(
  [
    (_: RootState, energyWeightsByCategory: Record<string, pieDataItem[]>) =>
      energyWeightsByCategory,
  ],
  (energyWeightsByCategory) => {
    const normalizedData: Record<string, pieDataItem[]> = {};

    Object.entries(energyWeightsByCategory).forEach(([category, data]) => {
      const totalWeight = data.reduce((sum, member) => sum + member.value, 0);
      normalizedData[category] = data.map((member) => ({
        ...member,
        value: totalWeight > 0 ? (member.value / totalWeight) * 100 : 0,
      }));
    });

    return normalizedData;
  },
);

export const selectTotalEnergyWeightsByHouseholdMember = createSelector(
  [
    selectMembersInCurrentHousehold,
    selectChores,
    selectCompletedChoresList,
    (_: RootState, _householdId: string, startDate: Date) => startDate,
    (_: RootState, _householdId: string, _startDate: Date, endDate: Date) =>
      endDate,
  ],
  (householdMembers, chores, choresCompleted, startDate, endDate) => {
    const normalizedStartDate = new Date(startDate);
    normalizedStartDate.setHours(0, 0, 0, 0);

    const normalizedEndDate = new Date(endDate);
    normalizedEndDate.setHours(23, 59, 59, 999);

    const getTotalEnergyWeight = (memberId: string) => {
      const completions = choresCompleted.filter(
        (completion) =>
          completion.householdMemberId === memberId &&
          new Date(completion.choreComplete) >= normalizedStartDate &&
          new Date(completion.choreComplete) <= normalizedEndDate,
      );

      return completions.reduce((acc, completion) => {
        const chore = chores.find((chore) => chore.id === completion.choreId);
        return acc + (chore ? chore.energyWeight : 0);
      }, 0);
    };

    return householdMembers.map((member) => {
      const totalEnergyWeight = getTotalEnergyWeight(member.id);

      const avatarData = avatarsMap[member.avatar];

      return {
        value: totalEnergyWeight,
        color: avatarData.color,
        pieInnerComponent: () => <SvgComponent avatar={member.avatar} />,
      } as pieDataItem;
    });
  },
);

export const selectNormalizedTotalPieData = createSelector(
  [
    (_: RootState, energyWeights: { color?: string; value: number }[]) =>
      energyWeights,
  ],
  (energyWeights) => {
    const totalWeight = energyWeights.reduce(
      (sum, member) => sum + member.value,
      0,
    );
    return energyWeights.map((member) => ({
      ...member,
      value: totalWeight > 0 ? (member.value / totalWeight) * 100 : 0,
    }));
  },
);
