import { createSelector } from '@reduxjs/toolkit';
import { pieDataItem } from 'gifted-charts-core';
import SvgComponent from '../../components/SvgComponent';
import { avatarsMap } from '../../data/data';
import { selectMembersInCurrentHousehold } from '../householdmember/householdmemberSelectors';
import {
  selectChores,
  selectCompletedChoresList,
} from '../sharedSelectors';
import { RootState } from '../store';
import { formatDateToYYYYMMDD } from '../../utils/date';

export const selectCompletedChoresTodayByChoreId = (choreId: string) =>
  createSelector([selectCompletedChoresList], (completedChores) => {
    const time = Date.now();
    const today = formatDateToYYYYMMDD(new Date(time));
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
      const currentDate = current.choreComplete;
      const latestDate = latest;
      return currentDate > latestDate ? current.choreComplete : latest;
    }, completedChores[0].choreComplete);

    return latestCompletedDateStr;
  });

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
    const normalizedStartDate = formatDateToYYYYMMDD(startDate);

    const normalizedEndDate = formatDateToYYYYMMDD(endDate);

    const getPieData = (choreId: string) =>
      householdMembers.map((member) => {
        const completions = choresCompleted.filter(
          (completion) =>
            completion.householdMemberId === member.id &&
            completion.choreId === choreId &&
            completion.choreComplete >= normalizedStartDate &&
            completion.choreComplete <= normalizedEndDate,
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
    const normalizedStartDate = formatDateToYYYYMMDD(startDate);
    const normalizedEndDate = formatDateToYYYYMMDD(endDate);

    const getTotalEnergyWeight = (memberId: string) => {
      const completions = choresCompleted.filter(
        (completion) =>
          completion.householdMemberId === memberId &&
          completion.choreComplete >= normalizedStartDate &&
          completion.choreComplete <= normalizedEndDate,
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
