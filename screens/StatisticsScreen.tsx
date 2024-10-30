import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { FlatList, StyleSheet, View } from 'react-native';
import PieChartComponent from '../components/PieChartComponent';
import { TopTabParamList } from '../navigators/TopTabNavigator';
import { useAppSelector } from '../store/store';
import { RootState } from '../store/store';
import {
  selectChoresPieDataByHouseholdMember,
  selectNormalizedChoresPieData,
  selectNormalizedTotalPieData,
  selectTotalEnergyWeightsByHouseholdMember,
} from '../store/choreCompleted/choreCompletedSelectors';
import {
  getFirstDayOfCurrentWeek,
  getLastDayOfCurrentWeek,
  getFirstDayOfPreviousWeek,
  getLastDayOfPreviousWeek,
  getFirstDayOfPreviousMonth,
  getLastDayOfPreviousMonth,
} from '../utils/date';
import { pieDataItem } from 'gifted-charts-core';
import { selectCurrentHousehold } from '../store/sharedSelectors';

type StatisticsProps = NativeStackScreenProps<
  TopTabParamList,
  'ThisWeek' | 'PreviousWeek' | 'PreviousMonth'
>;

export default function StatisticsScreen({ route }: StatisticsProps) {
  const period = route.params.period as
    | 'this-week'
    | 'previous-week'
    | 'previous-month';
  const householdId = useAppSelector(selectCurrentHousehold)!.id;

  const periodToDateRange = {
    'this-week': [getFirstDayOfCurrentWeek, getLastDayOfCurrentWeek],
    'previous-week': [getFirstDayOfPreviousWeek, getLastDayOfPreviousWeek],
    'previous-month': [getFirstDayOfPreviousMonth, getLastDayOfPreviousMonth],
  };

  const [startDateFunc, endDateFunc] = periodToDateRange[period];
  const startDate = startDateFunc();
  const endDate = endDateFunc();

  const normalizedTotalPieData = useAppSelector((state: RootState) =>
    selectNormalizedTotalPieData(
      state,
      selectTotalEnergyWeightsByHouseholdMember(
        state,
        householdId,
        startDate,
        endDate,
      ),
    ),
  );
  const normalizedChoresPieData = useAppSelector((state: RootState) =>
    selectNormalizedChoresPieData(
      state,
      selectChoresPieDataByHouseholdMember(
        state,
        householdId,
        startDate,
        endDate,
      ),
    ),
  );

  const renderChoreCharts = (
    normalizedChoresPieData: Record<string, pieDataItem[]>,
  ) => (
    <FlatList
      contentContainerStyle={styles.choresContainer}
      data={Object.entries(normalizedChoresPieData).filter(
        ([_, innerArray]) => innerArray.length > 0,
      )}
      keyExtractor={([title], index) => `${index}-${title}`}
      renderItem={({ item: [title, innerArray], index }) => (
        <PieChartComponent
          key={`${index}-${title}`}
          data={innerArray}
          size={60}
          title={title}
          showLegend={true}
          showText={false}
        />
      )}
      numColumns={3}
    />
  );

  return (
    <View style={styles.container}>
      <View style={styles.totalPie}>
        <PieChartComponent
          data={normalizedTotalPieData}
          size={100}
          title={'Totalt'}
          showLegend={true}
          showText={false}
        />
      </View>
      {renderChoreCharts(normalizedChoresPieData)}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  choresContainer: {
    justifyContent: 'space-evenly',
    width: '100%',
    paddingBottom: 50,
  },
  totalPie: {
    height: '45%',
  },
});
