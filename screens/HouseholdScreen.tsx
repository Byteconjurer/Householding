import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import {
  Avatar,
  Card,
  IconButton,
  Modal,
  Text,
  TextInput,
} from 'react-native-paper';
import { avatarsMap } from '../data/data';
import { HouseholdMember } from '../data/types';
import { TopTabParamList } from '../navigators/TopTabNavigator';
import { setHouseholdName } from '../store/household/householdSlice';
import {
  selectMembersInCurrentHousehold,
  selectCurrentHouseholdMember,
} from '../store/householdmember/householdmemberSelectors';
import {
  selectCurrentHousehold,
  selectCurrentUser,
} from '../store/sharedSelectors';
import { useAppDispatch, useAppSelector } from '../store/store';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../navigators/RootStackNavigator';
import {
  deleteHouseholdMember,
  fetchHouseholdMembersInCurrentHousehold,
  updateHouseholdMember,
} from '../store/householdmember/householdmemberThunks';
import {
  deleteHouseholdAndMembers,
  updateHousehold,
} from '../store/household/householdThunks';
import NameAndAvatarSelection from '../components/NameAndAvatarSelection';
import { fetchChoresCompletedForHousehold } from '../store/choreCompleted/chorecompletedThunks';

type HouseholdProps = NativeStackScreenProps<TopTabParamList, 'Household'>;

export default function HouseholdScreen({ route }: HouseholdProps) {
  const dispatch = useAppDispatch();
  const [editModalVisible, setEditModalVisible] = useState(false);
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const currentUser = useAppSelector(selectCurrentUser);
  const currentHousehold = useAppSelector(selectCurrentHousehold);
  const currentHouseholdMember = useAppSelector(selectCurrentHouseholdMember);
  const membersInCurrentHousehold = useAppSelector(
    selectMembersInCurrentHousehold,
  );

  const isOwner = currentHouseholdMember?.owner ?? false;

  useEffect(() => {
    dispatch(fetchHouseholdMembersInCurrentHousehold());
    dispatch(fetchChoresCompletedForHousehold(currentHousehold!.id));
  }, [currentHousehold, currentUser, dispatch]);

  if (!currentHouseholdMember) {
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
      dispatch(
        updateHousehold({ ...currentHousehold!, name: newHouseholdName }),
      );
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
        source={avatarsMap[currentHouseholdMember!.avatar].icon}
        style={{
          backgroundColor: avatarsMap[currentHouseholdMember.avatar].color,
        }}
      />
      <View style={styles.usernameContainer}>
        <Text style={styles.username}>
          {currentHouseholdMember.name || 'användarnamn'}
        </Text>
        <IconButton
          icon="pencil-outline"
          size={24}
          onPress={() => setEditModalVisible(true)}
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
        owner: !member.owner,
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
        isActive: !member.isActive,
      };
      dispatch(updateHouseholdMember(updateMember));
    };

    return (
      <Card style={styles.card}>
        <Card.Content>
          <Text variant="titleLarge">Hushållsmedlemmar</Text>
          <View style={styles.membersContainer}>
            {membersInCurrentHousehold.map((member) => (
              <View
                key={member.id}
                style={{
                  width: '50%',
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginTop: currentHouseholdMember.owner ? -10 : 15,
                }}
              >
                <Avatar.Image
                  size={30}
                  source={avatarsMap[member!.avatar].icon}
                  style={{
                    backgroundColor: avatarsMap[member.avatar].color,
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
                <Text
                  style={{
                    maxWidth: 100,
                    padding: 2,
                    fontSize: 16,
                    flexWrap: 'wrap',
                    marginLeft: currentHouseholdMember.owner ? 0 : 15,
                  }}
                >
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
        icon="exit-run"
        size={30}
        onPress={() => {
          dispatch(deleteHouseholdMember(currentHouseholdMember.id));
          if (currentHouseholdMember?.owner) {
            dispatch(deleteHouseholdAndMembers(currentHousehold!.id));
          }
          navigation.navigate('Home');
        }}
      />
    </View>
  );

  const EditModal = () => (
    <Modal
      visible={editModalVisible}
      onDismiss={() => setEditModalVisible(false)}
    >
      <NameAndAvatarSelection
        householdId={currentHousehold!.id}
        householdMembers={membersInCurrentHousehold}
        setJoinModalVisible={setEditModalVisible}
        resetHouseholdId={() =>
          dispatch(fetchHouseholdMembersInCurrentHousehold())
        }
        edit={true}
      />
    </Modal>
  );

  return (
    <View style={styles.container}>
      <CurrentHousehold />
      <HouseholdCode />
      <CurrentUserAvatar />
      <AllHouseholdMembers />
      <RemoveHousehold />
      <EditModal />
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
  errorText: {
    fontSize: 18,
    color: 'red',
    marginTop: 20,
  },
});
