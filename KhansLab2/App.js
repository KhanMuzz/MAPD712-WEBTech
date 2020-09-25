import React from 'react';
import {Text, View, TextInput, StyleSheet, Button, Switch, AppState} from 'react-native';

export default function HelloWorldApp(){
//store info from input
const [value, onChangeText] = React.useState('');
//useState for switch
const [isSwitchEnabled, setSwitch] = React.useState(false);

    return (
          <View style={ myStyle.main }>
            {/* TASK 1: MAKE A INPUT BOX */}
            <TextInput style={ myStyle.inputBox }
            onChangeText= {textVar => onChangeText(textVar)}
            value={value} 
            />
            <Text>Preview :<Text style={{color:'blue'}}>{value}</Text></Text>
            
            {/* TASK 2: A BUTTON TO CLEAR INPUT BOX */}

            <Button title='CLEAR' color='red' onPress= {()=>onChangeText('')}/>

            {/* TASK 3: ADD A SWITCH THAT CHANGES COLOR COLOR */}
            <Switch
            value={isSwitchEnabled}
            onValueChange={
              (value)=> setSwitch(value)
            }
            trackColor={ {true: "blue"} }
            />
          </View>
    );//return statement ends
}//main end block

//stylesheet 
const myStyle = StyleSheet.create(
{
    main: {flex:1, justifyContent:'center',alignItems:'center', padding:100},
    inputBox: { borderColor: 'black', borderWidth:2, width:'90%'},
    displayText: {}

}
);