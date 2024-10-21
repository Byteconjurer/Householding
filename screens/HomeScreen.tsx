import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { getAuth, signOut } from 'firebase/auth';
import { useState } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import { Button, Card, Text } from 'react-native-paper';
import JoinHouseholdModal from '../components/JoinHouseholdModal';
import { RootStackParamList } from '../navigators/RootStackNavigator';
import { useAppSelector } from '../store/store';

type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

export default function HomeScreen({ navigation }: HomeProps) {
  async function signOutUser() {
    await signOut(getAuth());
  }

  const mockedHouseholds = useAppSelector((state) => state.household.list);
  const [modalVisible, setModalVisible] = useState(false);

  const handleOnClick = () => {
    setModalVisible(true);
  };

  return (
    <>
      <View style={styles.root}>
        <View style={styles.householdContainer}>
          {mockedHouseholds.map((household) => (
            <Pressable
              key={household.id}
              onPress={() =>
                navigation.navigate('TopTabNavigator', { screen: 'Household' })
              }
            >
              <Card style={styles.card}>
                <Card.Content style={styles.content}>
                  <Text style={styles.text}>{household.name}</Text>
                  <View style={styles.avatar}>
                    <Text>🐻</Text>
                    <Text>🐻</Text>
                    <Text>🐻</Text>
                    <Text>🐻</Text>
                    <Text>🐻</Text>
                    <Text>🐻</Text>
                    <Text>🐻</Text>
                    <Text>🐻</Text>
                  </View>
                </Card.Content>
              </Card>
            </Pressable>
          ))}
        </View>
        <View style={styles.buttonContainer}>
          <Button
            mode="elevated"
            icon="plus-circle-outline"
            textColor="black"
            buttonColor="#fff"
            labelStyle={styles.buttonText}
            onPress={() => console.log('Tryckt på Lägg till')}
          >
            Lägg till
          </Button>
          <Button
            mode="elevated"
            icon="arrow-right"
            textColor="black"
            buttonColor="#fff"
            labelStyle={styles.buttonText}
            contentStyle={{ flexDirection: 'row-reverse' }}
            onPress={handleOnClick}
          >
            Gå med
          </Button>
        </View>
        <JoinHouseholdModal
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
        />
      </View>
      <Button onPress={signOutUser}>Logga ut</Button>
    </>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#EAEAEA',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingBottom: 80,
    paddingTop: 40,
  },
  householdContainer: {
    gap: 20,
  },
  card: {
    backgroundColor: '#fff',
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  text: {
    fontSize: 32,
    flex: 1,
    fontWeight: 700,
  },
  avatar: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    maxWidth: '30%',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttonText: {
    fontSize: 20,
    padding: 2,
  },
});
