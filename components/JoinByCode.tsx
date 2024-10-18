import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, Button, Text } from 'react-native-paper';
import { useAppSelector } from '../store/store';
import { Household } from '../data/types';

const JoinByCode = ({ onCodeValidated }: { onCodeValidated: (householdId: string) => void }) => {
    const [code, setCode] = useState('');
    const [error, setError] = useState('');
    const households = useAppSelector((state) => state.household.list);

    const validateCode = () => {
        const foundHousehold = households.find((household: Household) => household.code === code);
        if (foundHousehold) {
            setError('');
            onCodeValidated(foundHousehold.id);
        } else {
            setError('Fel kod. Vänligen försök igen.');
        }
    };

    return (
        <View style={styles.container}>
            <TextInput
                label="Ange kod"
                value={code}
                onChangeText={setCode}
                mode="outlined"
                error={!!error}
            />
            {error ? <Text>{error}</Text> : null}
            <Button mode="contained" onPress={validateCode}>
                Gå med
            </Button>
        </View>
    );
};

const styles = StyleSheet.create({
    container: { padding: 20 },
});

export default JoinByCode;
