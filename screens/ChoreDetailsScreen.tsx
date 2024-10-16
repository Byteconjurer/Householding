import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper';
import { chores } from '../components/chores';
import { RootStackParamList } from '../navigators/RootStackNavigator';
import { RouteProp } from '@react-navigation/native';

type ChoreDetailsScreenProps = {
  route: RouteProp<RootStackParamList, 'ChoreDetails'>;
};

export default function ChoreDetailsScreen(props: ChoreDetailsScreenProps) {
  const chore = chores.filter((item) => item.id === props.route.params.id);

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
