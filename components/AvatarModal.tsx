import { useState } from 'react';
import {
  FlatList,
  Image,
  Modal,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import { Card } from 'react-native-paper';
import { avatarsMap } from '../data/data';
import { useAppSelector } from '../store/store';

type AvatarModalProps = {
  mockedHouseholdId: string;
  onAvatarSelect: (avatar: string) => void;
  avatarModalVisible: boolean;
  setAvatarModalVisible: (visible: boolean) => void;
};

export default function AvatarModal({
  mockedHouseholdId: mockedHouseholdId,
  onAvatarSelect,
}: AvatarModalProps) {
  const [avatarModalVisible, setAvatarModalVisible] = useState(false);

  const householdMembers = useAppSelector((state) =>
    state.householdmember.list.filter(
      (member) => member.householdId === mockedHouseholdId,
    ),
  );

  const handleAvatarSelect = (avatarKey: string) => {
    if (householdMembers.some((member) => member.avatar === avatarKey)) return;
    onAvatarSelect(avatarKey);
    setAvatarModalVisible(false);
  };
  return (
    <Modal
      animationType="slide"
      onDismiss={() => setAvatarModalVisible(false)}
      transparent={true}
      visible={avatarModalVisible}
    >
      <View style={styles.chooseAvatarContainer}>
        <FlatList
          data={Object.keys(avatarsMap)}
          keyExtractor={(item) => item}
          numColumns={4}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity onPress={() => handleAvatarSelect(item)}>
                <View style={styles.avatarWrapper}>
                  <Card style={[styles.avatarCard]}>
                    <Card.Content>
                      <Image
                        source={avatarsMap[item].icon}
                        style={styles.avatarImage}
                        resizeMode="contain"
                      />
                    </Card.Content>
                  </Card>
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  avatarWrapper: {
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
  },
  chooseAvatarContainer: {
    paddingTop: 300,
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    paddingBottom: 20,
  },
  avatarCard: {
    margin: 15,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  avatarImage: {
    width: 60,
    height: 60,
    margin: 5,
    backgroundColor: 'transparent',
  },
  takenText: {
    position: 'absolute',
    color: 'red',
    fontSize: 12,
    textAlign: 'center',
    fontWeight: 'bold',
    top: '80%',
    left: '30%',
    transform: [{ translateX: -15 }, { translateY: -6 }],
  },
  closeButton: {
    marginTop: 20,
    paddingVertical: 5,
    alignSelf: 'center',
    backgroundColor: 'white',
  },
});
