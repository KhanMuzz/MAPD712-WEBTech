import React from 'react';
import { StyleSheet, Button, Text, View, TouchableOpacity} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';


class SearchPatient extends React.Component { 
  render() {
    return (
      <View style={{flex: 1, backgroundColor: '#b534fa'}}>
        <View style={{flex: 1}}>
          <View style={{flex: 1, flexDirection: 'row', justifyContent:'center', marginTop:20, alignItems:'center'}}>
            <View style={{width: 150, height: 50, backgroundColor: 'gray',justifyContent:'center', alignItems:'center'}}>
              <Text style={{fontSize:20, fontWeight:'bold'}}>Patient id:</Text>
           </View>
          <View style={{width: 200, height: 50, backgroundColor: 'white', marginLeft:20}}>
              <TextInput style={{backgroundColor:'white', width:200, height:50}}
                        onChangeText={text => this.setState({ text })}
                        style={{flex:1, fontSize:24}}></TextInput>
          </View> 
        </View>
      </View> 
      <View style={{flex: 5, backgroundColor:'white'}} />
          <View style={{flex: 1, justifyContent:'center',alignItems:'center'}} >
              <TouchableOpacity style={styles.button2}
                                onPress={()=>{ alert("Coming soon")}}>
            <Text style={{fontSize:20, fontWeight:'bold'}}>Find Patient</Text>
              </TouchableOpacity>
          </View>
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
    marginBottom:30,
    height: 50,
    width: 300,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf:'center',
    backgroundColor: '#606060',
    },
    input:{
      width:200,
      backgroundColor:'white',
      borderWidth:2,
      borderColor:'black',
      margin:8,
      padding: 8
      
      },button2:{
        marginTop:50,
        marginBottom:50,
        height: 50,
        width: 300,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf:'center',
        backgroundColor: '#606060',
        }
  });
export default SearchPatient;


