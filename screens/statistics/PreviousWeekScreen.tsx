import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper';
import { RootStackParamList } from '../../navigators/RootStackNavigator';

type StatisticsProps = NativeStackScreenProps<RootStackParamList>;

export default function PrevWeekStatScreen({ route }: StatisticsProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.statisticsText}>Förra veckan</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  statisticsText: {
    fontSize: 30,
    fontWeight: 'bold',
  },
});
