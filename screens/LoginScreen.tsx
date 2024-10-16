import React, { useState } from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { z } from 'zod';
import { useAuth } from '../hooks/useAuth';
import { useAppSelector } from '../store/store';

const loginSchema = z.object({
  username: z.string().min(3, 'Username is required'),
  password: z.string().min(6, 'Password must be at least 6 characters long'),
});

export default function LoginScreen() {
  const { setUserName: setAuthUserName } = useAuth();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState<{
    username?: string;
    password?: string;
  }>({});

  const users = useAppSelector((state) => state.user);

  const handleLogin = () => {
    const validationResult = loginSchema.safeParse({ username, password });
  
    let newErrors: {
      username?: string;
      password?: string;
    } = {};
  
    if (!validationResult.success) {
      const formattedErrors = validationResult.error.format();
      newErrors = {
        username: formattedErrors.username?._errors[0],
        password: formattedErrors.password?._errors[0],
      };
    }
  
    const userName = users.find((user) => user.name === username);
  
    if (!userName) {
      newErrors.username = 'Username or password is incorrect';
    }
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return; 
    }

    setAuthUserName(userName!.name);
    setErrors({});
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/icon.png')}
        style={{ width: 200, height: 200, alignSelf: 'center' }}
      />

      <TextInput
        label="Användarnamn"
        mode="outlined"
        value={username}
        onChangeText={setUsername}
        style={styles.input}
        theme={{ roundness: 10 }}
        error={!!errors.username}
      />
      {errors.username && (
        <Text style={styles.errorText}>{errors.username}</Text>
      )}

      <TextInput
        label="Lösenord"
        mode="outlined"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={styles.input}
        theme={{ roundness: 10 }}
        error={!!errors.password}
      />
      {errors.password && (
        <Text style={styles.errorText}>{errors.password}</Text>
      )}

      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-evenly',
        }}
      >
        <Button
          mode="contained"
          onPress={handleLogin}
          style={styles.button}
          labelStyle={styles.buttonLabel}
        >
          Logga in
        </Button>

        <Button
          mode="contained"
          onPress={handleLogin}
          style={styles.button}
          labelStyle={styles.buttonLabel}
        >
          Registrera
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ACC1C2',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    marginBottom: 15,
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 5,
  },
  button: {
    backgroundColor: '#fff',
    width: '40%',
    borderRadius: 25,
    paddingVertical: 5,
    elevation: 5,
    marginTop: 20,
  },
  buttonLabel: {
    color: '#000',
    fontSize: 16,
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
  },
});
