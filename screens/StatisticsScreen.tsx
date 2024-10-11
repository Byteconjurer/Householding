import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { RootStackParamList } from '../navigators/RootStackNavigator';
import SwipeableView from '../navigators/SwipeableView';

type StatisticsProps = NativeStackScreenProps<RootStackParamList>;

export default function StatisticsScreen({ route }: StatisticsProps) {
  return (
    <SafeAreaView style={styles.safeArea}>
      <SwipeableView />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  safeArea: {
    flex: 1,
  },
});
