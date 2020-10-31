import 'react-native-gesture-handler'
import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native' 
import { createStackNavigator} from '@react-navigation/stack'
import HomeScreen from './src/screens/HomeScreen';
import DisplayAllPatients from './src/screens/DisplayAllPatients';
import SearchPatient from './src/screens/SearchPatient';
import UpdatePatient from './src/screens/UpdatePatient';
import DeletePatient from './src/screens/DeletePatient';
import CriticalPatients from './src/screens/CriticalPatients';

/*
Developer: MUZZAMIL KHAN
Course: MAPD-712 Web Tech
Instructor: MR. PAWLUK
Description: Assignment 2 - Milestone 2
*/
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
          name="Patients"
          component={DisplayAllPatients}
        />
         <Stack.Screen
          name="Search"
          component={SearchPatient}
        />
         <Stack.Screen
          name="Update"
          component={UpdatePatient}
        />
         <Stack.Screen
          name="Delete"
          component={DeletePatient}
        />
        <Stack.Screen
          name="Critical"
          component={CriticalPatients}
        />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
export default PatientDataApp;


