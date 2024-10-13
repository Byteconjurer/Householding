import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Card } from 'react-native-paper';
import { chores } from '../components/chores';
import { RootStackParamList } from '../navigators/RootStackNavigator';

type ChoresProps = NativeStackScreenProps<RootStackParamList>;

export default function ChoresScreen({ navigation }: ChoresProps) {
  return (

      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          {chores.map((chore) => (
            <Pressable style={styles.chorePressable} key={chore.id}>
              <Card
                style={styles.choreInfo}
                onPress={() => navigation.navigate('ChoreDetails', { id: chore.id })} 
              >
                <View style={styles.textView}>
                  <Text style={styles.choreName}>CHORE:</Text>
                  <Text>{chore.name}</Text>
                </View>
              </Card>
            </Pressable>
          ))}
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
