import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { Modal, Portal } from 'react-native-paper';
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
    setModalVisible(false);
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
          <NameAndAvatarSelection householdId={householdId} />
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

//Behöver jag en stänga knapp? Klickar man utanför försvinner den.
//Blir ett fel när jag skriver in hushållets kod! Förklara
//Ändra namnet längst upp i skärmen. Skärmen finns inte längre
