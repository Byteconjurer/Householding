import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { getAuth, signOut } from 'firebase/auth';
import { useCallback, useState } from 'react';
import { Pressable, ScrollView, StyleSheet, View } from 'react-native';
import { Button, Card, Text } from 'react-native-paper';
import AddHouseholdModal from '../components/AddHouseholdModal';
import JoinHouseholdModal from '../components/JoinHouseholdModal';
import { RootStackParamList } from '../navigators/RootStackNavigator';
import { selectUserHouseholds } from '../store/household/householdSelectors';
import { setCurrentHousehold } from '../store/household/householdSlice';
import { useAppDispatch, useAppSelector } from '../store/store';
import { fetchHouseholds } from '../store/household/householdThunks';
import {
  selectCurrentUser,
  selectHouseholdError,
  selectHouseholdLoading,
} from '../store/sharedSelectors';
import { useFocusEffect } from '@react-navigation/native';
import { fetchUserHouseholdMembers } from '../store/householdmember/householdmemberThunks';
import { ActivityIndicator } from 'react-native';
import { setCurrentHouseholdMember } from '../store/householdmember/householdmemberSlice';

type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

export default function HomeScreen({ navigation }: HomeProps) {
  const dispatch = useAppDispatch();
  const [joinModalVisible, setJoinModalVisible] = useState(false);
  const [addModalVisible, setAddModalVisible] = useState(false);
  async function signOutUser() {
    await signOut(getAuth());
  }
  const currentUser = useAppSelector(selectCurrentUser);
  const handleJoinOnClick = () => {
    setJoinModalVisible(true);
  };
  const handleAddHousehold = () => {
    setAddModalVisible(true);
  };

  useFocusEffect(
    useCallback(() => {
      dispatch(fetchUserHouseholdMembers(currentUser!.uid));
      dispatch(fetchHouseholds());
    }, [dispatch, currentUser]),
  );

  const loading = useAppSelector(selectHouseholdLoading);
  const error = useAppSelector(selectHouseholdError);
  const userHouseholds = useAppSelector(selectUserHouseholds);

  if (loading)
    return (
      <View style={styles.spinnerConatiner}>
        <ActivityIndicator size="large" color="#6200ee" />
      </View>
    );
  if (error) return <Text>Error: {error}</Text>;

  return (
    <>
      <ScrollView contentContainerStyle={styles.root}>
        <View style={styles.householdContainer}>
          {userHouseholds.map((household) => {
            return (
              <Pressable
                key={household.id}
                onPress={() => {
                  dispatch(setCurrentHousehold(household.id));
                  dispatch(setCurrentHouseholdMember({ userId: currentUser!.uid, householdId: household.id }));
                  navigation.navigate('TopTabNavigator', {
                    screen: 'Household',
                  });
                }}
              >
                <Card style={styles.card}>
                  <Card.Content style={styles.content}>
                    <Text style={styles.text}>{household.name}</Text>
                    {/* <View style={styles.avatar}>
                      <Text>🐻</Text>
                      <Text>🐻</Text>
                      <Text>🐻</Text>
                      <Text>🐻</Text>
                      <Text>🐻</Text>
                      <Text>🐻</Text>
                      <Text>🐻</Text>
                      <Text>🐻</Text>
                    </View> */}
                  </Card.Content>
                </Card>
              </Pressable>
            );
          })}
        </View>
       {/*  <Button onPress={() => addChoresCompleted(mockedChoresCompleted)}>Adda Chorecompleted</Button> */}
      </ScrollView>
      <View style={styles.buttonContainer}>
        <Button
          mode="elevated"
          icon="plus-circle-outline"
          labelStyle={styles.buttonText}
          onPress={handleAddHousehold}
        >
          Lägg till
        </Button>
        <Button
          mode="elevated"
          icon="arrow-right"
          labelStyle={styles.buttonText}
          contentStyle={{ flexDirection: 'row-reverse' }}
          onPress={handleJoinOnClick}
        >
          Gå med
        </Button>
      </View>
      <AddHouseholdModal
        addHouseholdModalVisible={addModalVisible}
        setAddHouseholdModalVisible={setAddModalVisible}
      />
      <JoinHouseholdModal
        joinModalVisible={joinModalVisible}
        setJoinModalVisible={setJoinModalVisible}
      />
      <View>
        <Button onPress={signOutUser}>Logga ut</Button>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  root: {
    flexGrow: 1,
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingBottom: 80,
    paddingTop: 40,
  },
  householdContainer: {
    gap: 20,
  },
  card: {},
  content: {
    // flexDirection: 'row',
    alignItems: 'center',
    textAlign: 'center',
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
    position: 'absolute',
    bottom: 65,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  buttonText: {
    fontSize: 20,
    padding: 2,
  },
  spinnerConatiner: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
