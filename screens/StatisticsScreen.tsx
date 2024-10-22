import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ScrollView, StyleSheet, View } from 'react-native';
import PieShartComponent from '../components/PieShartComponent';
import { PieChartSliceData } from '../components/PieShartComponent';
import { TopTabParamList } from '../navigators/TopTabNavigator';

type StatisticsProps = NativeStackScreenProps<TopTabParamList>;

export default function StatisticsScreen({ route }: StatisticsProps) {

  const pieData: PieChartSliceData[] = [
    {
      value: 40,
      color: '#FFEB3B', // Yellow
      text: '40%', 
    },
    {
      value: 30,
      color: '#FFC107', // Amber
      text: '40%', 
    },
    {
      value: 20,
      color: '#FF9800', // Orange
      text: '40%', 
    },
    {
      value: 10,
      color: '#F44336', // Red
      text: '40%', 
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <PieShartComponent data={pieData} size={120} title="Äta mat" />
      <View style={styles.choresContainer}>
      <PieShartComponent data={pieData} size={60} title="Äta mat"  />
      <PieShartComponent data={pieData} size={60} title="Äta mat" />
      <PieShartComponent data={pieData} size={60} title="Äta mat" />
      </View>
      <View style={styles.choresContainer}>
      <PieShartComponent data={pieData} size={60} title="Äta mat" />
      <PieShartComponent data={pieData} size={60} title="Äta mat" />
      <PieShartComponent data={pieData} size={60} title="Äta mat" />
      </View>
      <View style={styles.choresContainer}>
      <PieShartComponent data={pieData} size={60} title="Äta mat" />
      <PieShartComponent data={pieData} size={60} title="Äta mat" />
      <PieShartComponent data={pieData} size={60} title="Äta mat" />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    marginBottom: 50,
  },
  statisticsText: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  choresContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    flexWrap: 'wrap',
  },
});
