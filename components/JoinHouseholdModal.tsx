import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { Modal, Portal } from 'react-native-paper';
import JoinByCode from './JoinByCode';
import NameAndAvatarSelection from './NameAndAvatarSelection';

type JoinHouseholdModalProps = {
  joinModalVisible: boolean;
  setJoinModalVisible: (visible: boolean) => void;
};

export default function JoinHouseholdModal({
  joinModalVisible,
  setJoinModalVisible,
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
        visible={joinModalVisible}
        onDismiss={() => setJoinModalVisible(false)}
        contentContainerStyle={styles.modalContainer}
      >
        {householdId === null ? (
          <JoinByCode onCodeValidated={handleCodeValidated} />
        ) : (
          <NameAndAvatarSelection
            householdId={householdId}
            setJoinModalVisible={setJoinModalVisible}
            resetHouseholdId={resetHouseholdId}
          />
        )}
      </Modal>
    </Portal>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    margin: 50,
    borderRadius: 10,
  },
});
