import React, { useEffect, useState } from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import {
  Button,
  Card,
  Modal,
  Portal,
  Surface,
  Text,
  TextInput,
} from 'react-native-paper';
import { z } from 'zod';
import { avatarsMap } from '../data/data';
import { selectCurrentUser } from '../store/sharedSelectors';
import { addHousehold } from '../store/household/householdThunks';
import { addHouseholdMember } from '../store/householdmember/householdmemberThunks';
import { useAppDispatch, useAppSelector } from '../store/store';
import AvatarModal from './AvatarModal';

const householdNameSchema = z.string().min(1, 'Hushållet måste ha ett namn');
const userNameSchema = z.string().min(1, 'Användarnamn måste anges');
/* const userAvatar = z.string().min(1, 'Användarnamn måste anges'); */

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
  const [selectedAvatar, setSelectedAvatar] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const dispatch = useAppDispatch();
  const currentUser = useAppSelector(selectCurrentUser);

  const generateHouseholdCode = () => {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    const charactersLength = characters.length;
    for (let i = 0; i < 5; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    setHouseholdCode(result);
  };

  const handleAddHousehold = async () => {
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
    if (!currentUser) {
      console.error('User ID is not available');
      return;
    }
    if (!selectedAvatar) {
      console.error('Avatar is of value null');
      return;
    }

    const newHousehold = await dispatch(
      addHousehold({ name: householdName, code: householdCode }),
    );

    if (addHousehold.fulfilled.match(newHousehold)) {
      const householdId = newHousehold.payload.id;

      dispatch(
        addHouseholdMember({
          userId: currentUser.uid,
          householdId: householdId,
          avatar: selectedAvatar,
          name: userName,
          owner: true,
          isActive: true,
          isRequest: false,
        }),
      );
    }

    setAddHouseholdModalVisible(false);
    setTimeout(() => {
      setHouseholdName('');
      setUserName('');
      setSelectedAvatar(null);
      generateHouseholdCode();
    }, 100);
  };

  useEffect(() => {
    generateHouseholdCode();
  }, []);

  return (
    <Portal>
      <Modal
        visible={addHouseholdModalVisible}
        onDismiss={() => setAddHouseholdModalVisible(false)}
        contentContainerStyle={styles.modalContainer}
      >
        <Surface style={styles.container}>
          <View style={{ alignItems: 'center' }}>
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
          </View>
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
              labelStyle={styles.buttonText}
              contentStyle={{ paddingVertical: 5 }}
              onPress={handleAddHousehold}
            >
              Lägg till
            </Button>
          </View>
        </Surface>
      </Modal>
      <AvatarModal
        avatarModalVisible={avatarModalVisible}
        setAvatarModalVisible={setAvatarModalVisible}
        onAvatarSelect={setSelectedAvatar}
      />
    </Portal>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    margin: 30,
  },
  container: {
    padding: 40,
    borderRadius: 10,
  },
  avatarCircle: {
    width: 100,
    height: 100,
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15,
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
  },
  circleText: {
    fontWeight: 'bold',
  },
  inputCaption: {
    fontSize: 20,
    paddingBottom: 5,
    fontWeight: 'bold',
  },
  input: {
    marginBottom: 15,

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
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
  },
  codeText: {
    fontSize: 24,
    paddingBottom: 5,
  },
  card: {},
});
