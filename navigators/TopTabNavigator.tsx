import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { SafeAreaView } from 'react-native-safe-area-context';
import BottomNavigator from '../components/BottomNavigator';
import ChoresScreen from '../screens/ChoresScreen';
import HouseholdScreen from '../screens/HouseholdScreen';
import ThisWeekStatScreen from '../screens/statistics/ThisWeekScreen';
import { TopTabArrowsBar } from './TopTabArrowsBar';

export type TopTabParamList = {
  Hushåll: undefined;
  Sysslor: undefined;
  Statistics: { period: string };
};

const TopTabs = createMaterialTopTabNavigator<TopTabParamList>();

export default function TopTabNavigator() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TopTabs.Navigator
        initialRouteName="Hushåll"
        tabBar={(props) => <TopTabArrowsBar {...props} />}
      >
        <TopTabs.Screen name="Hushåll" component={HouseholdScreen} />
        <TopTabs.Screen name="Sysslor" component={ChoresScreen} />
        <TopTabs.Screen
          name="Statistics"
          component={ThisWeekStatScreen}
          options={{ title: 'Denna veckan' }}
          initialParams={{ period: 'this-week' }}
        />
        <TopTabs.Screen
          name="Statistics"
          component={ThisWeekStatScreen}
          options={{ title: 'Förra veckan' }}
          initialParams={{ period: 'previous-week' }}
        />
        <TopTabs.Screen
          name="Statistics"
          component={ThisWeekStatScreen}
          options={{ title: 'Förra månaden' }}
          initialParams={{ period: 'previous-month' }}
        />
      </TopTabs.Navigator>
      <BottomNavigator />
    </SafeAreaView>
  );
}
