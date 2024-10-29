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
import { TopTabParamList } from '../navigators/TopTabNavigator';
import { generateNextId } from '../store/chore/choresSelectors';
import { addChore } from '../store/chore/choreThunks';
import { selectCurrentHousehold } from '../store/sharedSelectors';
import store, { useAppDispatch, useAppSelector } from '../store/store';

type ChoresProps = NativeStackScreenProps<TopTabParamList>;

export default function AddChoreScreen({ navigation }: ChoresProps) {
  const [newChoreTitle, setNewChoreTitle] = useState('');
  const [newChoreDescription, setNewChoreDescription] = useState('');
  const [newChoreInterval, setNewChoreInterval] = useState(1);
  const [newChoreEnergyWeight, setNewChoreEnergyWeight] = useState(1);
  const [showIntervalPicker, setShowIntervalPicker] = useState(false);
  const [showEnergyWeightPicker, setShowEnergyWeightPicker] = useState(false);
  const dispatch = useAppDispatch();
  const currentHousehold = useAppSelector(selectCurrentHousehold);
  const nextChoreId = useAppSelector(generateNextId);
  const handleAddChore = () => {
    if (!currentHousehold) {
      console.error('No current household set');
      return;
    }

    // Remove the log when done with testing
    console.log('Adding chore with ID:', nextChoreId);

    const newChore = {
      title: newChoreTitle,
      description: newChoreDescription,
      interval: newChoreInterval,
      energyWeight: newChoreEnergyWeight,
      householdId: currentHousehold.id,
    };

    dispatch(addChore(newChore));

    // Remove the logs when done with testing
    console.log('New chore added:', newChore);
    console.log('Updated state:', store.getState().chore);

    navigation.navigate('Chores');
  };

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
            <Card>
              <Pressable style={styles.intervalPicker}>
                <ScrollView
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  contentContainerStyle={styles.horizontalPickerContent}
                >
                  {Array.from({ length: 31 }, (_, i) => i + 1).map((num) => (
                    <TouchableOpacity
                      key={num}
                      style={[
                        styles.intervalPickerItem,
                        newChoreInterval === num && styles.selectedPickerItem,
                      ]}
                      onPress={() => {
                        setNewChoreInterval(num);
                        setShowIntervalPicker(false);
                      }}
                    >
                      <Text style={styles.intervalPickerItemText}>{num}</Text>
                    </TouchableOpacity>
                  ))}
                </ScrollView>
              </Pressable>
            </Card>
          ) : (
            <Card style={styles.intervalCard}>
              <Pressable
                onPress={() => setShowIntervalPicker(true)}
                style={styles.intervalButton}
              >
                <View style={styles.textView}>
                  <Text style={styles.intervalWeightText}>Återkommer: </Text>
                  <View style={styles.inlineText}>
                    <Text style={{ fontSize: 20 }}>var </Text>
                    <View style={styles.circle}>
                      <Text style={styles.circleText}>{newChoreInterval}</Text>
                    </View>
                    <Text style={{ fontSize: 20 }}> dag</Text>
                  </View>
                </View>
              </Pressable>
            </Card>
          )}
          {showEnergyWeightPicker ? (
            <Card>
              <Pressable style={styles.energyPicker}>
                <ScrollView
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  contentContainerStyle={styles.horizontalPickerContent}
                >
                  {Array.from({ length: 10 }, (_, i) => i + 1).map((num) => (
                    <TouchableOpacity
                      key={num}
                      style={[
                        styles.energyPickerItem,
                        newChoreEnergyWeight === num &&
                          styles.selectedPickerItem,
                      ]}
                      onPress={() => {
                        setNewChoreEnergyWeight(num);
                        setShowEnergyWeightPicker(false);
                      }}
                    >
                      <Text style={styles.energyPickerItemText}>{num}</Text>
                    </TouchableOpacity>
                  ))}
                </ScrollView>
              </Pressable>
            </Card>
          ) : (
            <Card style={styles.energyCard}>
              <Pressable
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
                    <Text style={styles.circleText}>
                      {newChoreEnergyWeight}
                    </Text>
                  </View>
                </View>
              </Pressable>
            </Card>
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
    borderRadius: 12,
  },
  intervalEnergyButtons: {
    gap: 16,
  },
  horizontalPickerContent: {
    alignItems: 'center',
  },
  intervalPickerItem: {
    paddingVertical: 4,
    paddingHorizontal: 4,
    marginHorizontal: 8,
    alignItems: 'center',
  },
  energyPickerItem: {
    padding: 8,
    marginHorizontal: 8,
    backgroundColor: '#f0f0f0',
    borderRadius: 20,
    width: 40,
    height: 40,
    alignItems: 'center',
  },
  energyPickerItemText: {
    fontSize: 18,
  },
  intervalPickerItemText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  selectedPickerItem: {
    backgroundColor: '#d0d0d0',
  },
  intervalButton: {
    height: 60,
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
  intervalCard: {
    backgroundColor: 'white',
    height: 60,
    borderRadius: 12,
    paddingHorizontal: 18,
  },
  energyCard: {
    backgroundColor: 'white',
    height: 80,
    borderRadius: 12,
    paddingHorizontal: 18,
  },
  energyButton: {
    height: 80,
    borderRadius: 12,
  },
});
