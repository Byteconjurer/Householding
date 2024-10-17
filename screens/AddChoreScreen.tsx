import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import { ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';
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
        <Card style={styles.titleCard}>
          <Card.Content style={styles.cardContent}>
            <TextInput
              placeholder="Titel"
              placeholderTextColor={'grey'}
              value={newChoreTitle}
              onChangeText={setNewChoreTitle}
              style={[styles.input, styles.placeholder]}
              underlineColor="transparent"
            />
          </Card.Content>
        </Card>
        <Card style={styles.descriptionCard}>
          <Card.Content style={styles.cardContent}>
            <TextInput
              placeholder="Beskrivning"
              placeholderTextColor={'grey'}
              value={newChoreDescription}
              onChangeText={setNewChoreDescription}
              multiline={true}
              style={[styles.input, styles.placeholder]}
              underlineColor="transparent"
            />
          </Card.Content>
        </Card>
        <View style={styles.intervalEnergyButtons}>
          {showIntervalPicker ? (
            <Button style={styles.intervalPicker}>
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
            </Button>
          ) : (
            <Button
              mode="elevated"
              textColor="black"
              buttonColor="#fff"
              onPress={() => setShowIntervalPicker(true)}
              style={styles.intervalButton}
            >
              <View style={styles.textView}>
                <Text style={styles.intervalWeightText}>Återkommer: </Text>
                <View style={styles.inlineText}>
                  <Text style={{ fontSize: 20 }}>var </Text>
                  <View style={styles.circle}>
                    <Text style={styles.circleText}>
                      {newChoreInterval}
                    </Text>
                  </View>
                  <Text style={{ fontSize: 20 }}> dag</Text>
                </View>
              </View>
            </Button>
          )}
          {showEnergyWeightPicker ? (
            <Button style={styles.energyPicker}>
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
            </Button>
          ) : (
            <Button
              mode="elevated"
              textColor="black"
              buttonColor="#fff"
              onPress={() => setShowEnergyWeightPicker(true)}
              style={styles.energyButton}
            >
              <View style={styles.textView}>
                <View>
                  <Text style={styles.intervalWeightText}>Värde: </Text>
                  <Text style={{ color: 'grey' }}>
                    Hur energikrävande är sysslan?
                  </Text>
                </View>
                <View style={styles.circle}>
                  <Text style={styles.circleText}>{newChoreEnergyWeight}</Text>
                </View>
              </View>
            </Button>
          )}
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <Button
          icon="plus-circle-outline"
          textColor="black"
          buttonColor="#fff"
          labelStyle={styles.addButtonText}
          style={{
            width: '50%',
            height: '100%',
            borderRadius: 0,
            justifyContent: 'center',
          }}
          onPress={handleAddChore}
        >
          Spara
        </Button>
        <Button
          icon="close-circle-outline"
          textColor="black"
          buttonColor="#fff"
          labelStyle={styles.cancelButtonText}
          style={{
            width: '50%',
            height: '100%',
            borderRadius: 0,
            justifyContent: 'center',
          }}
          onPress={() => navigation.navigate('Chores')}
        >
          Stäng
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#EAEAEA',
  },
  content: {
    flex: 1,
    gap: 16,
    padding: 12,
  },
  titleCard: {
    backgroundColor: '#fff',
    height: 60,
  },
  descriptionCard: {
    backgroundColor: '#fff',
    height: 150,
  },
  cardContent: {
    height: '100%',
  },
  input: {
    margin: -16,
    backgroundColor: 'transparent',
  },
  placeholder: {
    fontSize: 18,
  },
  intervalPicker: {
    backgroundColor: '#fff',
    height: 60,
  },
  energyPicker: {
    backgroundColor: '#fff',
    height: 80,
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  intervalEnergyButtons: {
    gap: 16,
  },
  horizontalPickerContent: {
    alignItems: 'center',
  },
  pickerItem: {
    padding: 10,
    marginHorizontal: 8,
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
  },
  pickerItemText: {
    fontSize: 18,
  },
  selectedPickerItem: {
    backgroundColor: '#d0d0d0',
  },
  intervalButton: {
    height: 60,
    borderRadius: 12,
  },
  energyButton: {
    height: 80,
    borderRadius: 12,
  },
  textView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  inlineText: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  intervalWeightText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  addButtonText: {
    fontSize: 20,
    padding: 2,
  },
  cancelButtonText: {
    fontSize: 20,
    padding: 2,
    justifyContent: 'center',
  },
  circle: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  circleText: {
    fontSize: 18,
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    height: 80,
  },
});
