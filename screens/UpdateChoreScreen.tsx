import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper';
import { RootStackParamList } from '../navigators/RootStackNavigator';
import { selectChoresByCurrentHousehold } from '../store/household/householdSelectors';
import { useAppSelector } from '../store/store';

type UpdateChoreProps = NativeStackScreenProps<
  RootStackParamList,
  'UpdateChore'
>;

export default function UpdateChoreScreen({ navigation }: UpdateChoreProps) {
  // Mocka vilket chore som visas.
  //Hämta en chore
  const chores = useAppSelector(selectChoresByCurrentHousehold);
  const chore = chores[0];

  return (
    <View style={styles.root}>
      <Text>{chore.description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#EAEAEA',
    paddingHorizontal: 20,
    paddingBottom: 80,
    paddingTop: 40,
  },
});
