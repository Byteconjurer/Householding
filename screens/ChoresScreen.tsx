import { NativeStackScreenProps } from '@react-navigation/native-stack';
import {
  Image,
  ImageSourcePropType,
  Pressable,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import { Button, Card, Text } from 'react-native-paper';
import { RootStackParamList } from '../navigators/RootStackNavigator';
import { selectChoresByCurrentHousehold } from '../store/household/householdSelectors';
import { useAppSelector } from '../store/store';

type ChoresProps = NativeStackScreenProps<RootStackParamList>;

const avatarImages: { [key: string]: ImageSourcePropType } = {
  '1.png': require('../assets/avatarImages/1.png'),
  '2.png': require('../assets/avatarImages/2.png'),
  '3.png': require('../assets/avatarImages/3.png'),
  '4.png': require('../assets/avatarImages/4.png'),
  '5.png': require('../assets/avatarImages/5.png'),
  '6.png': require('../assets/avatarImages/6.png'),
  '7.png': require('../assets/avatarImages/7.png'),
  '8.png': require('../assets/avatarImages/8.png'),
};

export default function ChoresScreen({ navigation }: ChoresProps) {
  const household = useAppSelector((state) => state.household.current);
  const chores = useAppSelector(selectChoresByCurrentHousehold);
  const householdMembers = useAppSelector((state) => state.householdmember);

  const avatars = householdMembers.list
    .filter((member) => member.householdId === household?.id)
    .map((member) => member.avatar);

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {chores.map((chore) => (
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
                  {avatars.map((avatar, index) => (
                    <Image
                      key={index}
                      source={avatarImages[avatar]}
                      style={styles.avatar}
                    />
                  ))}
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
        >
          Lägg till
        </Button>
        <Button
          mode="elevated"
          icon="pencil-outline"
          textColor="black"
          buttonColor="#fff"
          labelStyle={styles.buttonText}
          onPress={() => console.log('Ändra')}
        >
          Ändra
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '95%',
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
    marginBottom: 50,
  },
  buttonText: {
    fontSize: 20,
    padding: 2,
  },
  widthTitle: {
    maxWidth: '50%',
  },
});
