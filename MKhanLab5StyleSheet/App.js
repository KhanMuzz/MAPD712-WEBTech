import React, {Component} from 'react';
import {StyleSheet,View, Text, TouchableOpacity, Alert} from 'react-native';

/*
Developer: MUZZAMIL KHAN
Course: MAPD-712 Web Tech
Instructor: MR. PAWLUK
Description: LAB 5 , BACKGROUND COLOR
*/

// THIS IS A VERY SIMPLE APP THAT WILL ONLY CHANGE BACKGROUND COLORS WITH BUTTONSS
// A class for basic text styles for inheritences
class BasicText extends Component{
  render(){
    return(
      <Text style={styles.defaultText}>
        {this.props.children}
      </Text>
    )
  }
}//class ends

//Class starts 
class Lab5Styles extends Component   {

  //Constructor to implement / bind methods and initialize state for background
  constructor(props){
    super(props)
    this.onClick1 = this.onClick1.bind(this);
    this.onClick2 = this.onClick2.bind(this);
    this.onClick3 = this.onClick3.bind(this);
    this.onClick4 = this.onClick4.bind(this);
    this.state = {
    // give a starting background
     backgroundColor : 'white'
    };
  }

  //4 methods that simply change the background state
  onClick1() {
        this.setState({ backgroundColor: 'yellow'});
  }
  onClick2() {
    this.setState({ backgroundColor: 'pink'});
  }
  onClick3() {
    this.setState({ backgroundColor: 'red'});
}
  onClick4() {
  this.setState({ backgroundColor: 'black'});
  }
  render (){
    //JSX returning object
    return (
      //main parent white taking over the entire screen 
     <View style={[styles.main, {flex : 1, backgroundColor: this.state.backgroundColor}]}>
        <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
          <TouchableOpacity style={styles.buttonsGroup1} 
            onPress={ this.onClick1}>
            <BasicText>Yellow</BasicText>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonsGroup2}
            onPress={ this.onClick2}>
            <BasicText>Pink</BasicText>
          </TouchableOpacity>
      </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <TouchableOpacity style={styles.buttonsGroup3}
            onPress={ this.onClick3}>
            <BasicText>Red</BasicText>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonsGroup4}
            onPress={ this.onClick4}>
            <BasicText>Black</BasicText>
          </TouchableOpacity>
        </View>
     </View>
 );//return end block
}//render end block
};//main class end block

//Stylesheet use for components
const styles = StyleSheet.create({
                        main : {
                          justifyContent : 'center',//horizontal up/down
                        },
                        buttonsGroup1 : {
                          height: 50,
                          width : 100,
                          backgroundColor : "grey"
                        },
                        buttonsGroup2 : {
                          height: 50,
                          width : 100,
                          
                          backgroundColor : 'purple'
                          
                        },buttonsGroup3 : {
                          height: 50,
                          width : 100,
                          marginTop : 20,
                          backgroundColor : 'green'
                          
                        },
                        buttonsGroup4 : {
                          height: 50,
                          width : 100,
                          marginTop : 20,
                          backgroundColor : 'blue'    
                        },
                        defaultText: {
                          textAlign: "center",
                          marginTop: 15,
                          fontWeight: 'bold'
                        }                        
});
export default Lab5Styles;
