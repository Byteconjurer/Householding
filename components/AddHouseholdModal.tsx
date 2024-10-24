import React, { useEffect, useState } from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import {
  Button,
  Card,
  Modal,
  Portal,
  Text,
  TextInput,
} from 'react-native-paper';
import { z } from 'zod';
import { avatarsMap } from '../data/data';
import { selectLoggedInUserId } from '../store/household/householdSelectors';
import { addHousehold } from '../store/household/householdSlice';
import { addHouseholdmember } from '../store/householdmember/householdmemberSlice';
import { useAppDispatch, useAppSelector } from '../store/store';
import AvatarModal from './AvatarModal';

const householdNameSchema = z.string().min(1, 'Hushållet måste ha ett namn');
const userNameSchema = z.string().min(1, 'Användarnamn måste anges');
const userAvatar = z.string().min(1, 'Användarnamn måste anges');

type AddHouseholdModalProps = {
  addHouseholdModalVisible: boolean;
  setAddHouseholdModalVisible: (visible: boolean) => void;
};

export default function AddHouseholdModal({
  addHouseholdModalVisible: addHouseholdModalVisible,
  setAddHouseholdModalVisible: setAddHouseholdModalVisible,
}: AddHouseholdModalProps) {
  const [householdCode, setHouseholdCode] = useState('');
  const [householdName, setHouseholdName] = useState('');
  const [userName, setUserName] = useState('');
  const [avatarModalVisible, setAvatarModalVisible] = useState(false);
  const [mockedHouseholdId, setMockedHouseholdId] = useState('');
  const [mockedHouseholdMemberId, setMockedHouseholdMemberId] = useState('');
  const [selectedAvatar, setSelectedAvatar] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const dispatch = useAppDispatch();
  const currentUserId = useAppSelector(selectLoggedInUserId);

  // Tillfällig genererad cod, tag bort senare
  const generateMockedHouseholdId = () => {
    const mockedId = Date.now().toString();
    setMockedHouseholdId(mockedId);
  };
  const generateMockedHouseholdMemberId = () => {
    const mockedId = Date.now().toString();
    setMockedHouseholdMemberId(mockedId);
  };

  const generateHouseholdCode = () => {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    const charactersLength = characters.length;
    for (let i = 0; i < 5; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    setHouseholdCode(result);
  };

  const handleAddHousehold = () => {
    const householdNameValidation =
      householdNameSchema.safeParse(householdName);
    const userNameValidation = userNameSchema.safeParse(userName);
    const userAvatarValidation = userNameSchema.safeParse(userName);

    if (!householdNameValidation.success) {
      setError(householdNameValidation.error.errors[0].message);
      return;
    }
    if (!userNameValidation.success) {
      setError(userNameValidation.error.errors[0].message);
      return;
    }
    if (!userAvatarValidation.success) {
      setError(userAvatarValidation.error.errors[0].message);
      return;
    }
    if (!currentUserId) {
      console.error('User ID is not available');
      return;
    }
    if (!selectedAvatar) {
      console.error('Avatar is of value null');
      return;
    }
    dispatch(
      addHousehold({
        //Byt ut till autoIncrementerat ID från databasen senare
        id: mockedHouseholdId,
        name: householdName,
        code: householdCode,
      }),
      addHouseholdmember({
        //Behöver ersätta detta ID med autoIncrementerat ID från databasen senare
        id: mockedHouseholdMemberId,
        userId: currentUserId,
        //Byt ut till autoIncrementerat ID från databasen senare
        householdId: mockedHouseholdId,
        avatar: selectedAvatar,
        name: userName,
        owner: true,
        isActive: true,
        isRequest: false,
      }),
    );
    setAddHouseholdModalVisible(false);
    setTimeout(() => {
      setHouseholdName('');
      setUserName('');
      setSelectedAvatar(null);
      generateHouseholdCode();
    }, 100);
  };

  useEffect(() => {
    //Byt ut till autoIncrementerat ID från databasen senare
    generateMockedHouseholdMemberId();
    generateMockedHouseholdId();
    generateHouseholdCode();
  }, []);

  return (
    <Portal>
      <Modal
        visible={addHouseholdModalVisible}
        onDismiss={() => setAddHouseholdModalVisible(false)}
        contentContainerStyle={styles.modalContainer}
      >
        <View style={styles.container}>
          <TouchableOpacity
            style={styles.avatarCircle}
            onPress={() => {
              setAvatarModalVisible(true);
            }}
          >
            {selectedAvatar ? (
              <View
                style={[
                  styles.avatarBackground,
                  { backgroundColor: avatarsMap[selectedAvatar].color },
                ]}
              >
                <Image
                  source={avatarsMap[selectedAvatar].icon}
                  style={styles.avatarImage}
                  onError={() => setError('Du måste välja en avatar')}
                />
              </View>
            ) : (
              <Text style={styles.circleText}>Välj Avatar</Text>
            )}
          </TouchableOpacity>
          <Text style={styles.inputCaption}>Namn</Text>
          <TextInput
            value={userName}
            onChangeText={(text) => {
              setUserName(text);
              setError(null);
            }}
            mode="outlined"
            style={styles.input}
            theme={{ roundness: 10 }}
          />
          <Text style={styles.inputCaption}>Hushållsnamn</Text>
          <TextInput
            mode="outlined"
            value={householdName}
            onChangeText={(text) => {
              setHouseholdName(text);
              setError(null);
            }}
            style={styles.input}
            theme={{ roundness: 10 }}
            error={!!error}
          />
          {error && <Text style={styles.errorText}>{error}</Text>}
          <Text style={styles.inputCaption}>Kod</Text>
          <Card style={styles.card}>
            <Card.Content>
              <Text style={styles.codeText}>{householdCode}</Text>
            </Card.Content>
          </Card>

          <View style={styles.buttonContainer}>
            <Button
              mode="elevated"
              icon="plus-circle-outline"
              textColor="black"
              buttonColor="#fff"
              labelStyle={styles.buttonText}
              contentStyle={{ paddingVertical: 5 }}
              onPress={handleAddHousehold}
            >
              Lägg till
            </Button>
          </View>
        </View>
      </Modal>
      <AvatarModal
        avatarModalVisible={avatarModalVisible}
        setAvatarModalVisible={setAvatarModalVisible}
        mockedHouseholdId={mockedHouseholdId}
        onAvatarSelect={setSelectedAvatar}
      />
    </Portal>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    backgroundColor: '#fff',
    padding: 20,
    margin: 20,
    borderRadius: 10,
  },
  container: {
    padding: 20,
    backgroundColor: '#fff',
  },
  avatarCircle: {
    width: 100,
    height: 100,
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15,
    backgroundColor: '#EAEAEA',
  },
  avatarBackground: {
    flex: 1,
    borderRadius: 40,
    height: 100,
    width: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarImage: {
    width: 80,
    height: 80,
    backgroundColor: 'transparent',
  },
  circleText: {
    color: 'black',
    fontWeight: 'bold',
  },
  inputCaption: {
    fontSize: 20,
    color: 'black',
    paddingBottom: 5,
    fontWeight: 'bold',
  },
  input: {
    marginBottom: 15,
    backgroundColor: '#EAEAEA',
    borderRadius: 10,
    elevation: 5,
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
  errorText: {
    color: 'red',
    marginBottom: 10,
  },
  codeText: {
    fontSize: 24,
    color: 'black',
    paddingBottom: 5,
  },
  card: {
    backgroundColor: '#EAEAEA',
  },
});
