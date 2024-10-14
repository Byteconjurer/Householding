import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StyleSheet, Text, View } from 'react-native';
import { RootStackParamList } from '../navigators/RootStackNavigator';
import {
  PanGestureHandler,
  GestureHandlerRootView,
} from 'react-native-gesture-handler';

type HouseholdProps = NativeStackScreenProps<RootStackParamList>;

export default function HouseholdScreen({ navigation }: HouseholdProps) {
  const goToHome = () => {
    navigation.navigate('Home');
  };

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <PanGestureHandler onGestureEvent={goToHome}>
        <View style={styles.container}>
          <Text style={styles.statisticsText}>Hushållssida</Text>
        </View>
      </PanGestureHandler>
    </GestureHandlerRootView>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  statisticsText: {
    fontSize: 30,
    fontWeight: 'bold',
  },
});
