import React, { useState } from 'react';
import {
  Button,
  Modal,
  ScrollView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
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
  const [newChoreDescription, setNewChoreDescription] = useState('');
  const [newChoreInterval, setNewChoreInterval] = useState(1);
  const [newChoreEnergyWeight, setNewChoreEnergyWeight] = useState(1);
  const [showIntervalPicker, setShowIntervalPicker] = useState(false);
  const [showEnergyWeightPicker, setShowEnergyWeightPicker] = useState(false);
  const dispatch = useAppDispatch();

  const handleAddChore = () => {
    dispatch(
      addChore({
        id: incrementId(),
        title: newChoreTitle,
        description: newChoreDescription,
        interval: newChoreInterval,
        energyWeight: newChoreEnergyWeight,
        householdId: 1,
      } as Chore),
    );
    setModalVisible(false);
    setNewChoreTitle('');
    setNewChoreDescription('');
    setNewChoreInterval(1);
    setNewChoreEnergyWeight(1);
    setShowIntervalPicker(false);
    setShowEnergyWeightPicker(false);
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
        {showIntervalPicker ? (
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.horizontalPicker}
          >
            {Array.from({ length: 31 }, (_, i) => i + 1).map((num) => (
              <TouchableOpacity
                key={num}
                style={[
                  styles.pickerItem,
                  newChoreInterval === num && styles.selectedPickerItem,
                ]}
                onPress={() => {
                  setNewChoreInterval(num);
                  setShowIntervalPicker(false);
                }}
              >
                <Text>{num}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        ) : (
          <Button
            title={`Interval: ${newChoreInterval}`}
            onPress={() => setShowIntervalPicker(true)}
          />
        )}
        {showEnergyWeightPicker ? (
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.horizontalPicker}
          >
            {Array.from({ length: 10 }, (_, i) => i + 1).map((num) => (
              <TouchableOpacity
                key={num}
                style={[
                  styles.pickerItem,
                  newChoreEnergyWeight === num && styles.selectedPickerItem,
                ]}
                onPress={() => {
                  setNewChoreEnergyWeight(num);
                  setShowEnergyWeightPicker(false);
                }}
              >
                <Text>{num}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        ) : (
          <Button
            title={`Energy Weight: ${newChoreEnergyWeight}`}
            onPress={() => setShowEnergyWeightPicker(true)}
          />
        )}
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
  picker: {
    height: 50,
    width: '100%',
    marginBottom: 15,
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  horizontalPicker: {
    marginBottom: 15,
    width: '100%',
  },
  pickerItem: {
    padding: 10,
    marginHorizontal: 5,
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
  },
  selectedPickerItem: {
    backgroundColor: '#d0d0d0',
  },
});
