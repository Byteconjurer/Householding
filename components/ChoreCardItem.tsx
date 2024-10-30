import { Image, Pressable, StyleSheet, View } from 'react-native';
import { Card, Text } from 'react-native-paper';
import { avatarsMap } from '../data/data';
import { Chore } from '../data/types';
import { selectMembersInCurrentHousehold } from '../store/householdmember/householdmemberSelectors';
import { selectCompletedChoresTodayByChoreId } from '../store/sharedSelectors';
import { useAppSelector } from '../store/store';

interface Props {
  chore: Chore;
  onPress: () => void;
}

export default function ChoreCardItem({ chore, onPress }: Props) {
  const members = useAppSelector(selectMembersInCurrentHousehold);

  // Lista av objekt (completedChores) som är filtrerat mot idag och en syssla
  const completedToday = useAppSelector(
    selectCompletedChoresTodayByChoreId(chore.id),
  );

  const isCompletedToday = completedToday.length !== 0;

  // Ta reda på om det ska visas en/flera avatar eller en siffra.

  // Plockar ut alla medlemsID för varje objekt och sparar i lista.
  const memberIdList = completedToday.map((ct) => ct.householdMemberId);

  // Bygger ett objekt där id från en medlem mappas mot avatar.
  const idToAvatarMap = Object.fromEntries(
    members.map((member) => [member.id, member.avatar]),
  );
  // översätter id listan till avatarer
  const avatars = memberIdList.map((id) => idToAvatarMap[id]);

  console.log(memberIdList);
  console.log(avatars);

  return (
    <Pressable style={styles.chorePressable}>
      <Card style={styles.choreCard} onPress={onPress}>
        <View style={styles.choreContainer}>
          <View style={styles.widthTitle}>
            <Text style={styles.choreTitle}>{chore.title}</Text>
          </View>
          <View style={styles.avatarContainer}>
            {isCompletedToday ? (
              avatars.map((a, index) => (
                <Image
                  key={index}
                  source={avatarsMap[a].icon}
                  style={styles.avatar}
                />
              ))
            ) : (
              <Text style={styles.choreTitle}>{chore.interval}</Text>
            )}
          </View>
        </View>
      </Card>
    </Pressable>
  );
}

const styles = StyleSheet.create({
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
  widthTitle: {
    maxWidth: '50%',
  },
});
