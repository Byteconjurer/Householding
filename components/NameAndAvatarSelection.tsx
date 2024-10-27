import React, { useState } from 'react';
import {
  FlatList,
  Image,
  Modal,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  Avatar,
  Button,
  Card,
  Text,
  TextInput,
  useTheme,
} from 'react-native-paper';
import { avatarsMap } from '../data/data';
import { selectHouseholdById } from '../store/household/householdSelectors';
import { selectCurrentUser } from '../store/sharedSelectors';
import { selectMembersByHouseholdId } from '../store/householdmember/householdmemberSelectors';
import { addHouseholdmember } from '../store/householdmember/householdmemberSlice';
import { useAppDispatch, useAppSelector } from '../store/store';

const NameAndAvatarSelection = ({
  householdId,
  setJoinModalVisible,
  resetHouseholdId,
}: {
  householdId: string;
  setJoinModalVisible: (visible: boolean) => void;
  resetHouseholdId: () => void;
}) => {
  const [name, setName] = useState('');
  const [selectedAvatar, setSelectedAvatar] = useState<string | null>(null);
  const [avatarModalVisible, setAvatarModalVisible] = useState(false);
  const [saved, setSaved] = useState(false);
  const dispatch = useAppDispatch();

  const currentUserId = useAppSelector(selectCurrentUser)?.uid;

  const householdMembers = useAppSelector( selectMembersByHouseholdId(householdId));

  const { colors } = useTheme();

  const handleAvatarSelect = (avatarKey: string) => {
    if (householdMembers.some((member) => member.avatar === avatarKey)) return;
    setSelectedAvatar(avatarKey);
    setAvatarModalVisible(false);
  };

  const household = useAppSelector((state) =>
    selectHouseholdById(householdId),
  );

  const handleSubmit = () => {
    if (!currentUserId) {
      console.error('User ID is not available');
      return;
    }
    if (name && selectedAvatar) {
      console.log('Namn:', name, 'Vald Avatar:', selectedAvatar);
      dispatch(
        addHouseholdmember({
          id: Date.now().toString(),
          userId: currentUserId,
          householdId: householdId,
          avatar: selectedAvatar,
          name: name,
          owner: false,
          isActive: true,
          isRequest: false,
        }),
      );
      setSaved(true);
      setTimeout(() => {
        setSaved(false);
        setJoinModalVisible(false);
        resetHouseholdId();
      }, 2000);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.avatarContainer}>
        <View>
          <TouchableOpacity
            style={styles.avatarCircle}
            onPress={() => setAvatarModalVisible(true)}
          >
            {selectedAvatar ? (
              <Avatar.Image
                size={80}
                source={avatarsMap[selectedAvatar].icon}
                style={{ backgroundColor: avatarsMap[selectedAvatar].color }}
              />
            ) : (
              <Text style={styles.circleText}>Välj Avatar</Text>
            )}
          </TouchableOpacity>
          <View>
            {household && (
              <Text style={styles.householdName}>{household.name}</Text>
            )}
          </View>
        </View>
      </View>
      <Text style={styles.inputtext}>Namn</Text>
      <TextInput
        value={name}
        onChangeText={setName}
        mode="outlined"
        style={styles.input}
      />

      <Modal
        animationType="slide"
        transparent={true}
        visible={avatarModalVisible}
      >
        <View style={styles.chooseAvatarContainer}>
          <FlatList
            data={Object.keys(avatarsMap)}
            keyExtractor={(item) => item}
            numColumns={4}
            renderItem={({ item }) => {
              const isTaken = householdMembers.some(
                (member) => member.avatar === item,
              );
              return (
                <TouchableOpacity
                  onPress={() => handleAvatarSelect(item)}
                  disabled={isTaken}
                >
                  <View style={styles.avatarWrapper}>
                    <Card
                      style={[
                        styles.avatarCard,
                        isTaken && { backgroundColor: colors.surfaceDisabled },
                      ]}
                    >
                      <Image
                        source={avatarsMap[item].icon}
                        style={styles.avatarImage}
                        resizeMode="contain"
                      />
                      {isTaken && (
                        <Text style={styles.takenText}>Upptagen</Text>
                      )}
                    </Card>
                  </View>
                </TouchableOpacity>
              );
            }}
          />
          <Button
            mode="text"
            onPress={() => setAvatarModalVisible(false)}
            style={styles.closeButton}
            textColor="black"
          >
            Stäng
          </Button>
        </View>
      </Modal>

      <View style={styles.buttonContainer}>
        <Button
          onPress={handleSubmit}
          disabled={!name || !selectedAvatar}
          mode="elevated"
          icon="plus-circle-outline"
          textColor="black"
          buttonColor="#fff"
          labelStyle={styles.buttonText}
          contentStyle={{ paddingVertical: 5 }}
        >
          Spara
        </Button>
      </View>

      {saved && <Text style={styles.savedText}>Sparat!</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: 'transparent',
  },
  avatarContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 15,
    backgroundColor: 'transparent',
  },
  avatarCircle: {
    width: 100,
    height: 100,
    borderRadius: 40,
    borderWidth: 2,
    borderColor: '#EAEAEA',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15,
    backgroundColor: '#EAEAEA',
  },
  avatarWrapper: {
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
  },
  circleText: {
    color: 'black',
    fontWeight: 'bold',
  },
  householdName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  inputtext: {
    fontSize: 20,
    color: 'black',
    paddingBottom: 5,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  input: {
    marginBottom: 15,
    backgroundColor: '#EAEAEA',
    borderRadius: 10,
    elevation: 5,
  },
  chooseAvatarContainer: {
    paddingTop: 300,
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    paddingBottom: 20,
  },
  avatarCard: {
    margin: 15,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  avatar: {
    marginBottom: 5,
    backgroundColor: 'transparent',
  },
  avatarImage: {
    width: 60,
    height: 60,
    margin: 5,
    backgroundColor: 'transparent',
  },
  takenText: {
    position: 'absolute',
    color: 'red',
    fontSize: 12,
    textAlign: 'center',
    fontWeight: 'bold',
    top: '80%',
    left: '30%',
    transform: [{ translateX: -15 }, { translateY: -6 }],
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 20,
  },
  buttonText: {
    fontSize: 18,
    padding: 2,
    color: 'black',
  },
  closeButton: {
    marginTop: 20,
    paddingVertical: 5,
    alignSelf: 'center',
    backgroundColor: 'white',
  },
  savedText: {
    textAlign: 'center',
    color: 'green',
    fontSize: 18,
    marginTop: 15,
    fontWeight: 'bold',
  },
});

export default NameAndAvatarSelection;
