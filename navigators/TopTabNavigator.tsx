import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { SafeAreaView } from 'react-native-safe-area-context';
import BottomNavigator from '../components/BottomNavigator';
import ChoresScreen from '../screens/ChoresScreen';
import HouseholdScreen from '../screens/HouseholdScreen';
import StatisticsScreen from '../screens/StatisticsScreen';
import { TopTabArrowsBar } from './TopTabArrowsBar';
import { selectCurrentHousehold } from '../store/sharedSelectors';
import { useAppDispatch, useAppSelector } from '../store/store';
import { fetchChoresCompletedByDateAndHousehold } from '../store/choreCompleted/chorecompletedThunks';
import { useEffect, useState } from 'react';
import { ChoreCompleted } from '../data/types';
import { formatDateToYYYYMMDD, getDateRange } from '../utils/date';

export type TopTabParamList = {
  Household: undefined;
  Chores: undefined;
  ThisWeek: { period: string };
  PreviousWeek: { period: string };
  PreviousMonth: { period: string };
};

const TopTabs = createMaterialTopTabNavigator<TopTabParamList>();

export default function TopTabNavigator() {
  const dispatch = useAppDispatch();
  const currentHousehold = useAppSelector(selectCurrentHousehold);

  const [currentWeekChores, setCurrentWeekChores] = useState<ChoreCompleted[]>(
    [],
  );
  const [previousWeekChores, setPreviousWeekChores] = useState<
    ChoreCompleted[]
  >([]);
  const [previousMonthChores, setPreviousMonthChores] = useState<
    ChoreCompleted[]
  >([]);

  useEffect(() => {
    const fetchChores = async () => {
      if (!currentHousehold) return;

      const ranges = [
        {
          period: 'this-week',
          range: getDateRange('this-week'),
          setter: setCurrentWeekChores,
        },
        {
          period: 'previous-week',
          range: getDateRange('previous-week'),
          setter: setPreviousWeekChores,
        },
        {
          period: 'previous-month',
          range: getDateRange('previous-month'),
          setter: setPreviousMonthChores,
        },
      ];

      await Promise.all(
        ranges.map(async ({ range, setter }) => {
          const data = await dispatch(
            fetchChoresCompletedByDateAndHousehold({
              householdId: currentHousehold.id,
              startDate: formatDateToYYYYMMDD(range.startDate),
              endDate: formatDateToYYYYMMDD(range.endDate),
            }),
          ).unwrap();
          setter(data);
        }),
      );
    };

    fetchChores();
  }, [dispatch, currentHousehold]);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TopTabs.Navigator
        initialRouteName="Household"
        tabBar={(props) => <TopTabArrowsBar {...props} />}
      >
        <TopTabs.Screen
          name="Household"
          component={HouseholdScreen}
          options={{ title: 'Hushåll' }}
        />
        <TopTabs.Screen
          name="Chores"
          component={ChoresScreen}
          options={{ title: 'Sysslor' }}
        />

        {currentWeekChores.length > 0 && (
          <TopTabs.Screen
            name="ThisWeek"
            component={StatisticsScreen}
            options={{ title: 'Denna veckan' }}
            initialParams={{ period: 'this-week' }}
          />
        )}

        {previousWeekChores.length > 0 && (
          <TopTabs.Screen
            name="PreviousWeek"
            component={StatisticsScreen}
            options={{ title: 'Förra veckan' }}
            initialParams={{ period: 'previous-week' }}
          />
        )}

        {previousMonthChores.length > 0 && (
          <TopTabs.Screen
            name="PreviousMonth"
            component={StatisticsScreen}
            options={{ title: 'Förra månaden' }}
            initialParams={{ period: 'previous-month' }}
          />
        )}
      </TopTabs.Navigator>
      <BottomNavigator />
    </SafeAreaView>
  );
}
