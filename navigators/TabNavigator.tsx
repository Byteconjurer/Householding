/* import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import HouseholdScreen from '../screens/HouseholdScreen';
import StatisticsScreen from '../screens/StatisticsScreen';

export type TabParamList = {
  Household: undefined;
  Statistics: undefined;
};

const BottomTab = createBottomTabNavigator<TabParamList>();

export default function TabNavigator() {
  return (
    <BottomTab.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <BottomTab.Screen
        name="Household"
        component={HouseholdScreen}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons name="home" size={size} color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Statistics"
        component={StatisticsScreen}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons name="pie-chart" size={size} color={color} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}
 */
