import React, { useState } from 'react';
import {TextInput,StyleSheet,View,Text,Button} from 'react-native';
/*
Muzzamil Khan
LAB 3, WITH SINGLE SCREEN SIMPLE FORM
WEB TECH : MAPD712
*/

const MyLab3 = function() {
        //making use of state for input boxes
        const [currValue1, onChangeText1] = React.useState('')
        const [currValue2, onChangeText2] = React.useState('')
        const [currValue3, onChangeText3] = React.useState('')

  return (
          //return JSX object
          <View style={  myStyles.mainContainer}>
          <Text style={myStyles.generalText}>First Name:</Text>
          <TextInput style={myStyles.input}
          onChangeText= {(textVar)=> {onChangeText1(textVar)}}
          value={currValue1} 
          ref={function(ref){this.firstName = ref}}
          ></TextInput>
          <Text style={myStyles.generalText}>Last Name:</Text>
          <TextInput style={myStyles.input}
          onChangeText= {(textVar)=> {onChangeText2(textVar)}}
          value={currValue2} 
          ref={function(ref){this.lastName = ref}}
          ></TextInput>
          <Text style={myStyles.generalText}>Email:</Text>
          <TextInput style={myStyles.input}
          onChangeText= {(textVar)=> {onChangeText3(textVar)}}
          value={currValue3} 
          ref={function(ref){this.email = ref}}
          ></TextInput>
          <Button 
           title='Submit' color='white' 
                  onPress= {()=>{ 
                    //onChangeText('') 
                }}/>
          <Button title='Clear' color='white' 
                  onPress= {()=>{ 
                    this.firstName.clear()
                    this.lastName.clear()
                    this.email.clear()
                }}/>
          </View>
  );
};

const myStyles = StyleSheet.create({
                            mainContainer: {
                              flex:1,
                              justifyContent: 'center',
                              alignContent:'center',
                              alignItems:'center',
                              backgroundColor: 'green'
                            },
                            generalText: {
                              fontSize:20,
                              color: 'black',
                              fontWeight:'bold'
                            },
                            input: {
                              width:200,
                            backgroundColor:'white',
                            borderWidth:2,
                            borderColor:'black',
                            margin:8,
                            padding: 8
                            },
                            button: {
                              fontWeight:'bold',
                              fontSize:40
                            }
                            
});

export default MyLab3;
