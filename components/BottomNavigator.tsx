import React from 'react';
import { View, Pressable, StyleSheet } from 'react-native';
// @ts-ignore
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// @ts-ignore
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { TopTabParamList } from '../navigators/TopTabNavigator';

export default function BottomNavigator() {
  const navigation = useNavigation<NavigationProp<TopTabParamList>>();

  return (
    <View style={styles.bottomNav}>
      <Pressable onPress={() => navigation.navigate('Hushåll')}>
        <MaterialCommunityIcons name="home" size={30} color="#777" />
      </Pressable>
      <Pressable onPress={() => navigation.navigate('Sysslor')}>
        <MaterialIcons name="checklist" size={30} color="#777" />
      </Pressable>
      <Pressable onPress={() => navigation.navigate('Denna veckan')}>
        <MaterialCommunityIcons name="chart-pie" size={30} color="#777" />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#eee',
    paddingVertical: 10,
    position: 'absolute',
    bottom: 0,
    width: '100%',
    elevation: 5,
  },
});