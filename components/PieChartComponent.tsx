import React from 'react';
import { View, StyleSheet } from 'react-native';
import { PieChart } from 'react-native-gifted-charts';
import { Text } from 'react-native-paper';
import { pieDataItem } from 'gifted-charts-core';

const PieChartComponent = ({
  data,
  size,
  title,
}: {
  data: pieDataItem[];
  size: number;
  title: string;
  showLegend: boolean;
  showText: boolean;
}) => {
  function PieChartWithTitle({
    data,
    size,
    title,
  }: {
    data: pieDataItem[];
    size: number;
    title: string;
  }) {
    return (
      <View style={styles.chartContainer}>
        <PieChart data={data} radius={size} labelsPosition="mid" />
        {data.length === 0 && <Text style={styles.title}>{title}</Text>}
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <PieChartWithTitle data={data} size={size} title={title} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    marginTop: 20,
    flexDirection: 'row',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 15,
    marginTop: 15,
  },
  legendContainer: {
    flexDirection: 'column',
    marginLeft: 20,
  },
  chartContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    paddingVertical: 5,
    marginBottom: 10,
  },
  avatarContainer: {
    width: 30,
    height: 30,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
  },
  avatar: {
    width: 20,
    height: 20,
    borderRadius: 10,
  },
  legendText: {
    fontSize: 14,
  },
  legendColorCircle: {
    width: 15,
    height: 15,
    borderRadius: 6,
    marginRight: 6,
  },
});

export default PieChartComponent;
