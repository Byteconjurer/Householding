import { StyleSheet, TouchableOpacity, View, Image } from 'react-native';
import { Card, Modal } from 'react-native-paper';
import { avatarsMap } from '../data/data';
import { HouseholdMember } from '../data/types';

type AvatarModalProps = {
  onAvatarSelect: (avatar: string) => void;
  avatarModalVisible: boolean;
  setAvatarModalVisible: (visible: boolean) => void;
};

export default function AvatarModal({
  onAvatarSelect,
  avatarModalVisible,
  setAvatarModalVisible,
}: AvatarModalProps) {

  const householdMembers = [] as HouseholdMember[];

  const handleAvatarSelect = (avatarKey: string) => {
    if (householdMembers.some((member) => member.avatar === avatarKey)) return;
    onAvatarSelect(avatarKey);
    setAvatarModalVisible(false);
  };
  return (
    <Modal
      onDismiss={() => setAvatarModalVisible(false)}
      visible={avatarModalVisible}
    >
      <View style={styles.chooseAvatarContainer}>
        <View style={styles.avatarGrid}>
          {Object.keys(avatarsMap).map((item) => (
            <TouchableOpacity
              key={item}
              onPress={() => handleAvatarSelect(item)}
            >
              <Card
                style={[
                  styles.avatarCard,
                  {
                    backgroundColor: avatarsMap[item].color,
                  },
                ]}
              >
                <Image
                  source={avatarsMap[item].icon}
                  style={styles.avatarImage}
                />
              </Card>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  chooseAvatarContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '100%',
    justifyContent: 'center',
  },
  avatarCard: {
    margin: 10,
    alignItems: 'center',
  },
  avatarImage: {
    width: 60,
    height: 60,
    margin: 5,
    backgroundColor: 'transparent',
  },
});
