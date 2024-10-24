import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import { Card, Modal } from 'react-native-paper';
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
  avatarModalVisible,
  setAvatarModalVisible,
}: AvatarModalProps) {
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
      onDismiss={() => setAvatarModalVisible(false)}
      visible={avatarModalVisible}
      contentContainerStyle={styles.modalContainer}
    >
      <View style={styles.chooseAvatarContainer}>
        <View style={styles.avatarGrid}>
          {Object.keys(avatarsMap).map((item) => (
            <TouchableOpacity
              key={item}
              onPress={() => handleAvatarSelect(item)}
            >
              <View style={styles.avatarWrapper}>
                <Card style={styles.avatarCard}>
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
          ))}
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    backgroundColor: '#fff',
    padding: 20,
    margin: 20,
    borderRadius: 10,
  },
  chooseAvatarContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  avatarWrapper: {
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
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
});
