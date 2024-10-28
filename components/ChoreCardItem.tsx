import { Pressable, StyleSheet, View } from 'react-native';
import { Card, Text } from 'react-native-paper';
import { Chore } from '../data/types';

interface Props {
  chore: Chore;
  onPress: () => void;
}

export default function ChoreCardItem({ chore, onPress }: Props) {
  // const members = useAppSelector(selectMembersInCurrentHousehold);
  // const completedToday = useAppSelector(selectCompletedChoresTodayById(chore.id))

  // Ta reda på om det ska visas en/flera avatar eller en siffra.

  return (
    <Pressable style={styles.chorePressable} key={chore.id}>
      <Card style={styles.choreCard} onPress={onPress}>
        <View style={styles.choreContainer}>
          <View style={styles.widthTitle}>
            <Text style={styles.choreTitle}>{chore.title}</Text>
          </View>
          <View style={styles.avatarContainer}>
            <Text style={styles.choreTitle}>4</Text>
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
