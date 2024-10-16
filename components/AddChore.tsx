import React, { useState } from 'react';
import { Button, Modal, StyleSheet, TextInput, View } from 'react-native';
import { Text } from 'react-native-paper';
import { Chore } from '../data/types';
import { addChore } from '../store/chore/choresSlice';
import { useAppDispatch } from '../store/store';

type AddChoreProps = {
  modalVisible: boolean;
  setModalVisible: (visible: boolean) => void;
};

export default function AddChore({
  modalVisible,
  setModalVisible,
}: AddChoreProps) {
  const [newChoreTitle, setNewChoreTitle] = useState('');
  const dispatch = useAppDispatch();

  const handleAddChore = () => {
    // Add logic to save the new chore
    dispatch(
      addChore({
        id: incrementId(),
        title: 'Städa allt',
        description: 'Städa allt överallt',
        interval: 2,
        energyWeight: 7,
        householdId: 1,
      } as Chore),
    );
    setModalVisible(false);
    setNewChoreTitle('');
  };
  const [id, setId] = useState(3);

  function incrementId() {
    setId(id + 1);
    return id;
  }

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}
    >
      <View style={styles.modalView}>
        <Text style={styles.modalText}>New Chore</Text>
        <TextInput
          style={styles.input}
          placeholder="Chore Title"
          value={newChoreTitle}
          onChangeText={setNewChoreTitle}
        />
        <TextInput
          style={styles.input}
          placeholder="Chore Description"
          value={newChoreDescription}
          onChangeText={setNewChoreDescription}
        />
        <Picker
          selectedValue={newChoreInterval}
          style={styles.picker}
          onValueChange={(itemValue) => setNewChoreInterval(itemValue)}
        >
          {Array.from({ length: 31 }, (_, i) => i + 1).map((num) => (
            <Picker.Item
              key={num}
              label={num.toString()}
              value={num.toString()}
            />
          ))}
        </Picker>
        <Picker
          selectedValue={newChoreEnergyWeight}
          style={styles.picker}
          onValueChange={(itemValue) => setNewChoreEnergyWeight(itemValue)}
        >
          {Array.from({ length: 10 }, (_, i) => i + 1).map((num) => (
            <Picker.Item
              key={num}
              label={num.toString()}
              value={num.toString()}
            />
          ))}
        </Picker>
        <View style={styles.modalButtons}>
          <Button title="Add" onPress={handleAddChore} />
          <Button title="Cancel" onPress={() => setModalVisible(false)} />
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 15,
    width: '100%',
    paddingHorizontal: 10,
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
});
