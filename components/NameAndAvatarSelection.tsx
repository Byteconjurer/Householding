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
import { useAppSelector } from '../store/store';

const avatar1 = require('../assets/avatarImages/1.png');
const avatar2 = require('../assets/avatarImages/2.png');
const avatar3 = require('../assets/avatarImages/3.png');
const avatar4 = require('../assets/avatarImages/4.png');
const avatar5 = require('../assets/avatarImages/5.png');
const avatar6 = require('../assets/avatarImages/6.png');
const avatar7 = require('../assets/avatarImages/7.png');
const avatar8 = require('../assets/avatarImages/8.png');

const avatarImages = {
  '1.png': avatar1,
  '2.png': avatar2,
  '3.png': avatar3,
  '4.png': avatar4,
  '5.png': avatar5,
  '6.png': avatar6,
  '7.png': avatar7,
  '8.png': avatar8,
};

type AvatarKeys = keyof typeof avatarImages;

const avatars: AvatarKeys[] = [
  '1.png',
  '2.png',
  '3.png',
  '4.png',
  '5.png',
  '6.png',
  '7.png',
  '8.png',
];

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
  const [selectedAvatar, setSelectedAvatar] = useState<AvatarKeys | null>(null);
  const [avatarModalVisible, setAvatarModalVisible] = useState(false);
  const [saved, setSaved] = useState(false);

  const householdMembers = useAppSelector((state) =>
    state.householdmember.list.filter(
      (member) => member.householdId === householdId,
    ),
  );

  const { colors } = useTheme();

  const handleAvatarSelect = (avatar: AvatarKeys) => {
    if (householdMembers.some((member) => member.avatar === avatar)) return;
    setSelectedAvatar(avatar);
    setAvatarModalVisible(false);
  };

  const household = useAppSelector((state) =>
    state.household.list.find((household) => household.id === householdId),
  );

  const handleSubmit = () => {
    if (name && selectedAvatar) {
      console.log('Namn:', name, 'Vald Avatar:', selectedAvatar);
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
                source={avatarImages[selectedAvatar]}
                style={{ backgroundColor: '#EAEAEA' }}
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
            data={avatars}
            keyExtractor={(item) => item}
            numColumns={4}
            renderItem={({ item }: { item: AvatarKeys }) => {
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
                        source={avatarImages[item]}
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
  modalContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
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
