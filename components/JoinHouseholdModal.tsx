import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Modal, Portal, Provider } from 'react-native-paper';
import JoinByCode from './JoinByCode';
import NameAndAvatarSelection from './NameAndAvatarSelection';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigators/RootStackNavigator';

const JoinHouseholdModal = ({ navigation }: NativeStackScreenProps<RootStackParamList, 'JoinHouseholdModal'>) => {
    const [householdId, setHouseholdId] = useState<string | null>(null);

    const handleCodeValidated = (id: string) => {
        setHouseholdId(id);
    };

    return (
        <Provider>
            <Portal>
                <Modal visible={true} onDismiss={() => navigation.goBack()} contentContainerStyle={styles.modalContainer}>
                    {householdId === null ? (
                        <JoinByCode onCodeValidated={handleCodeValidated} />
                    ) : (
                        <NameAndAvatarSelection householdId={householdId} />
                    )}
                </Modal>
            </Portal>
        </Provider>
    );
};

const styles = StyleSheet.create({
    modalContainer: {
        backgroundColor: '#fff',
        padding: 20,
        margin: 20,
        borderRadius: 10,
    },
});

export default JoinHouseholdModal;

//Behöver jag en stänga knapp? 
//Blir ett fel när jag skriver in hushållets kod!
//Ändra namnet längst upp i skärmen 
