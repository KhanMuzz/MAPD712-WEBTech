import React from 'react';
import { StyleSheet, Button, Text, View, Image, TouchableOpacity} from 'react-native';


class HomeScreen extends React.Component { 
  render() {
    return (
        <View style={styles.container}>
        <Text style={{fontWeight:'bold', fontSize:30}}

        >Patient Data Managment</Text>
        <TouchableOpacity style={styles.button}
        onPress={ ()=> {this.props.navigation.navigate('Patients')} }>
        <Text style={{fontSize:20, fontWeight:'bold'}}>View Patients</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}
        onPress={ ()=> {this.props.navigation.navigate('Search')} }>
        <Text style={{fontSize:20, fontWeight:'bold'}}>Search Patient</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button}
        onPress={ ()=> {this.props.navigation.navigate('Update')} }>
        <Text style={{fontSize:20, fontWeight:'bold'}}>Edit Patient</Text>
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
    );
  }
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#b534fa'
    },
    button:{
    marginTop:50,
    height: 80,
    width: 300,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf:'center',
    backgroundColor: '#606060',
    }
   
  });


export default HomeScreen;


