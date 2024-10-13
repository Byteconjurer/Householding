import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Button, StyleSheet, Text, View } from 'react-native';
import { RootStackParamList } from '../navigators/RootStackNavigator';
import { useAuth } from '../hooks/useAuth';

type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>

export default function HomeScreen({ navigation }: HomeProps) {
  const { authState, setAuthState } = useAuth();
  
  return (
   
    <View style={styles.container}>
        <Button
          title="Go to Household"
          onPress={() =>
            navigation.navigate('TopTabNavigator', { screen: 'Hushåll' })
          }
        />
        <Button
          title="Logga ut"
          onPress={() => setAuthState(false)}
        />
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
