import { NavigatorScreenParams } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AddChoreScreen from '../screens/AddChoreScreen';
import ChooseChoreScreen from '../screens/ChooseChoreScreen';
import ChoreDetailsScreen from '../screens/ChoreDetailsScreen';
import HomeScreen from '../screens/HomeScreen';
import UpdateChoreScreen from '../screens/UpdateChoreScreen';
import TopTabNavigator, { TopTabParamList } from './TopTabNavigator';

export type RootStackParamList = {
  Login: undefined;
  Home: undefined;
  TopTabNavigator: NavigatorScreenParams<TopTabParamList>;
  ChoreDetails: { id: string };
  AddChore: undefined;
  UpdateChore: { choreId: string };
  ChooseChore: undefined;
};

const RootStack = createNativeStackNavigator<RootStackParamList>();

export default function RootStackNavigator() {
  return (
    <RootStack.Navigator initialRouteName="Home">
      <RootStack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Startskärm',
          headerTitleAlign: 'center', // Centrerar titeln.
        }}
      />
      <RootStack.Screen
        name="TopTabNavigator"
        component={TopTabNavigator}
        options={{ headerShown: false, animation: 'slide_from_right' }}
      />
      <RootStack.Screen
        name="ChoreDetails"
        component={ChoreDetailsScreen}
        options={{ animation: 'flip' }}
      />

      <RootStack.Screen
        name="AddChore"
        component={AddChoreScreen}
        options={{ animation: 'flip' }}
      />

      <RootStack.Screen
        name="UpdateChore"
        component={UpdateChoreScreen}
        options={{ animation: 'slide_from_right' }}
      />
      <RootStack.Screen
        name="ChooseChore"
        component={ChooseChoreScreen}
        options={{
          title: 'Välj syssla att ändra',
          headerTitleAlign: 'center', // Centrerar titeln.
          animation: 'slide_from_right',
        }}
      />
    </RootStack.Navigator>
  );
}
