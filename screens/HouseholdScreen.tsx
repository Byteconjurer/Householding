import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useEffect } from 'react';
import {
  ImageSourcePropType,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import { Avatar, Card, Text } from 'react-native-paper';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { TopTabParamList } from '../navigators/TopTabNavigator';

import {
  selectMembersByHouseholdId,
  setCurrentHouseholdMember,
} from '../store/householdmember/householdmemberSlice';
import { RootState, useAppDispatch, useAppSelector } from '../store/store';

type HouseholdProps = NativeStackScreenProps<TopTabParamList, 'Household'>;

export default function HouseholdScreen({ route }: HouseholdProps) {
  const dispatch = useAppDispatch();
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

  const currentUserId = useAppSelector((state) => state.user.currentUser?.uid);

  const currentHousehold = useAppSelector((state) => state.household.current);

  const householdMembers = useAppSelector((state) => state.householdmember);

  const membersInCurrentHousehold = useAppSelector((state: RootState) =>
    selectMembersByHouseholdId(state, route.params.householdId),
  );

  useEffect(() => {
    if (currentUserId) {
      dispatch(setCurrentHouseholdMember(currentUserId));
    }
  }, [currentUserId, dispatch]);

  const currentUser = householdMembers.list.find(
    (member) => member.userId === currentUserId,
  );
  console.log('Current User:', currentUser);

  if (!currentUser) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>Användaren kunde inte hittas.</Text>
      </View>
    );
  }

  if (!currentHousehold) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>Hushållet kunde inte hittas.</Text>
      </View>
    );
  }

  const CurrentHousehold = () => (
    <View style={styles.householdContainer}>
      <Text style={styles.statisticsTextHouseHold}>
        {currentHousehold.name || 'Hushåll'}
      </Text>
      <TouchableOpacity onPress={() => console.log('Ändra hushållsnamn')}>
        <MaterialIcons name="edit" size={30} color="#777" />
      </TouchableOpacity>
    </View>
  );

  const HouseholdCode = () => (
    <Card style={styles.codeCard}>
      <Card.Content>
        <Text variant="titleLarge">{currentHousehold.code || 'Ingen kod'}</Text>
      </Card.Content>
    </Card>
  );

  const CurrentUserAvatar = () => (
    <View style={styles.avatarContainer}>
      <Avatar.Image size={60} source={avatarImages[currentUser.avatar]} />
      <View style={styles.usernameContainer}>
        <Text style={styles.username}>
          {currentUser.name || 'användarnamn'}
        </Text>
        <TouchableOpacity
          onPress={() => console.log('Ändra avatar eller namn')}
        >
          <MaterialIcons name="edit" size={30} color="#777" />
        </TouchableOpacity>
      </View>
    </View>
  );
  const AllHouseholdMembers = () => (
    <Card style={styles.card}>
      <Card.Content>
        <Text variant="titleLarge">Hushållsmedlemmar</Text>
        <View style={styles.membersContainer}>
          {membersInCurrentHousehold.map((member) => (
            <View key={member.id} style={styles.memberItem}>
              <Avatar.Image
                size={30}
                source={avatarImages[member.avatar]}
                style={styles.avatar}
              />
              <Text style={styles.memberName}>
                {member.name || 'Medlemsnamn'}
              </Text>
            </View>
          ))}
        </View>
      </Card.Content>
    </Card>
  );

  const RemoveHousehold = () => (
    <View style={styles.binIcon}>
      <TouchableOpacity onPress={() => console.log('Ta bort hushåll')}>
        <MaterialIcons name="delete" size={30} color="#777" />
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <CurrentHousehold />
      <HouseholdCode />
      <CurrentUserAvatar />
      <AllHouseholdMembers />
      <RemoveHousehold />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
    maxHeight: 1000,
  },
  householdContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  statisticsTextHouseHold: {
    fontSize: 30,
    fontWeight: 'bold',
    marginRight: 10,
  },
  avatarContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  usernameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  username: {
    fontSize: 18,
    fontWeight: 'bold',
    marginRight: 10,
  },
  card: {
    width: '90%',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 3,
    backgroundColor: '#f8f9fa',
    borderRadius: 10,
    padding: 15,
    flexShrink: 1,
    flexGrow: 0,
  },
  membersContainer: {
    marginTop: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  memberItem: {
    width: '45%',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  avatar: {
    marginRight: 8,
  },
  codeCard: {
    width: 300,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 3,
    backgroundColor: '#f8f9fa',
    borderRadius: 10,
  },
  binIcon: {
    padding: 20,
    marginBottom: 50,
  },
  memberContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  memberName: {
    fontSize: 16,
  },
  errorText: {
    fontSize: 18,
    color: 'red',
    marginTop: 20,
  },
});
