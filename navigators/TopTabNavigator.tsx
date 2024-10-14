import HouseholdScreen from '../screens/HouseholdScreen';
import ThisWeekStatScreen from '../screens/statistics/ThisWeekScreen';
import PrevWeekStatScreen from '../screens/statistics/PreviousWeekScreen';
import PrevMonthStatScreen from '../screens/statistics/PreviousMonthScreen';
import ChoresScreen from '../screens/ChoresScreen';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { TopTabArrowsBar } from './TopTabArrowsBar';
import { SafeAreaView } from 'react-native-safe-area-context';
import BottomNavigator from '../components/BottomNavigator';

export type TopTabParamList = {
  Hushåll: undefined;
  Sysslor: undefined;
  'Denna veckan': undefined;
  'Förra veckan': undefined;
  'Förra månaden': undefined;
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
        <TopTabs.Screen name="Denna veckan" component={ThisWeekStatScreen} />
        <TopTabs.Screen name="Förra veckan" component={PrevWeekStatScreen} />
        <TopTabs.Screen name="Förra månaden" component={PrevMonthStatScreen} />
        
      </TopTabs.Navigator>
      <BottomNavigator />
    </SafeAreaView>
  );
}
