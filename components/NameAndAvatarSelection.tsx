import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, Button, Text, useTheme } from 'react-native-paper';

const NameAndAvatarSelection = () => {
    const [name, setName] = useState('');
    const { colors } = useTheme();

    return (
        <View style={styles.container}>
            <TextInput
                label="Ange ditt namn"
                value={name}
                onChangeText={setName}
                mode="outlined"
                style={styles.input}
            />
            <Button mode="contained" disabled={!name}>
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
});

export default NameAndAvatarSelection;
