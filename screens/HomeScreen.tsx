import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Button, StyleSheet, View } from 'react-native';
import { RootStackParamList } from '../navigators/RootStackNavigator';
import { getAuth, signOut } from 'firebase/auth';

type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

export default function HomeScreen({ navigation }: HomeProps) {
  async function signOutUser() {
    await signOut(getAuth());
  }

  return (
    <View style={styles.container}>
      <Button
        title="Go to Household"
        onPress={() =>
          navigation.navigate('TopTabNavigator', { screen: 'Household' })
        }
      />
      <Button title="Logga ut" onPress={signOutUser} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});
