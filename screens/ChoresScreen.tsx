import { MaterialTopTabScreenProps } from '@react-navigation/material-top-tabs';
import { CompositeScreenProps } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Button } from 'react-native-paper';
import ChoreCardItem from '../components/ChoreCardItem';
import { RootStackParamList } from '../navigators/RootStackNavigator';
import { TopTabParamList } from '../navigators/TopTabNavigator';
import { selectChoresByCurrentHousehold } from '../store/household/householdSelectors';
import { selectCurrentHouseholdMember } from '../store/sharedSelectors';
import { useAppSelector } from '../store/store';

type ChoresProps = CompositeScreenProps<
  MaterialTopTabScreenProps<TopTabParamList, 'Chores'>,
  NativeStackScreenProps<RootStackParamList>
>;

export default function ChoresScreen({ navigation }: ChoresProps) {
  const chores = useAppSelector(selectChoresByCurrentHousehold);
  const currentHouseholdMember = useAppSelector(selectCurrentHouseholdMember);
  const isOwner = currentHouseholdMember?.owner ?? false;

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {chores.map((chore) => (
          <ChoreCardItem
            key={chore.id}
            chore={chore}
            onPress={() =>
              navigation.navigate('ChoreDetails', { id: chore.id })
            }
          />
        ))}
      </ScrollView>
      <View style={styles.buttonContainer}>
        <Button
          mode="elevated"
          icon="plus-circle-outline"
          textColor="black"
          buttonColor="#fff"
          labelStyle={styles.buttonText}
          onPress={() => navigation.navigate('AddChore')}
          disabled={!isOwner}
        >
          Lägg till
        </Button>
        <Button
          mode="elevated"
          icon="pencil-outline"
          textColor="black"
          buttonColor="#fff"
          labelStyle={styles.buttonText}
          onPress={() => navigation.navigate('ChooseChore')}
          disabled={!isOwner}
        >
          Ändra
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EAEAEA',
  },
  scrollContainer: {
    flexGrow: 1,
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 10,
    marginTop: 15,
    marginBottom: 80,
  },
  buttonText: {
    fontSize: 20,
    padding: 2,
  },
  widthTitle: {
    maxWidth: '50%',
  },
});
