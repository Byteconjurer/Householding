import { MaterialTopTabScreenProps } from '@react-navigation/material-top-tabs';
import { CompositeScreenProps } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Image, Pressable, ScrollView, StyleSheet, View } from 'react-native';
import { Button, Card, Text } from 'react-native-paper';
import { avatarsMap } from '../data/data';
import { RootStackParamList } from '../navigators/RootStackNavigator';
import { TopTabParamList } from '../navigators/TopTabNavigator';
import { selectGroupedCompletedChoresByCurrentHousehold } from '../store/choreCompleted/choreCompletedSelectors';
import { selectCurrentHouseholdMember } from '../store/householdmember/householdmemberSlice';
import { useAppSelector } from '../store/store';

type ChoresProps = CompositeScreenProps<
  MaterialTopTabScreenProps<TopTabParamList, 'Chores'>,
  NativeStackScreenProps<RootStackParamList>
>;

export default function ChoresScreen({ navigation }: ChoresProps) {
  const groupedCompletedChores = useAppSelector(
    selectGroupedCompletedChoresByCurrentHousehold,
  );
  const currentHouseholdMember = useAppSelector(selectCurrentHouseholdMember);
  const isOwner = currentHouseholdMember?.owner ?? false;

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {groupedCompletedChores.map((chore) => (
          <Pressable style={styles.chorePressable} key={chore.id}>
            <Card
              style={styles.choreCard}
              onPress={() =>
                navigation.navigate('ChoreDetails', { id: String(chore.id) })
              }
            >
              <View style={styles.choreContainer}>
                <View style={styles.widthTitle}>
                  <Text style={styles.choreTitle}>{chore.title}</Text>
                </View>
                <View style={styles.avatarContainer}>
                  {chore.avatars.map((avatarKey, index) => {
                    return (
                      <Image
                        key={`${chore.id}-${avatarKey}-${index}`}
                        source={avatarsMap[avatarKey].icon}
                        style={styles.avatar}
                      />
                    );
                  })}
                </View>
              </View>
            </Card>
          </Pressable>
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
  chorePressable: {
    width: '95%',
  },
  choreCard: {
    justifyContent: 'center',
    height: 50,
    marginTop: 15,
    backgroundColor: '#fff',
  },
  choreContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  choreTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 15,
  },
  avatarContainer: {
    flexDirection: 'row',
    marginRight: 15,
  },
  avatar: {
    width: 25,
    height: 25,
    marginLeft: 3,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 10,
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
