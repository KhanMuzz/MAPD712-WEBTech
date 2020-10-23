import 'react-native-gesture-handler'
import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native' 
import { createStackNavigator} from '@react-navigation/stack'
import HomeScreen from './src/screens/HomeScreen';
import ProfileScreen from './src/screens/ProfileScreen';

const Stack = createStackNavigator();

class PatientDataApp extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
        />
        <Stack.Screen
          name="Profile"
          component={ProfileScreen}
        />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
export default PatientDataApp;

// const PatientDataApp = () => {
//   return (
//     <View style={styles.container}>
//       <Text>Heyyyyyy</Text>
//     </View>
//   );
// };


// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

// export default PatientDataApp;
