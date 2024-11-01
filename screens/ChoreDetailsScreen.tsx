import { MaterialTopTabScreenProps } from '@react-navigation/material-top-tabs';
import { CompositeScreenProps } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useLayoutEffect, useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Button, Card, Surface, Text } from 'react-native-paper';
import { RootStackParamList } from '../navigators/RootStackNavigator';
import { TopTabParamList } from '../navigators/TopTabNavigator';
import { useAppDispatch, useAppSelector } from '../store/store';
import { selectChoreById } from '../store/chore/choresSelectors';
import {
  selectCurrentHousehold,
  selectCurrentHouseholdMember,
} from '../store/sharedSelectors';
import { addChoreCompleted } from '../store/choreCompleted/chorecompletedThunks';
import { formatDateToYYYYMMDD } from '../utils/date';

type ChoreProps = CompositeScreenProps<
  NativeStackScreenProps<RootStackParamList, 'ChoreDetails'>,
  MaterialTopTabScreenProps<TopTabParamList>
>;

export default function ChoreDetailsScreen({ route, navigation }: ChoreProps) {
  const [isChoreDone, setIsChoreDone] = useState(false);
  const dispatch = useAppDispatch();
  const currentHousehold = useAppSelector(selectCurrentHousehold);
  const currentHouseholdMember = useAppSelector(selectCurrentHouseholdMember);
  const choreId = route.params.id;
  const chore = useAppSelector(selectChoreById(choreId));

  const isActive = currentHouseholdMember?.isActive ?? false;
  useLayoutEffect(() => {
    if (chore) {
      navigation.setOptions({
        title: chore.title,
        headerTitleStyle: { fontWeight: 'bold', fontSize: 20 },
      });
    }
  }, [navigation, chore]);

  if (!chore) {
    return (
      <View style={styles.container}>
        <Text style={styles.descriptionText}>Chore not found!</Text>
      </View>
    );
  }

  const handlePress = () => {
    setIsChoreDone(true);
    const choreCompletedTime = Date.now();
    const choreCompletedDate = formatDateToYYYYMMDD(
      new Date(choreCompletedTime),
    );
    if (!currentHousehold) {
      console.error('No current household set');
      return;
    }
    if (!currentHouseholdMember) {
      console.error('No current household member set');
      return;
    }
    dispatch(
      addChoreCompleted({
        choreId: chore.id,
        householdMemberId: currentHouseholdMember.id,
        choreComplete: choreCompletedDate,
        householdId: currentHousehold.id,
      }),
    );
    setTimeout(() => {
      navigation.navigate('Chores');
    }, 300);
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Card style={[styles.basicCard, styles.mt10, styles.mb25]}>
          <Card.Content>
            <Text style={styles.descriptionText}>{chore.description}</Text>
          </Card.Content>
        </Card>
        <View>
          <Button
            mode="elevated"
            icon={isChoreDone ? 'check-circle-outline' : 'circle-outline'}
            buttonColor={isChoreDone ? '#8BCB7A' : ''}
            labelStyle={styles.buttonLabelText}
            contentStyle={styles.buttonContent}
            onPress={handlePress}
            disabled={!isActive}
          >
            {isChoreDone ? 'Utförd!' : 'Utförd?'}
          </Button>
        </View>
        <Card style={[styles.basicCard, styles.mt25]}>
          <Card.Content style={styles.flexRowContent}>
            <Text style={styles.boldText}>Återkommer:</Text>
            <View style={styles.flexRowContent}>
              <Text style={styles.recurDayText}>var</Text>
              <View style={[styles.circle, styles.mh5, styles.red]}>
                <Text style={styles.redCircleText}>{chore.interval}</Text>
              </View>
              <Text style={styles.recurDayText}>dag</Text>
            </View>
          </Card.Content>
        </Card>
        <Card style={[styles.basicCard, styles.mt25]}>
          <Card.Content style={styles.flexRowContent}>
            <View>
              <Text style={styles.boldText}>Värde:</Text>
              <Text style={styles.greyText}>
                Hur energikrävande är sysslan?
              </Text>
            </View>
            <Surface elevation={5} style={[styles.circle]}>
              <Text style={styles.grayCircleText}>{chore.energyWeight}</Text>
            </Surface>
          </Card.Content>
        </Card>
      </ScrollView>
      <View style={styles.buttonContainer}>
        <Button
          icon="close-circle-outline"
          labelStyle={styles.closeButtonText}
          style={{
            width: '100%',
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
  container: {
    flex: 1,
    alignItems: 'center',
  },
  scrollContainer: {
    flexGrow: 1,
    alignItems: 'center',
  },
  flexRowContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  basicCard: {
    maxWidth: '97%',
    minWidth: '97%',
  },
  mt10: {
    marginTop: 10,
  },
  mt25: {
    marginTop: 25,
  },
  mb25: {
    marginBottom: 25,
  },
  mh5: {
    marginHorizontal: 5,
  },
  buttonLabelText: {
    fontSize: 20,
    padding: 2,
  },
  buttonContent: {
    height: 55,
  },
  descriptionText: {
    fontSize: 24,
  },
  boldText: {
    fontSize: 20,
    fontWeight: 700,
  },
  recurDayText: {
    fontSize: 20,
  },
  circle: {
    borderRadius: 12.5,
    width: 25,
    height: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  red: {
    backgroundColor: '#D96163',
  },

  redCircleText: {
    color: '#fff',
    fontSize: 17,
  },
  grayCircleText: {
    fontSize: 17,
  },
  greyText: {
    color: '#828282',
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 55,
  },
  closeButtonText: {
    fontSize: 20,
    padding: 2,
    justifyContent: 'center',
  },
});
