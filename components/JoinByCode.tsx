import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, TextInput, Text } from 'react-native-paper';
import { Household } from '../data/types';
import {
  selectCurrentUser,
  selectHouseholdMembersList,
  selectHouseholdsList,
} from '../store/sharedSelectors';
import { useAppSelector } from '../store/store';

const JoinByCode = ({
  onCodeValidated,
}: {
  onCodeValidated: (householdId: string) => void;
}) => {
  const [code, setCode] = useState('');
  const [error, setError] = useState('');
  const currentUser = useAppSelector(selectCurrentUser);
  const householdMembers = useAppSelector(selectHouseholdMembersList);

  const households = useAppSelector(selectHouseholdsList);

  const validateCode = () => {
    const foundHousehold = households.find(
      (household: Household) => household.code === code,
    );

    if (foundHousehold) {
      if (
        householdMembers.find(
          (member) =>
            member.householdId === foundHousehold.id &&
            member.userId === currentUser?.uid,
        )
      ) {
        setError('Du är redan med i detta hushållet');
      } else {
        setError('');
        onCodeValidated(foundHousehold.id);
      }
    } else {
      setError('Fel kod. Vänligen försök igen.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.inputtext}>Ange kod</Text>
      <TextInput
        mode="outlined"
        value={code}
        onChangeText={setCode}
        style={styles.input}
        theme={{ roundness: 10 }}
        error={!!error}
      />

      {error ? <Text style={styles.errorText}>{error}</Text> : null}

      <View style={styles.buttonContainer}>
        <Button
          mode="elevated"
          disabled={!code}
          icon="plus-circle-outline"
          textColor="black"
          buttonColor="#fff"
          labelStyle={styles.buttonText}
          contentStyle={{ paddingVertical: 5 }}
          onPress={validateCode}
        >
          Gå med
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
  },
  inputtext: {
    fontSize: 20,
    color: 'black',
    paddingBottom: 5,
    fontWeight: 'bold',
  },
  input: {
    marginBottom: 15,
    backgroundColor: '#EAEAEA',
    borderRadius: 10,
    elevation: 5,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 20,
  },
  buttonText: {
    fontSize: 18,
    padding: 2,
    color: 'black',
  },
  errorText: {
    color: 'red',
    marginTop: 5,
  },
});

export default JoinByCode;
