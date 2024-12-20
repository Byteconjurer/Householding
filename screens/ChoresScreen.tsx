import { MaterialTopTabScreenProps } from '@react-navigation/material-top-tabs';
import { CompositeScreenProps } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper';
import { Button } from 'react-native-paper';
import ChoreCardItem from '../components/ChoreCardItem';
import { RootStackParamList } from '../navigators/RootStackNavigator';
import { TopTabParamList } from '../navigators/TopTabNavigator';
import { selectChoresByCurrentHousehold } from '../store/household/householdSelectors';
import { selectCurrentHouseholdMember } from '../store/sharedSelectors';
import { useAppDispatch, useAppSelector } from '../store/store';
import { useEffect } from 'react';
import { fetchChoresForCurrentHousehold } from '../store/chore/choreThunks';

type ChoresProps = CompositeScreenProps<
  MaterialTopTabScreenProps<TopTabParamList, 'Chores'>,
  NativeStackScreenProps<RootStackParamList>
>;

export default function ChoresScreen({ navigation }: ChoresProps) {
  const dispatch = useAppDispatch();
  const chores = useAppSelector(selectChoresByCurrentHousehold);
  const currentHouseholdMember = useAppSelector(selectCurrentHouseholdMember);
  const isOwner = currentHouseholdMember?.owner ?? false;

  useEffect(() => {
    dispatch(fetchChoresForCurrentHousehold());
  }, [dispatch]);

  return (
    <View style={styles.container}>
      {chores.length === 0 ? (
        currentHouseholdMember?.owner ? (
          <Text style={styles.emptyText}>
            Här var det tomt! Lägg till en syssla.
          </Text>
        ) : (
          <Text style={styles.emptyText}>
            Här var det tomt! Be ägaren att lägga till en syssla.
          </Text>
        )
      ) : null}
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
      {isOwner && (
        <View style={styles.buttonContainer}>
          <Button
            mode="elevated"
            icon="plus-circle-outline"
            labelStyle={styles.buttonText}
            onPress={() => navigation.navigate('AddChore')}
          >
            Lägg till
          </Button>
          <Button
            mode="elevated"
            icon="pencil-outline"
            labelStyle={styles.buttonText}
            onPress={() => navigation.navigate('ChooseChore')}
          >
            Ändra
          </Button>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  emptyText: {
    fontSize: 25,
    alignSelf: 'center',
    marginTop: 50,
    padding: 20,
  },
});
