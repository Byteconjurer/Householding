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
                <Modal visible={true} contentContainerStyle={styles.modalContainer}>
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
    modalContainer: { padding: 20 },
});

export default JoinHouseholdModal;
