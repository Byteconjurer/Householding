import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useState } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { Button, Card, Text } from 'react-native-paper';
import { RootStackParamList } from '../navigators/RootStackNavigator';
import { selectChoresByCurrentHousehold } from '../store/household/householdSelectors';
import { useAppSelector } from '../store/store';

type UpdateChoreProps = NativeStackScreenProps<
  RootStackParamList,
  'UpdateChore'
>;

export default function UpdateChoreScreen({ navigation }: UpdateChoreProps) {
  //Hämtar alla chores för ett visst hushåll
  const chores = useAppSelector(selectChoresByCurrentHousehold);
  //Hårdkodat vilken syssla som visas.
  const chore = chores[0];

  const [title, setTitel] = useState(chore.title);
  const [description, setDescription] = useState(chore.description);

  return (
    <>
      <View style={styles.root}>
        <Card style={styles.white}>
          <Card.Content>
            <TextInput
              placeholder="Titel"
              style={styles.input}
              value={title}
              multiline={true}
              onChangeText={(text) => setTitel(text)}
            />
          </Card.Content>
        </Card>
        <Card style={styles.white}>
          <Card.Content style={styles.descriptionContainer}>
            <TextInput
              placeholder="Beskrivning"
              style={styles.input}
              value={description}
              multiline={true}
              onChangeText={(description) => setDescription(description)}
            />
          </Card.Content>
        </Card>

        <Card style={styles.white}>
          <Card.Content style={styles.recurrentContainer}>
            <Text style={styles.boldText}>Återkommer:</Text>
            <Text>var {chore.interval} dag</Text>
          </Card.Content>
        </Card>

        <Card style={styles.white}>
          <Card.Content style={styles.energiWeightContainer}>
            <View>
              <Text style={styles.boldText}>Värde:</Text>
              <Text>Hur energikrävande är sysslan?</Text>
            </View>
            <View style={styles.circle}>
              <Text>{chore.energyWeight}</Text>
            </View>
          </Card.Content>
        </Card>
      </View>
      <View style={styles.buttonContainer}>
        <Button
          style={styles.button}
          icon="plus-circle-outline"
          labelStyle={{ fontSize: 18 }}
          onPress={() => console.log('klickat på spara')}
        >
          Spara
        </Button>
        <Button
          style={styles.button}
          icon="close-circle-outline"
          labelStyle={{ fontSize: 18 }}
          onPress={() =>
            console.log(
              'klickat på stäng. Här måste nog navigatorerna slås ihop så att man kan navigera till rätt',
            )
          }
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
  boldText: {
    fontSize: 20,
    fontWeight: 700,
  },
  descriptionContainer: {
    minHeight: 150,
  },
  recurrentContainer: {
    flexDirection: 'row',
  },
  energiWeightContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  circle: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EAEAEA',
    height: 25,
    width: 25,
    borderRadius: 12.5,
  },
  buttonContainer: {
    flexDirection: 'row',
    height: 75,
  },
  button: {
    flex: 1,
    justifyContent: 'center',
  },
});
