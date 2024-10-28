import { MaterialTopTabScreenProps } from '@react-navigation/material-top-tabs';
import { CompositeScreenProps } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useState } from 'react';
import {
  Pressable,
  ScrollView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { Button, Card, Text } from 'react-native-paper';
import { RootStackParamList } from '../navigators/RootStackNavigator';
import { TopTabParamList } from '../navigators/TopTabNavigator';
import { selectChoreById, updateChore } from '../store/chore/choresSlice';
import { useAppDispatch, useAppSelector } from '../store/store';

type UpdateChoreProps = CompositeScreenProps<
  NativeStackScreenProps<RootStackParamList, 'UpdateChore'>,
  MaterialTopTabScreenProps<TopTabParamList>
>;
export default function UpdateChoreScreen({
  navigation,
  route,
}: UpdateChoreProps) {
  const chore = useAppSelector(selectChoreById(route.params.choreId));

  const [newChoreTitle, setNewChoreTitle] = useState(chore!.title);
  const [newChoreDescription, setNewChoreDescription] = useState(
    chore!.description,
  );
  const [newChoreInterval, setNewChoreInterval] = useState(chore!.interval);
  const [newChoreEnergyWeight, setNewChoreEnergyWeight] = useState(
    chore!.energyWeight,
  );
  const [showIntervalPicker, setShowIntervalPicker] = useState(false);
  const [showEnergyWeightPicker, setShowEnergyWeightPicker] = useState(false);
  const dispatch = useAppDispatch();

  const handleUpdateChore = () => {
    dispatch(
      updateChore({
        id: chore!.id,
        title: newChoreTitle,
        description: newChoreDescription,
        interval: newChoreInterval,
        energyWeight: newChoreEnergyWeight,
        householdId: chore!.householdId,
      }),
    );
    navigation.navigate('Chores');
  };
  return (
    <>
      <View style={styles.root}>
        <Card style={styles.white}>
          <Card.Content>
            <TextInput
              placeholder="Titel"
              style={styles.input}
              value={newChoreTitle}
              multiline={true}
              onChangeText={(text) => setNewChoreTitle(text)}
            />
          </Card.Content>
        </Card>
        <Card style={styles.white}>
          <Card.Content style={styles.descriptionContainer}>
            <TextInput
              placeholder="Beskrivning"
              style={styles.input}
              value={newChoreDescription}
              multiline={true}
              onChangeText={(description) =>
                setNewChoreDescription(description)
              }
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
        </View>
        <View style={styles.intervalEnergyButtons}>
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
          onPress={handleUpdateChore}
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
    </>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#EAEAEA',
    padding: 13,
    gap: 13,
  },
  white: {
    backgroundColor: '#fff',
  },
  input: {
    padding: 2,
    fontSize: 20,
  },
  descriptionContainer: {
    minHeight: 150,
  },

  //ny tillagd Styling
  intervalEnergyButtons: {
    gap: 16,
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
  intervalPicker: {
    backgroundColor: '#fff',
    height: 60,
    borderRadius: 12,
  },
  intervalPickerItem: {
    paddingVertical: 4,
    paddingHorizontal: 4,
    marginHorizontal: 8,
    alignItems: 'center',
    borderRadius: 15,
    width: 30,
  },
  intervalPickerItemText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  intervalButton: {
    height: 60,
    borderRadius: 12,
  },
  inlineText: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  energyPicker: {
    backgroundColor: '#fff',
    height: 80,
    borderRadius: 12,
  },
  horizontalPickerContent: {
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
  selectedPickerItem: {
    backgroundColor: '#d0d0d0',
  },
  energyPickerItemText: {
    fontSize: 18,
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
  intervalWeightText: {
    fontSize: 20,
    fontWeight: 'bold',
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
    height: 80,
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
});
