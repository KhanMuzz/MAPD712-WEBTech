import React from 'react';
import { StyleSheet, Button, Text, View, Image, TouchableOpacity} from 'react-native';

/*
Developer: MUZZAMIL KHAN
Course: MAPD-712 Web Tech
Instructor: MR. PAWLUK
Description: Project Patient Data - Milestone 3
Git: https://github.com/KhanMuzz/MAPD712-WEBTech
*/

//Main home screen with buttons for user to perform different actions
class HomeScreen extends React.Component { 
  render() {
    return (
      <View style={{flex : 1}}>
           <View style={{flex : 1, backgroundColor : "red"}}>
              <View style={styles.container}>
                  <Text style={{fontWeight:'bold', fontSize:30, marginBottom:10}}>Patient Data Managment</Text>
              </View>
           </View>
           
           <View style={{flex : 8, backgroundColor: '#b534fa'}}>
           <TouchableOpacity style={styles.button}
                  onPress={ ()=> {this.props.navigation.navigate('Patients')} }>
                  <Text style={{fontSize:20, fontWeight:'bold'}}>View Patients</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button}
                    onPress={ ()=> {this.props.navigation.navigate('NameSearch')} }>
                    <Text style={{fontSize:20, fontWeight:'bold'}}>Search by name</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button}
                    onPress={ ()=> {this.props.navigation.navigate('PhoneSearch')} }
                    >
                    <Text style={{fontSize:20, fontWeight:'bold'}}>Search by phone </Text>
           </TouchableOpacity>

          <TouchableOpacity style={styles.button}
                    onPress={ ()=> {this.props.navigation.navigate('DoctorSearch')} }
                    >
                    <Text style={{fontSize:20, fontWeight:'bold'}}>Search by doctor</Text>
           </TouchableOpacity>

           <TouchableOpacity style={styles.button}
                    onPress={ ()=> {this.props.navigation.navigate('Update')} }>
                    <Text style={{fontSize:20, fontWeight:'bold'}}>Update Patient</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button}
                    onPress={ ()=> {this.props.navigation.navigate('Delete')} }>
                    <Text style={{fontSize:20, fontWeight:'bold'}}>Delete Patient</Text>
            </TouchableOpacity> 

            <TouchableOpacity style={styles.button}
                    onPress={ ()=> {this.props.navigation.navigate('Critical')} }>
                    <Text style={{fontSize:20, fontWeight:'bold'}}>Critical Patients</Text>
            </TouchableOpacity> 
          </View>
      </View>
    );
  }
}
//Styling for all components
const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#b534fa'
    },
    button:{
    marginTop:20,
    height: 60,
    width: 350,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf:'center',
    backgroundColor: '#606060',
    }
   
  });
export default HomeScreen;


