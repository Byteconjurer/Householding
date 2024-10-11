import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper';
import { chores } from '../components/mockedChores';
import { RootStackParamList } from '../navigators/RootStackNavigator';

type ChoreProps = NativeStackScreenProps<RootStackParamList, 'Chore'>;

export default function ChoreScreen({ route }: ChoreProps) {
  const chore = chores.filter((item) => item.id === route.params.id);

  return (
    <View style={styles.container}>
      {chore.map((chore, index) => (
        <View key={index}>
          <Text style={styles.chore}>CHORE NAME: {chore.name}</Text>
          <Text style={styles.chore}>
            CHORE DESCRIPTION: {chore.description}
          </Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  chore: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 30,
  },
});
