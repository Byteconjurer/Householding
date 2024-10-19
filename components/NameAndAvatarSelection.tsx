import React, { useState } from 'react';
import { View, StyleSheet, FlatList, TouchableOpacity, Modal } from 'react-native';
import { TextInput, Button, Text, Avatar, Card, useTheme } from 'react-native-paper';
import { useAppSelector } from '../store/store';

const avatar1 = require('../assets/avatarImages/1.png');
const avatar2 = require('../assets/avatarImages/2.png');
const avatar3 = require('../assets/avatarImages/3.png');
const avatar4 = require('../assets/avatarImages/4.png');
const avatar5 = require('../assets/avatarImages/5.png');
const avatar6 = require('../assets/avatarImages/6.png');
const avatar7 = require('../assets/avatarImages/7.png');
const avatar8 = require('../assets/avatarImages/8.png');

const avatarImages = {
    '1.png': avatar1,
    '2.png': avatar2,
    '3.png': avatar3,
    '4.png': avatar4,
    '5.png': avatar5,
    '6.png': avatar6,
    '7.png': avatar7,
    '8.png': avatar8,
};

type AvatarKeys = keyof typeof avatarImages;

const avatars: AvatarKeys[] = [
    '1.png',
    '2.png',
    '3.png',
    '4.png',
    '5.png',
    '6.png',
    '7.png',
    '8.png',
];

const NameAndAvatarSelection = ({ householdId }: { householdId: string }) => {
    const [name, setName] = useState('');
    const [selectedAvatar, setSelectedAvatar] = useState<AvatarKeys | null>(null);
    const [modalVisible, setModalVisible] = useState(false);

    const householdMembers = useAppSelector((state) =>
        state.householdmember.filter((member) => member.householdId === householdId)
    );

    const { colors } = useTheme();

    const handleAvatarSelect = (avatar: AvatarKeys) => {
        if (householdMembers.some((member) => member.avatar === avatar)) return;
        setSelectedAvatar(avatar);
        setModalVisible(false);
    };

    const handleSubmit = () => {
        if (name && selectedAvatar) {
            console.log('Namn:', name, 'Vald Avatar:', selectedAvatar);
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.avatarContainer}>
                <TouchableOpacity style={styles.avatarCircle} onPress={() => setModalVisible(true)}>
                    {selectedAvatar ? (
                        <Avatar.Image size={80} source={avatarImages[selectedAvatar]} />
                    ) : (
                        <Text style={styles.circleText}>Välj Avatar</Text>
                    )}
                </TouchableOpacity>
            </View>
            <Text style={styles.inputtext}>Namn</Text>
            <TextInput
                value={name}
                onChangeText={setName}
                mode="outlined"
                style={styles.input}
            />

            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={styles.modalContainer}>
                    <FlatList
                        data={avatars}
                        keyExtractor={(item) => item}
                        numColumns={4}
                        renderItem={({ item }: { item: AvatarKeys }) => {
                            const isTaken = householdMembers.some((member) => member.avatar === item);
                            return (
                                <TouchableOpacity onPress={() => handleAvatarSelect(item)} disabled={isTaken}>
                                    <Card style={[styles.avatarCard, isTaken && { backgroundColor: colors.tertiary }]}>
                                        <Avatar.Image
                                            size={50}
                                            source={avatarImages[item]}
                                            style={styles.avatar}
                                        />
                                        {isTaken && <Text style={styles.takenText}>Upptagen</Text>}
                                    </Card>
                                </TouchableOpacity>
                            );
                        }}
                    />
                    <Button
                        mode="text"
                        onPress={() => setModalVisible(false)}
                        style={styles.closeButton}
                    >
                        Stäng
                    </Button>
                </View>
            </Modal>

            <View style={styles.buttonContainer}>
                <Button
                    onPress={handleSubmit}
                    disabled={!name || !selectedAvatar}
                    mode="elevated"
                    icon="plus-circle-outline"
                    textColor="black"
                    buttonColor="#fff"
                    labelStyle={styles.buttonText}
                    contentStyle={{ paddingVertical: 5 }}
                >
                    Spara
                </Button>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: '#fff',
    },
    avatarContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 15,
    },
    avatarCircle: {
        width: 80,
        height: 80,
        borderRadius: 40,
        borderWidth: 2,
        borderColor: '#EAEAEA',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 15,
        backgroundColor: '#EAEAEA', // Grå bakgrund för avatar-cirkeln
    },
    circleText: {
        color: 'black',
        fontWeight: 'bold',
    },
    inputtext: {
        fontSize: 20,
        color: 'black',
        paddingBottom: 5,
        fontWeight: "bold",
        textAlign: 'center',
    },
    input: {
        marginBottom: 15,
        backgroundColor: '#EAEAEA',
        borderRadius: 10,
        elevation: 5,
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent bakgrund för modal
    },
    avatarCard: {
        margin: 10,
        alignItems: 'center',
        backgroundColor: 'white', // Ställ in bakgrunden för kortet
    },
    avatar: {
        marginBottom: 5,
    },
    takenText: {
        color: 'red',
        fontSize: 12,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        paddingTop: 20,
    },
    buttonText: {
        fontSize: 18,
        padding: 2,
        color: 'black',
    },
    closeButton: {
        marginTop: 20,
    },
});

export default NameAndAvatarSelection;
