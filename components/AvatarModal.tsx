import { useState } from 'react';
import { Button, FlatList, Modal, TouchableOpacity, View } from 'react-native';
import { Card } from 'react-native-paper';
import { avatarsMap } from '../data/data';

export default function AvatarModal() {
  const [avatarModalVisible, setAvatarModalVisible] = useState(false);

  return (
    <View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={avatarModalVisible}
      >
        <View style={styles.chooseAvatarContainer}>
          <FlatList
            data={Object.keys(avatarsMap)}
            keyExtractor={(item) => item}
            numColumns={4}
            renderItem={({ item }) => {
              const isTaken = householdMembers.some(
                (member) => member.avatar === item,
              );
              return (
                <TouchableOpacity
                  onPress={() => handleAvatarSelect(item)}
                  disabled={isTaken}
                >
                  <View style={styles.avatarWrapper}>
                    <Card
                      style={[
                        styles.avatarCard,
                        isTaken && { backgroundColor: colors.surfaceDisabled },
                      ]}
                    >
                      <Image
                        source={avatarsMap[item].icon}
                        style={styles.avatarImage}
                        resizeMode="contain"
                      />
                      {isTaken && (
                        <Text style={styles.takenText}>Upptagen</Text>
                      )}
                    </Card>
                  </View>
                </TouchableOpacity>
              );
            }}
          />
          <Button
            mode="text"
            onPress={() => setAvatarModalVisible(false)}
            style={styles.closeButton}
            textColor="black"
          >
            Stäng
          </Button>
        </View>
      </Modal>
    </View>
  );
}
