import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { CompositeScreenProps } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Card } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import { chores } from '../components/mockedChores';
import { RootStackParamList } from '../navigators/RootStackNavigator';
import { TabParamList } from '../navigators/TabNavigator';

type HouseholdProps = CompositeScreenProps<
  NativeStackScreenProps<RootStackParamList>,
  BottomTabScreenProps<TabParamList, 'Household'>
>;

export default function HouseholdScreen({ navigation }: HouseholdProps) {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          {chores.map((chore) => (
            <Pressable style={styles.chorePressable} key={chore.id}>
              <Card
                style={styles.choreInfo}
                onPress={() => navigation.navigate('Chore', { id: chore.id })}
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
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
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
