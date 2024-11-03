import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { FirebaseError } from 'firebase/app';
import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { Button, TextInput, Text } from 'react-native-paper';
import { z } from 'zod';
import { auth } from '../firebase';
import { LoginStackParamList } from '../navigators/LoginStackNavigator';
import { useAppDispatch } from '../store/store';
import { setUser } from '../store/user/userSlice';

const loginSchema = z.object({
  username: z.string().min(3, 'Username is required'),
  password: z.string().min(6, 'Password must be at least 6 characters long'),
});

type LoginProps = NativeStackScreenProps<LoginStackParamList, 'Login'>;

export default function LoginScreen({ navigation }: LoginProps) {
  const dispatch = useAppDispatch();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState<{
    username?: string;
    password?: string;
  }>({});

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

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    signInWithEmailAndPassword(auth, username, password)
      .then((userCredential) => {
        const user = userCredential.user;
        dispatch(
          setUser({
            uid: user.uid,
          }),
        );
      })
      .catch((error: FirebaseError) => {
        if (error.code === 'auth/user-not-found') {
          newErrors.username = 'User not found';
          setErrors(newErrors);
        } else if (error.code === 'auth/wrong-password') {
          newErrors.password = 'Wrong password';
          setErrors(newErrors);
        }
      });
    setErrors({});
  };

  const handleRegister = () => {
    navigation.navigate('Register');
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
          onPress={handleRegister}
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
