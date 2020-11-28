import 'react-native-gesture-handler'
import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native' 
import { createStackNavigator} from '@react-navigation/stack'
import HomeScreen from './src/screens/HomeScreen';
import DisplayAllPatients from './src/screens/DisplayAllPatients';
import UpdatePatient from './src/screens/UpdatePatient';
import DeletePatient from './src/screens/DeletePatient';
import CriticalPatients from './src/screens/CriticalPatients';
import SearchPatientByName from './src/screens/SearchPatientByName';
import SearchPatientByPhone from './src/screens/SearchPatientByPhone';
import SearchPatientByDoctor from './src/screens/SearchPatientByDoctor'
import NewPatient from './src/screens/NewPatient';
import { YellowBox } from 'react-native';

/*
Developer: MUZZAMIL KHAN
Course: MAPD-712 Web Tech
Instructor: MR. PAWLUK
Description: Project Patient Data - Milestone 4
Git: https://github.com/KhanMuzz/MAPD712-WEBTech
*/

/*
Using Yellow box to prevent few safe warnings from showing up on display due to 
iOS/Android 3rd party differences/dependencies. And to give user better experience
*/
YellowBox.ignoreWarnings([
  'Animated: `useNativeDriver` was not specified.',
  'DatePickerIOS has been merged with DatePickerAndroid and will be removed in a future release.',
  'StatusBarIOS has been merged with StatusBar and will be removed in a future release.',
  'DatePickerAndroid has been merged with DatePickerIOS and will be removed in a future release.',
  'Yellowbox has been replaced with logbox. please call Logbox.ignoreLogs() instead',
  'componentWillReceiveProps has been renamed, and is not recommended for use. See https://fb.me/react-unsafe-component-lifecycles for details.',
  'YellowBox has been replaced with LogBox. Please call LogBox.ignoreLogs() instead'
]);


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
                    name="New Patient"
                    component={NewPatient}
                  />
                  <Stack.Screen
                    name="Patients"
                    component={DisplayAllPatients}
                  />
                  <Stack.Screen
                    name="NameSearch"
                    component={SearchPatientByName}
                  />
                  <Stack.Screen
                    name="PhoneSearch"
                    component={SearchPatientByPhone}
                  />
                  <Stack.Screen
                    name="DoctorSearch"
                    component={SearchPatientByDoctor}
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


