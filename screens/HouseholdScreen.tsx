import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Avatar, Card, IconButton, Text, TextInput } from 'react-native-paper';
import { avatarsMap } from '../data/data';
import { HouseholdMember } from '../data/types';
import { TopTabParamList } from '../navigators/TopTabNavigator';
import { setHouseholdName } from '../store/household/householdSlice';
import { selectMembersInCurrentHousehold } from '../store/householdmember/householdmemberSelectors';
import {
  setCurrentHouseholdMember,
  updateHouseholdMember,
} from '../store/householdmember/householdmemberSlice';
import {
  selectCurrentHousehold,
  selectCurrentHouseholdMember,
  selectCurrentUser,
} from '../store/sharedSelectors';
import { useAppDispatch, useAppSelector } from '../store/store';

type HouseholdProps = NativeStackScreenProps<TopTabParamList, 'Household'>;

export default function HouseholdScreen({ route }: HouseholdProps) {
  const dispatch = useAppDispatch();
  const currentUser = useAppSelector(selectCurrentUser);
  const currentHousehold = useAppSelector(selectCurrentHousehold);
  const membersInCurrentHousehold = useAppSelector(
    selectMembersInCurrentHousehold,
  );
  const currentMember = membersInCurrentHousehold.find(
    (member) => member.userId === currentUser?.uid,
  );
  const currentHouseholdMember = useAppSelector(selectCurrentHouseholdMember);

  const isOwner = currentHouseholdMember?.owner ?? false;

  useEffect(() => {
    if (currentUser && currentHousehold) {
      dispatch(
        setCurrentHouseholdMember({
          userId: currentUser.uid,
          householdId: currentHousehold?.id,
        }),
      );
    }
  }, [currentHousehold, currentUser, dispatch]);

  if (!currentMember) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>Användaren kunde inte hittas.</Text>
      </View>
    );
  }

  const CurrentHousehold = () => {
    const dispatch = useAppDispatch();
    const [isEditing, setIsEditing] = useState(false);
    const [newHouseholdName, setNewHouseholdName] = useState('');

    const currentHouseholdName = currentHousehold?.name;

    const handleSave = () => {
      dispatch(setHouseholdName(newHouseholdName));
      setIsEditing(false);
    };

    useEffect(() => {
      if (isEditing) {
        setNewHouseholdName(currentHouseholdName || '');
      }
    }, [isEditing, currentHouseholdName]);

    return (
      <View style={styles.householdContainer}>
        {isEditing ? (
          <TextInput
            mode="outlined"
            value={newHouseholdName}
            onChangeText={setNewHouseholdName}
            style={styles.input}
          />
        ) : (
          <Text style={styles.statisticsTextHouseHold}>
            {currentHouseholdName || 'Hushåll'}
          </Text>
        )}
        <IconButton
          icon={isEditing ? 'content-save' : 'pencil-outline'}
          size={24}
          onPress={() => {
            if (isEditing) {
              handleSave();
            }
            setIsEditing(!isEditing);
          }}
        />
      </View>
    );
  };

  const HouseholdCode = () => (
    <Card style={styles.codeCard}>
      <Card.Content>
        <Text variant="titleLarge">
          {currentHousehold!.code || 'Ingen kod'}
        </Text>
      </Card.Content>
    </Card>
  );

  const CurrentUserAvatar = () => (
    <View style={styles.avatarContainer}>
      <Avatar.Image
        size={60}
        source={avatarsMap[currentMember!.avatar].icon}
        style={{ backgroundColor: avatarsMap[currentMember.avatar].color }}
      />
      <View style={styles.usernameContainer}>
        <Text style={styles.username}>
          {currentMember!.name || 'användarnamn'}
        </Text>
        <IconButton
          icon="pencil-outline"
          size={24}
          onPress={() => console.log('Ändra avatar eller namn')}
        />
      </View>
    </View>
  );

  const AllHouseholdMembers = () => {
    const handleMakeOwner = (member: HouseholdMember) => {
      if (!member) {
        console.error('No member to update!');
        return;
      }
      const updateMember = {
        id: member.id,
        userId: member.userId,
        householdId: member.householdId,
        avatar: member.avatar,
        name: member.name,
        owner: !member.owner,
        isActive: member.isActive,
        isRequest: member.isRequest,
      };
      dispatch(updateHouseholdMember(updateMember));
    };

    const handlePausePlayMember = (member: HouseholdMember) => {
      if (!member) {
        console.error('No member to update!');
        return;
      }
      const updateMember = {
        id: member.id,
        userId: member.userId,
        householdId: member.householdId,
        avatar: member.avatar,
        name: member.name,
        owner: member.owner,
        isActive: !member.isActive,
        isRequest: member.isRequest,
      };
      dispatch(updateHouseholdMember(updateMember));
    };

    return (
      <Card style={styles.card}>
        <Card.Content>
          <Text variant="titleLarge">Hushållsmedlemmar</Text>
          <View style={styles.membersContainer}>
            {membersInCurrentHousehold.map((member) => (
              <View key={member.id} style={styles.memberItem}>
                <Avatar.Image
                  size={30}
                  source={avatarsMap[currentMember!.avatar].icon}
                  style={{
                    backgroundColor: avatarsMap[currentMember.avatar].color,
                  }}
                />
                {isOwner && (
                  <View style={{ paddingRight: 3 }}>
                    <IconButton
                      icon="account-key"
                      iconColor={member.owner ? 'green' : '#777'}
                      size={20}
                      onPress={() => handleMakeOwner(member)}
                    />

                    <IconButton
                      icon={member.isActive ? 'pause' : 'play'}
                      iconColor={member.isActive ? '#FF7F50' : 'green'}
                      size={20}
                      onPress={() => handlePausePlayMember(member)}
                      style={{ marginTop: -20 }}
                    />
                  </View>
                )}
                <Text style={styles.memberName}>
                  {member.name || 'Medlemsnamn'}
                </Text>
              </View>
            ))}
          </View>
        </Card.Content>
      </Card>
    );
  };

  const RemoveHousehold = () => (
    <View style={styles.binIcon}>
      <IconButton
        icon="delete"
        size={24}
        onPress={() => console.log('Ta bort hushåll')}
      />
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
    maxHeight: 1000,
  },
  householdContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  statisticsTextHouseHold: {
    fontSize: 30,
    fontWeight: 'bold',
    marginRight: 10,
  },
  input: {
    width: 200,
    marginRight: 10,
    fontSize: 18,
  },
  avatarContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
  },
  avatarBackground: {
    backgroundColor: 'lightgrey',
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

    borderRadius: 10,
    padding: 15,
    flexShrink: 1,
    flexGrow: 0,
    marginTop: 20,
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
  },
  codeCard: {
    width: 300,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 3,

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
    maxWidth: 100,
    padding: 2,
    fontSize: 16,
    flexWrap: 'wrap',
  },
  errorText: {
    fontSize: 18,
    color: 'red',
    marginTop: 20,
  },
});
