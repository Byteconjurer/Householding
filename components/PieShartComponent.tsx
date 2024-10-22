import React from 'react';
import { View, StyleSheet} from 'react-native';
import { PieChart } from 'react-native-gifted-charts';
import { Text } from 'react-native-paper';


export type PieChartSliceData = {
  value: number;
  color: string;
  text?: string;
};


const PieShartComponent = ({data, size, title}: {data:PieChartSliceData[], size:number, title: string}) => {

  return (
    <View style={styles.container}>
      <PieChart
        data={data}
        radius={size}
        showText={true}
        textColor="black"
        textSize={16}
        fontWeight="bold"
      />
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};  

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    marginTop: 20,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 15,
  },
});

export default PieShartComponent;