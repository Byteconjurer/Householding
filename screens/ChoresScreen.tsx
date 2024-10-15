import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Card } from 'react-native-paper';
import { RootStackParamList } from '../navigators/RootStackNavigator';
import { useAppDispatch, useAppSelector } from '../store/store';
import { addChore } from '../store/chore/choresSlice';
import { Chore } from '../data/types';
import { useState } from 'react';

type ChoresProps = NativeStackScreenProps<RootStackParamList>;

export default function ChoresScreen({ navigation }: ChoresProps) {
  const chores = useAppSelector((state) => state.chore);
  const dispatch = useAppDispatch();

  // Skall egentligen hanteras av db. 3 st är redan mockade.
  const [id, setId] = useState(3);
  
  function incrementId() {
    setId(id + 1);
    return id;
  }

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {chores.map((chore) => (
          <Pressable style={styles.chorePressable} key={chore.id}>
            <Card
              style={styles.choreInfo}
              onPress={() =>
                navigation.navigate('ChoreDetails', { id: String(chore.id) })
              }
            >
              <View style={styles.textView}>
                <Text style={styles.choreName}>CHORE:</Text>
                <Text>{chore.title}</Text>
              </View>
            </Card>
          </Pressable>
        ))}
        <Pressable
          onPress={() =>
            // Ska egentligen öppna en modal för att skapa en ny chore
            dispatch(
              addChore({
                id: incrementId(),
                title: 'Städa allt',
                description: 'Städa allt överallt',
                interval: 2,
                energyWeight: 7,
                householdId: 1,
              } as Chore),
            )
          }
        >
          <Card style={styles.choreInfo}>
            <Text>Add Chore</Text>
          </Card>
        </Pressable>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
    alignItems: 'center',
  },
  choreInfo: {
    justifyContent: 'center',
    height: 50,
    marginBottom: 10,
    marginTop: 10,
  },
  choreName: {
    marginLeft: 20,
    fontSize: 22,
    fontWeight: 'bold',
  },
  textView: {
    width: '95%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  chorePressable: {
    width: '95%',
  },
});
