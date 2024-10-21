import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StyleSheet, Text, View } from 'react-native';
import { TopTabParamList } from '../navigators/TopTabNavigator';

type HouseholdProps = NativeStackScreenProps<TopTabParamList, "Household">;

export default function HouseholdScreen({ navigation }: HouseholdProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.statisticsText}>Hushållssida</Text>
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
