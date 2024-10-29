import { Pressable, StyleSheet, View } from 'react-native';
import { Card, Text } from 'react-native-paper';
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

  const completedToday = useAppSelector(
    selectCompletedChoresTodayByChoreId(chore.id),
  );
  const isCompletedToday = completedToday.length !== 0;

  const memberIdList = completedToday.map((ct) => ct.householdMemberId);

  const idToAvatarMap = Object.fromEntries(
    members.map((member) => [member.id, member.avatar]),
  );

  const avatars = memberIdList.map((id) => idToAvatarMap[id]);

  console.log(memberIdList);
  console.log(avatars);

  // Ta reda på om det ska visas en/flera avatar eller en siffra.

  return (
    <Pressable style={styles.chorePressable}>
      <Card style={styles.choreCard} onPress={onPress}>
        <View style={styles.choreContainer}>
          <View style={styles.widthTitle}>
            <Text style={styles.choreTitle}>{chore.title}</Text>
          </View>
          <View style={styles.avatarContainer}>
            {isCompletedToday ? (
              avatars.map((a) => <Text>{a}</Text>)
            ) : (
              <Text style={styles.choreTitle}>{chore.interval}</Text>
            )}
            {/* {chore.avatars.map((avatarKey, index) => {
              return (
                <Image
                  key={`${chore.id}-${avatarKey}-${index}`}
                  source={avatarsMap[avatarKey].icon}
                  style={styles.avatar}
                />
              );
            })} */}
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
