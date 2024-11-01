import { Image, Pressable, StyleSheet, View } from 'react-native';
import { Card, Text } from 'react-native-paper';
import { avatarsMap } from '../data/data';
import { Chore, ChoreCompleted, HouseholdMember } from '../data/types';
import { selectMembersInCurrentHousehold } from '../store/householdmember/householdmemberSelectors';
import {
  selectCompletedChoresTodayByChoreId,
  selectLatestDateFromCompletedChoreByChoreId,
} from '../store/choreCompleted/choreCompletedSelectors';
import { useAppSelector } from '../store/store';
import { formatToDashedDate } from '../utils/date';

interface Props {
  chore: Chore;
  onPress: () => void;
}

function getMatchingAvatars(
  householdMembers: HouseholdMember[],
  choresCompleted: ChoreCompleted[],
): string[] {
  const choreMemberIds = new Set(
    choresCompleted.map((chore) => chore.householdMemberId),
  );

  return householdMembers
    .filter((member) => choreMemberIds.has(member.id))
    .map((member) => member.avatar);
}

export default function ChoreCardItem({ chore, onPress }: Props) {
  const members = useAppSelector(selectMembersInCurrentHousehold);
  const completedToday = useAppSelector(
    selectCompletedChoresTodayByChoreId(chore.id),
  );

  const latestDateAsString = useAppSelector(
    selectLatestDateFromCompletedChoreByChoreId(chore.id),
  );

  const latestDateAsDashedString = formatToDashedDate(latestDateAsString || '');

  const todaysDate = new Date();

  const latestDateAsDate = latestDateAsDashedString
    ? new Date(latestDateAsDashedString)
    : null;

  const daysDifference = latestDateAsDate
    ? Math.floor(
        (todaysDate.getTime() - latestDateAsDate.getTime()) /
          (1000 * 60 * 60 * 24),
      )
    : null;

  const isIntervalExceeded =
    daysDifference !== null && daysDifference > chore.interval;
  const isCompletedToday = completedToday.length !== 0;

  const avatars = getMatchingAvatars(members, completedToday);

  return (
    <Pressable style={styles.chorePressable}>
      <Card style={styles.choreCard} onPress={onPress}>
        <View style={styles.choreContainer}>
          <View style={styles.widthTitle}>
            <Text style={styles.choreTitle}>{chore.title}</Text>
          </View>
          <View style={styles.avatarContainer}>
            {isCompletedToday &&
              avatars.map((a, index) => (
                <Image
                  key={index}
                  source={avatarsMap[a].icon}
                  style={styles.avatar}
                />
              ))}
            {latestDateAsString && daysDifference !== 0 && (
              <View
                style={[
                  styles.circle,
                  isIntervalExceeded ? styles.red : styles.lightGray,
                ]}
              >
                <Text
                  style={[
                    styles.daysDifference,
                    isIntervalExceeded
                      ? styles.redCircleText
                      : styles.grayCircleText,
                  ]}
                >
                  {daysDifference}
                </Text>
              </View>
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
  daysDifference: {
    fontSize: 17,
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
  circle: {
    borderRadius: 12.5,
    width: 25,
    height: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  red: {
    backgroundColor: '#D96163',
  },
  lightGray: {
    backgroundColor: '#BBBBBB',
  },
  redCircleText: {
    color: '#fff',
    fontSize: 17,
  },
  grayCircleText: {
    fontSize: 17,
  },
});
