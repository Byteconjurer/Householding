import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';
import { MaterialTopTabBarProps } from '@react-navigation/material-top-tabs';
import { ParamListBase, NavigationHelpers } from '@react-navigation/native';

type TopTabArrowsBarProps = MaterialTopTabBarProps & {
  navigation: NavigationHelpers<ParamListBase>;
};

export function TopTabArrowsBar(props: TopTabArrowsBarProps) {
  const { navigation, state, descriptors } = props;
  const { index, routeNames } = state;

  const goToPrevious = () => {
    if (index > 0) {
      navigation.navigate(routeNames[index - 1]);
    }
  };

  const goToNext = () => {
    if (index < routeNames.length - 1) {
      navigation.navigate(routeNames[index + 1]);
    }
  };

  const goToHome = () => {
    navigation.navigate('Home');
  };

  const currentRoute = state.routes[index];
  const routeOptions = descriptors[currentRoute.key].options;
  const title = routeOptions.title || routeNames[index];

  return (
    <View style={styles.container}>
      {index === 0 ? (
        <TouchableOpacity onPress={goToHome}>
          <Text style={styles.arrow}>{'<'}</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity onPress={goToPrevious}>
          <Text style={styles.arrow}>{'<'}</Text>
        </TouchableOpacity>
      )}

      <Text style={styles.title}>{title}</Text>

      <TouchableOpacity
        onPress={goToNext}
        disabled={index === routeNames.length - 1}
      >
        <Text
          style={[
            styles.arrow,
            index === routeNames.length - 1 && styles.disabledArrow,
          ]}
        >
          {'>'}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
  },
  arrow: {
    fontSize: 24,
  },
  disabledArrow: {
    color: 'grey',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
