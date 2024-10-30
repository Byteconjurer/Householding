import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialTopTabBarProps } from '@react-navigation/material-top-tabs';
import { ParamListBase, NavigationHelpers } from '@react-navigation/native';
import { Surface, Text } from 'react-native-paper';

type TopTabArrowsBarProps = MaterialTopTabBarProps & {
  navigation: NavigationHelpers<ParamListBase>;
};

export function TopTabArrowsBar(props: TopTabArrowsBarProps) {
  const { navigation, state } = props;
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

  return (
    <Surface style={styles.container}>
      {index === 0 ? (
        <TouchableOpacity onPress={goToHome}>
          <Text style={[styles.arrow]}>{'<'}</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity onPress={goToPrevious}>
          <Text style={[styles.arrow]}>{'<'}</Text>
        </TouchableOpacity>
      )}

      <Text style={styles.title}>{routeNames[index]}</Text>

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
    </Surface>
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
    color: 'white',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
