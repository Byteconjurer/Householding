import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import {
  Button,
  Card,
  Modal,
  Portal,
  Text,
  TextInput,
} from 'react-native-paper';
import { z } from 'zod';
import { addHousehold } from '../store/household/householdSlice';
import { useAppDispatch } from '../store/store';

const householdNameSchema = z.string().min(1, 'Hushållet måste ha ett namn');

type AddHouseholdModalProps = {
  addModalVisible: boolean;
  setAddModalVisible: (visible: boolean) => void;
};

export default function AddHouseholdModal({
  addModalVisible,
  setAddModalVisible,
}: AddHouseholdModalProps) {
  const [householdCode, setHouseholdCode] = useState('');
  const [householdName, setHouseholdName] = useState('');
  const [error, setError] = useState<string | null>(null);
  const dispatch = useAppDispatch();

  // const currentUserUid = useAppSelector((state) => state.user.currentUser?.uid);
  // console.log(currentUserUid);

  // Tillfällig genererad cod, tag bort senare
  const generateHouseholdCode = () => {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    const charactersLength = characters.length;
    for (let i = 0; i < 5; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    setHouseholdCode(result);
  };

  useEffect(() => {
    generateHouseholdCode();
  }, []);

  const handleAddHousehold = () => {
    const validationResult = householdNameSchema.safeParse(householdName);
    if (!validationResult.success) {
      setError(validationResult.error.errors[0].message);
      return;
    }

    dispatch(
      addHousehold({
        id: Date().toString(),
        name: householdName,
        code: householdCode,
      }),
    );

    setAddModalVisible(false);
    setTimeout(() => {
      setHouseholdName('');
      generateHouseholdCode();
    }, 1000);
  };

  return (
    <Portal>
      <Modal
        visible={addModalVisible}
        onDismiss={() => setAddModalVisible(false)}
        contentContainerStyle={styles.modalContainer}
      >
        <View style={styles.container}>
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
