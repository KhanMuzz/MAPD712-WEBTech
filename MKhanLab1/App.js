import React from 'react';
import { Text, View } from 'react-native';

export default function HelloWorldApp(){
return(
        <View style={  
          { flex:1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'grey'}      
          }>
        <Text>Hello There! My name is M. Khan, </Text>
        <Text>I am a student of WEB-Tech712</Text>
        </View>
)
};
