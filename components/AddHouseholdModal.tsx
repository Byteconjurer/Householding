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
import { addHousehold } from '../store/household/householdSlice';
import { useAppDispatch } from '../store/store';

// const registerSchema = z.object({
//   name: z.string().min(1, 'Name must be at least 1 characters long'),
//   code: z
//     .string()
//     .min(5, 'Code must be 5 characters long')
//     .max(5, 'Code must be 5 characters long'),
// });

type AddHouseholdModalProps = {
  addModalVisible: boolean;
  setAddModalVisible: (visible: boolean) => void;
};

export default function AddHouseholdModal({
  addModalVisible,
  setAddModalVisible,
}: AddHouseholdModalProps) {
  const dispatch = useAppDispatch();
  const [id, setId] = useState(3);
  const [householdCode, setHouseholdCode] = useState('');
  const [householdName, setHouseholdName] = useState('');

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

  function incrementId() {
    setId(id + 1);
    return id;
  }

  const handleAddHousehold = () => {
    dispatch(
      addHousehold({
        //mockad id inkrementering. Ska bytas ut när vi uppdaterar senare
        id: incrementId().toString(),
        name: householdName,
        code: householdCode,
        //Här ska man ändra '2' som nu är hårdkodat till att vara det aktuella hushållet när databasen är uppsatt.
      }),
    );
    setAddModalVisible(false);
    setTimeout(() => {
      setHouseholdName('');
      generateHouseholdCode();
    }, 1000);
  };

  //Behövs för Zod?

  // const [errors, setErrors] = useState<{
  //     name?: string;
  //     code?: string;
  //   }>({});

  //   const handleRegister = async () => {
  //     const validationResult = registerSchema.safeParse({ name, code });

  //     let newErrors: {
  //       name?: string;
  //       code?: string;
  //     } = {};

  //     if (!validationResult.success) {
  //       const formattedErrors = validationResult.error.format();
  //       newErrors = {
  //         name: formattedErrors.name?._errors[0],
  //         code: formattedErrors.code?._errors[0],
  //       };
  //     }

  //     if (Object.keys(newErrors).length > 0) {
  //       setErrors(newErrors);
  //       return;
  //     }

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
            onChangeText={setHouseholdName}
            style={styles.input}
            theme={{ roundness: 10 }}
          />
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
    marginTop: 5,
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
