import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Pressable, StyleSheet, View } from 'react-native';
import { Button, Card, Text } from 'react-native-paper';
import { RootStackParamList } from '../navigators/RootStackNavigator';

type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

export default function HomeScreen({ navigation }: HomeProps) {
  return (
    <View style={styles.root}>
      <View style={styles.householdContainer}>
        <Pressable
          onPress={() =>
            navigation.navigate('TopTabNavigator', { screen: 'Household' })
          }
        >
          <Card style={styles.card}>
            <Card.Content style={styles.content}>
              <Text style={styles.text}>HouseHold</Text>
              <View style={styles.avatar}>
                <Text>🐻</Text>
                <Text>🐻</Text>
                <Text>🐻</Text>
                <Text>🐻</Text>
                <Text>🐻</Text>
                <Text>🐻</Text>
              </View>
            </Card.Content>
          </Card>
        </Pressable>
        <Pressable
          onPress={() =>
            navigation.navigate('TopTabNavigator', { screen: 'Household' })
          }
        >
          <Card style={styles.card}>
            <Card.Content style={styles.content}>
              <Text style={styles.text}>HouseHold</Text>
              <View style={styles.avatar}>
                <Text>🐻</Text>
                <Text>🐻</Text>
                <Text>🐻</Text>
                <Text>🐻</Text>
                <Text>🐻</Text>
                <Text>🐻</Text>
              </View>
            </Card.Content>
          </Card>
        </Pressable>
      </View>
      <View style={styles.buttonContainer}>
        <Button
          mode="elevated"
          icon="plus-circle-outline"
          textColor="black"
          buttonColor="#fff"
          labelStyle={styles.buttonText}
          onPress={() => console.log('Tryckt på Lägg till')}
        >
          Lägg till
        </Button>
        <Button
          mode="elevated"
          icon="arrow-right"
          textColor="black"
          buttonColor="#fff"
          labelStyle={styles.buttonText}
          contentStyle={{ flexDirection: 'row-reverse' }}
          onPress={() => console.log('Tryckt på gå med')}
        >
          Gå med
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#EAEAEA',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingBottom: 80,
    paddingTop: 40,
  },
  householdContainer: {
    gap: 20,
  },
  card: {
    backgroundColor: '#fff',
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontSize: 32,
    flex: 1,
    fontWeight: 700,
  },
  avatar: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttonText: {
    fontSize: 20,
    padding: 2,
  },
});

// import { useAuth } from '../hooks/useAuth';
// const { setAuthState } = useAuth();
// {/* <Button title="Logga ut" onPress={() => setAuthState(false)} /> */}
