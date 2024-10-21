import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { Avatar, Card, Text } from 'react-native-paper';
import { RootStackParamList } from '../navigators/RootStackNavigator';
// @ts-ignore
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useAppSelector } from '../store/store';

type HouseholdProps = NativeStackScreenProps<RootStackParamList>;

export default function HouseholdScreen({ navigation }: HouseholdProps) {
  const householdMembers = useAppSelector((state) => state.household);
  const CurrentHousehold = () => (
    <View style={styles.householdContainer}>
      <Text style={styles.statisticsTextHouseHold}>Hushåll1</Text>
      <TouchableOpacity onPress={() => console.log('Ändra avatar eller namn')}>
        <MaterialIcons name="edit" size={30} color="#777" />
      </TouchableOpacity>
    </View>
  );
  const HouseholdCode = () => (
    <Card style={styles.codeCard}>
      <Card.Content>
        <Text variant="titleLarge">KOD3N</Text>
      </Card.Content>
    </Card>
  );
  const CurrentUserAvatar = () => (
    <View style={styles.avatarContainer}>
      <Avatar.Image
        size={60}
        source={require('../assets/avatarImages/1.png')}
      />
      <View style={styles.usernameContainer}>
        <Text style={styles.username}>Användarnamn</Text>
        <TouchableOpacity
          onPress={() => console.log('Ändra avatar eller namn')}
        >
          <MaterialIcons name="edit" size={30} color="#777" />
        </TouchableOpacity>
      </View>
    </View>
  );
  const AllHouseholdMembers = () => (
    <Card style={styles.card}>
      <Card.Content>
        <Text variant="titleLarge">Card title</Text>
        <Text variant="bodyMedium">Card content</Text>
      </Card.Content>
    </Card>
  );
  const RemoveHousehold = () => (
    <View style={styles.binIcon}>
      <TouchableOpacity onPress={() => console.log('Ändra avatar eller namn')}>
        <MaterialIcons name="delete" size={30} color="#777" />
      </TouchableOpacity>
    </View>
  );
  return (
    <View style={styles.container}>
      <CurrentHousehold />
      <HouseholdCode />
      <CurrentUserAvatar />
      <AllHouseholdMembers />
      <RemoveHousehold />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
    maxHeight: 1000,
  },
  householdContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  statisticsTextHouseHold: {
    fontSize: 30,
    fontWeight: 'bold',
    marginRight: 10,
  },
  statisticsText: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  avatarContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  usernameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  username: {
    fontSize: 18,
    fontWeight: 'bold',
    marginRight: 10,
  },
  editIcon: {
    padding: 5,
  },
  card: {
    width: 300,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 3,
    backgroundColor: '#f8f9fa',
    borderRadius: 10,
  },
  codeCard: {
    width: 300,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 3,
    backgroundColor: '#f8f9fa',
    borderRadius: 10,
  },
  binIcon: {
    padding: 20,
    marginBottom: 50,
  },
});
