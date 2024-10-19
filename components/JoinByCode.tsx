import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { TextInput, Button, } from 'react-native-paper';
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
                mode="outlined"
                value={code}
                onChangeText={setCode}
                style={styles.input}
                error={!!error}
            />

            {error ? <Text>{error}</Text> : null}
            <View style={styles.buttonContainer}>
                <Button
                    mode="elevated"
                    icon="plus-circle-outline"
                    textColor="black"
                    buttonColor="#fff"
                    labelStyle={styles.buttonText}
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
        backgroundColor: '#EAEAEA',
    },
    root: {
        flex: 1,
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingBottom: 80,
        paddingTop: 40,
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
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 20,
    },
    buttonText: {
        fontSize: 20,
        padding: 2,
    },
    input: {
        marginBottom: 15,
        backgroundColor: '#fff',
        borderRadius: 10,
        elevation: 5,
    },
});

export default JoinByCode;
