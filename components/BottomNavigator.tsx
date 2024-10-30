import React from 'react';
import { Pressable, StyleSheet } from 'react-native';
// @ts-ignore
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// @ts-ignore
import { NavigationProp, useNavigation } from '@react-navigation/native';
// @ts-ignore
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { TopTabParamList } from '../navigators/TopTabNavigator';
import { Surface } from 'react-native-paper';

export default function BottomNavigator() {
  const navigation = useNavigation<NavigationProp<TopTabParamList>>();

  return (
    <Surface style={styles.bottomNav}>
      <Pressable onPress={() => navigation.navigate('Household')}>
        <MaterialCommunityIcons name="home" size={30} color="#777" />
      </Pressable>
      <Pressable onPress={() => navigation.navigate('Chores')}>
        <MaterialIcons name="checklist" size={30} color="#777" />
      </Pressable>
      <Pressable
        onPress={() => navigation.navigate('ThisWeek', { period: 'current' })}
      >
        <MaterialCommunityIcons name="chart-pie" size={30} color="#777" />
      </Pressable>
    </Surface>
  );
}

const styles = StyleSheet.create({
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    position: 'absolute',
    bottom: 0,
    width: '100%',
    elevation: 5,
  },
});
