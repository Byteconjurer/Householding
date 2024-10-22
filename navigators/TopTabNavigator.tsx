import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { SafeAreaView } from 'react-native-safe-area-context';
import BottomNavigator from '../components/BottomNavigator';
import ChoresScreen from '../screens/ChoresScreen';
import HouseholdScreen from '../screens/HouseholdScreen';
import StatisticsScreen from '../screens/StatisticsScreen';
import { TopTabArrowsBar } from './TopTabArrowsBar';

export type TopTabParamList = {
  Household: undefined;
  Chores: undefined;
  ThisWeek: { period: string };
  PreviousWeek: { period: string };
  PreviousMonth: { period: string };
};

const TopTabs = createMaterialTopTabNavigator<TopTabParamList>();

export default function TopTabNavigator() {
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
        <TopTabs.Screen
          name="ThisWeek"
          component={StatisticsScreen}
          options={{ title: 'Denna veckan' }}
          initialParams={{ period: 'this-week' }}
        />
        <TopTabs.Screen
          name="PreviousWeek"
          component={StatisticsScreen}
          options={{ title: 'Förra veckan' }}
          initialParams={{ period: 'previous-week' }}
        />
        <TopTabs.Screen
          name="PreviousMonth"
          component={StatisticsScreen}
          options={{ title: 'Förra månaden' }}
          initialParams={{ period: 'previous-month' }}
        />
      </TopTabs.Navigator>
      <BottomNavigator />
    </SafeAreaView>
  );
}
