import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { TopTabParamList } from '../navigators/TopTabNavigator';
import { IconButton, Surface } from 'react-native-paper';

export default function BottomNavigator() {
  const navigation = useNavigation<NavigationProp<TopTabParamList>>();

  return (
    <Surface style={styles.bottomNav}>
      <IconButton
        onPress={() => navigation.navigate('Household')}
        icon="home"
        size={30}
      />
      <IconButton
        onPress={() => navigation.navigate('Chores')}
        icon="format-list-bulleted"
        size={30}
      />
      <IconButton
        onPress={() => navigation.navigate('ThisWeek', { period: 'this-week' })}
        icon="chart-pie"
        size={30}
      />
    </Surface>
  );
}

const styles = StyleSheet.create({
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    position: 'absolute',
    bottom: 0,
    width: '100%',
    elevation: 5,
  },
});
