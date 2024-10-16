import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import {
  Button,
  ScrollView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { Text } from 'react-native-paper';
import { Chore } from '../data/types';
import { TopTabParamList } from '../navigators/TopTabNavigator';
import { addChore } from '../store/chore/choresSlice';
import { useAppDispatch } from '../store/store';

type ChoresProps = NativeStackScreenProps<TopTabParamList>;

export default function AddChoreScreen({ navigation }: ChoresProps) {
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
    setNewChoreTitle('');
    setNewChoreDescription('');
    setNewChoreInterval(1);
    setNewChoreEnergyWeight(1);
    setShowIntervalPicker(false);
    setShowEnergyWeightPicker(false);
    navigation.navigate('Chores');
  };

  const [id, setId] = useState(3);

  function incrementId() {
    setId(id + 1);
    return id;
  }

  return (
    <View style={styles.container}>
      <View>
        <TextInput
          style={styles.titleInput}
          placeholder="Title"
          value={newChoreTitle}
          onChangeText={setNewChoreTitle}
        />
        <TextInput
          style={styles.descriptionInput}
          placeholder="Description"
          value={newChoreDescription}
          onChangeText={setNewChoreDescription}
          multiline={true}
        />
        <View style={styles.pickers}>
          {showIntervalPicker ? (
            <View style={styles.pickerContainer}>
              <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.horizontalPickerContent}
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
                    <Text style={styles.pickerItemText}>{num}</Text>
                  </TouchableOpacity>
                ))}
              </ScrollView>
            </View>
          ) : (
            <Button
              title={`Interval: ${newChoreInterval}`}
              onPress={() => setShowIntervalPicker(true)}
            />
          )}
          {showEnergyWeightPicker ? (
            <View style={styles.pickerContainer}>
              <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.horizontalPickerContent}
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
                    <Text style={styles.pickerItemText}>{num}</Text>
                  </TouchableOpacity>
                ))}
              </ScrollView>
            </View>
          ) : (
            <Button
              title={`Energy Weight: ${newChoreEnergyWeight}`}
              onPress={() => setShowEnergyWeightPicker(true)}
            />
          )}
        </View>
      </View>
      <View>
        <View style={styles.modalButtons}>
          <Button title="Add" onPress={handleAddChore} />
          <Button
            title="Cancel"
            onPress={() => navigation.navigate('Chores')}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    padding: 20,
  },
  titleInput: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 15,
    width: '100%',
    paddingHorizontal: 10,
  },
  descriptionInput: {
    height: 100,
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
  pickers: {
    alignItems: 'flex-start',
  },
  pickerContainer: {
    height: 100,
    marginBottom: 15,
  },
  horizontalPickerContent: {
    alignItems: 'center',
  },
  pickerItem: {
    padding: 10,
    marginHorizontal: 5,
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
  },
  pickerItemText: {
    fontSize: 18,
  },
  selectedPickerItem: {
    backgroundColor: '#d0d0d0',
  },
});
