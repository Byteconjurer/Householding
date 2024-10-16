import { useState } from 'react';
import { Button, Modal, StyleSheet, TextInput, View } from 'react-native';
import { Text } from 'react-native-paper';

type AddChoreProps = {
  modalVisible: boolean;
  setModalVisible: (visible: boolean) => void;
};

export default function AddChore({
  modalVisible,
  setModalVisible,
}: AddChoreProps) {
  const [newChoreTitle, setNewChoreTitle] = useState('');

  const handleAddChore = () => {
    // Add logic to save the new chore
    setModalVisible(false);
    setNewChoreTitle('');
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}
    >
      <View style={styles.modalView}>
        <Text style={styles.modalText}>New Chore</Text>
        <TextInput
          style={styles.input}
          placeholder="Chore Title"
          value={newChoreTitle}
          onChangeText={setNewChoreTitle}
        />
        <Button title="Add" onPress={handleAddChore} />
        <Button title="Cancel" onPress={() => setModalVisible(false)} />
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 15,
    width: '100%',
    paddingHorizontal: 10,
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
});
