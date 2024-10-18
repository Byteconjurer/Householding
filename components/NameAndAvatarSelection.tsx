import React, { useState } from 'react';
import { View, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
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

const avatars: (keyof typeof avatarImages)[] = [
    '1.png',
    '2.png',
    '3.png',
    '4.png',
    '5.png',
    '6.png',
    '7.png',
    '8.png',
];

const NameAndAvatarSelection = ({ householdId }: { householdId: number }) => {
    const [name, setName] = useState('');
    const [selectedAvatar, setSelectedAvatar] = useState<string | null>(null);
    const householdMembers = useAppSelector((state) =>
        state.householdmember.filter((member) => member.householdId === householdId)
    );
    const { colors } = useTheme();

    const handleAvatarSelect = (avatar: keyof typeof avatarImages) => {
        if (householdMembers.some((member) => member.avatar === avatar)) return;
        setSelectedAvatar(avatar);
    };

    const handleSubmit = () => {
        if (name && selectedAvatar) {
            console.log('Namn:', name, 'Vald Avatar:', selectedAvatar);
        }
    };

    return (
        <View style={styles.container}>
            <TextInput
                label="Ange ditt namn"
                value={name}
                onChangeText={setName}
                mode="outlined"
                style={styles.input}
            />
            <Text style={styles.label}>Välj en avatar:</Text>
            <FlatList
                data={avatars}
                keyExtractor={(item) => item}
                numColumns={4}
                renderItem={({ item }: { item: keyof typeof avatarImages }) => {
                    const isTaken = householdMembers.some((member) => member.avatar === item);
                    return (
                        <TouchableOpacity onPress={() => handleAvatarSelect(item)} disabled={isTaken}>
                            <Card style={[styles.avatarCard, isTaken && { backgroundColor: colors.error }]}>
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
            <Button mode="contained" onPress={handleSubmit} disabled={!name || !selectedAvatar}>
                Bekräfta
            </Button>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    input: {
        marginBottom: 20,
    },
    label: {
        fontSize: 16,
        marginBottom: 10,
    },
    avatarCard: {
        margin: 10,
        alignItems: 'center',
    },
    avatar: {
        marginBottom: 5,
    },
    takenText: {
        color: 'red',
        fontSize: 12,
    },
});

export default NameAndAvatarSelection;
