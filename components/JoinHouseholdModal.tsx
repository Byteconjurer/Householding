import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { Modal, Portal, Provider } from 'react-native-paper';
import JoinByCode from './JoinByCode';
import NameAndAvatarSelection from './NameAndAvatarSelection';

type JoinHouseholdModalProps = {
  modalVisible: boolean;
  setModalVisible: (visible: boolean) => void;
};

export default function JoinHouseholdModal({
  modalVisible,
  setModalVisible,
}: JoinHouseholdModalProps) {
  const [householdId, setHouseholdId] = useState<string | null>(null);

  const handleCodeValidated = (id: string) => {
    setHouseholdId(id);
  };

  const resetHouseholdId = () => {
    setHouseholdId(null);
  };

  return (
    <Portal>
      <Modal
        visible={modalVisible}
        onDismiss={() => setModalVisible(false)}
        contentContainerStyle={styles.modalContainer}
      >
        {householdId === null ? (
          <JoinByCode onCodeValidated={handleCodeValidated} />
        ) : (
          <NameAndAvatarSelection
            householdId={householdId}
            setModalVisible={setModalVisible}
            resetHouseholdId={resetHouseholdId}
          />
        )}
      </Modal>
    </Portal>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    backgroundColor: '#fff',
    padding: 20,
    margin: 20,
    borderRadius: 10,
  },
});
