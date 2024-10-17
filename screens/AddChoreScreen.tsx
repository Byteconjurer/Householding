import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import {
  Pressable,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import { Button, Card, Text, TextInput } from 'react-native-paper';
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
    navigation.navigate('Chores');
  };

  const [id, setId] = useState(3);

  function incrementId() {
    setId(id + 1);
    return id;
  }

  return (
    <View style={styles.root}>
      <View style={styles.content}>
        <Card style={styles.card}>
          <Card.Content>
            <TextInput
              label="Title"
              value={newChoreTitle}
              onChangeText={setNewChoreTitle}
              style={styles.input}
            />
          </Card.Content>
        </Card>
        <Card style={styles.card}>
          <Card.Content>
            <TextInput
              label="Description"
              value={newChoreDescription}
              onChangeText={setNewChoreDescription}
              multiline={true}
              style={styles.input}
            />
          </Card.Content>
        </Card>
        <View style={styles.intervalEnergyPickers}>
          {showIntervalPicker ? (
            <Card style={styles.card}>
              <Card.Content>
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
              </Card.Content>
            </Card>
          ) : (
            <Pressable
              onPress={() => setShowIntervalPicker(true)}
              style={styles.pickers}
            >
              <Card>
                <View style={styles.buttonView}>
                  <Text>Interval: </Text>
                  <Text>{newChoreInterval}</Text>
                </View>
              </Card>
            </Pressable>
          )}
          {showEnergyWeightPicker ? (
            <Card style={styles.card}>
              <Card.Content>
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
                        newChoreEnergyWeight === num &&
                          styles.selectedPickerItem,
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
              </Card.Content>
            </Card>
          ) : (
            <Pressable
              onPress={() => setShowEnergyWeightPicker(true)}
              style={styles.pickers}
            >
              <Card>
                <View style={styles.buttonView}>
                  <Text>Weight: </Text>
                  <Text>{newChoreEnergyWeight}</Text>
                </View>
              </Card>
            </Pressable>
          )}
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <Button
          mode="elevated"
          icon="plus-circle-outline"
          textColor="black"
          buttonColor="#fff"
          labelStyle={styles.buttonText}
          onPress={handleAddChore}
        >
          Add
        </Button>
        <Button
          mode="elevated"
          icon="cancel"
          textColor="black"
          buttonColor="#fff"
          labelStyle={styles.buttonText}
          contentStyle={{ flexDirection: 'row-reverse' }}
          onPress={() => navigation.navigate('Chores')}
        >
          Cancel
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#EAEAEA',
    padding: 16,
    paddingBottom: 40,
  },
  content: {
    flex: 1,
  },
  card: {
    backgroundColor: '#fff',
    marginBottom: 15,
  },
  input: {
    backgroundColor: 'transparent',
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  intervalEnergyPickers: {
    alignItems: 'flex-start',
    gap: 30,
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
  pickers: {
    width: '100%',
  },
  buttonText: {
    fontSize: 20,
    padding: 2,
  },
  buttonView: {
    paddingHorizontal: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'space-between',
//     padding: 20,
//   },
//   titleInput: {
//     height: 50,
//     borderColor: 'gray',
//     borderWidth: 1,
//     marginBottom: 15,
//     width: '100%',
//     paddingHorizontal: 10,
//   },
//   descriptionInput: {
//     height: 100,
//     borderColor: 'gray',
//     borderWidth: 1,
//     marginBottom: 15,
//     width: '100%',
//     paddingHorizontal: 10,
//   },
//   modalButtons: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     width: '100%',
//   },
//   intervalEnergyPickers: {
//     alignItems: 'flex-start',
//   },
//   pickerContainer: {
//     height: 100,
//     marginBottom: 15,
//   },
//   horizontalPickerContent: {
//     alignItems: 'center',
//   },
//   pickerItem: {
//     padding: 10,
//     marginHorizontal: 5,
//     backgroundColor: '#f0f0f0',
//     borderRadius: 5,
//   },
//   pickerItemText: {
//     fontSize: 18,
//   },
//   selectedPickerItem: {
//     backgroundColor: '#d0d0d0',
//   },
// });
