import React, { Component, useState } from 'react';
import {StyleSheet,View,Text, Switch, TextInput, Image, ImageBackground,TouchableOpacity, TouchableHighlightBase, Alert} from 'react-native';

/*
Developer: MUZZAMIL KHAN
Course: MAPD-712 Web Tech
Instructor: MR. PAWLUCK
Description: Assignment 1 - BMI Calculator
*/

//Using a class for text style components for inheritance 
class BasicText extends Component{
  render(){
    return(
      <Text style={myStyles.defaultText}>
        {this.props.children}
      </Text>
    )
  }
}//class ends

const BMIApp= function(){

  // Variables and Set functions to manage all the user-input boxes
  const [valueFeet, setValueFeet] = useState(0);
  const [valueInches, setValueInches] = useState(0);
  const [valueLBS, setValueLBS] = useState(0);
  const [valueCentimeters, setValueCentimeters] = useState(0);
  const [valueKilos, setValueKilos]= useState(0);
  //For final result text box used for display only
  const [result, setResult]= useState();
  //For switch to manage its state and depending on the state, many operations will be performed: 
  const [isEditable, setEditable] = useState(false);

  //A handler function for quick enable/disable of textInput boxes depending on user's selections
  const updateInputBoxesState = function (){
    //this is my handler to enable/disable textboxes
    //call setIsEnabled function and set it to oposite
    setEditable(!isEditable)
  }

  //A function to reset all the state of text-input boxes to default for a new start
  const resetStates = function (option){
    //simple switch call
    switch(option){
      case 1:
        setValueFeet(0)
        setValueInches(0)
        setValueLBS(0)
        break;
      case 2: 
        setValueCentimeters(0)
        setValueKilos(0)
        break;
      //no use of defualt because this is all done internally
    }
  }
      //Return/Rendering  JSX code starts from here
  return(
      //Use of a background image/texture that everything else is wrapped inside
          <ImageBackground
          style={myStyles.imageStyle}
          source={require('./greyish.jpg')}>
          {/* background image code above */}
          
          <View style={myStyles.container}>
          <Text style={{fontSize:30, fontWeight:'bold', color:'purple'}}>STANDARD</Text>
  
         
          <TextInput style={myStyles.input}
          placeholder={!isEditable? 'Enter Feet': "Disabled"}
          editable={!isEditable}
          onChangeText={ (systemIncomingValue)=> {setValueFeet(systemIncomingValue)}}
          ref={(ref)=>{ this.feetInputBox = ref; }}
          />
          <BasicText>Feet</BasicText>

          
          <TextInput style={myStyles.input}
          placeholder={!isEditable? 'Enter Inches': "Disabled"}
          editable={!isEditable}
          onChangeText={function(systemIncomingValue){setValueInches(systemIncomingValue)}}
          ref={(ref)=>{ this.inchesInputBox = ref; }}
          />
          <BasicText>Inches</BasicText>

          
          <TextInput style={myStyles.input}
          placeholder={!isEditable?'Enter Pounds': "Disabled"}
          editable={!isEditable}
          onChangeText={function(systemIncomingValue){ setValueLBS(systemIncomingValue)}}
          ref={(ref)=>{ this.lbsInputBox = ref; }}/>
         <BasicText>Weight in LBS</BasicText>
         
         <Text></Text>{/*This is just used for spacing */}
         
         <Text style={{fontSize: 20, fontWeight:'bold'}}> CHOOSE STANDARD OR METRIC </Text>
         
         <BasicText> Standard <Switch 
          value={isEditable}
          onValueChange={
                      function(systemIncomingValue){setEditable(systemIncomingValue);
                      //if while typing user by mistake touch switch, give user a new start
                      !isEditable? clearAll(1): clearAll(2);
                       setResult(0);
                        } 
                      }
          trackColor={{true: "darkgreen"}}
          thumbColor="white"
          ></Switch>
          
          <BasicText> Metric </BasicText></BasicText>
          
          <Text style={{fontSize:30, fontWeight:'bold', color:'purple'}}>METRIC</Text>

          <TextInput style={myStyles.input}
          placeholder={isEditable? 'Height in Centimteres': "Disabled"}
          editable={isEditable}
          onChangeText={function(systemIncomingValue){setValueCentimeters(systemIncomingValue)}}
          ref={(ref)=>{this.centInputBox=ref;}}
          /><BasicText>Centimeters</BasicText>


          <TextInput style={myStyles.input}
          placeholder={isEditable? "Weight in Kilos": "Disabled"}
          editable={isEditable}
          onChangeText={function(systemIncomingValue){setValueKilos(systemIncomingValue)}}
          ref={(ref)=>{this.kilosInputBox = ref; }} 
          />
         
          <BasicText>Weight in KG</BasicText> 

          <TouchableOpacity 
          //OnPress validation and code starts
          onPress= {
            ()=>{
              if(!isEditable){
                //THIS IF CODE WILL RUN, IF USER CHOSE STANDARD CALCULATION USING SWITCH
                if((valueFeet == 0 || isNaN(valueFeet)) || (valueInches == 0 || isNaN(valueInches)) 
                  || (valueLBS == 0  || isNaN(valueLBS))){
                 // This area runs if user has not entered any value or has entered non-numeric value
                    clearAll(1)
                    resetStates(1)
                    setResult(0)
                    alert("Please enter numeric values"); 
                  }else{
                   // This area runs if user inputs can be casted to numeric values
                    var standardBmi = calculateStandardBmi(valueFeet,valueInches,valueLBS);
                    setResult(standardBmi)
                    clearAll(1)
                    resetStates(1)
                  }
              }else{
                //THIS ELSE WILL RUN IF USER CHOSE METRIC CALCULATION USING SWITCH
                if((valueCentimeters == 0 || isNaN(valueCentimeters)) || (valueKilos == 0 || isNaN(valueKilos))) {
                  //This part will run if user has not entered anything or the input is not numeric
                  clearAll(2)
                  resetStates(2)
                  setResult(0)
                  alert("Please enter numeric values")
                }else{
                  //This else will run if user enters values that can be casted into rumeric
                  var metricBmi = calculateMetricBmi(valueCentimeters, valueKilos);
                  setResult(metricBmi)
                  clearAll(2)
                  resetStates(2)
                }    
              }
            }//Anonymouse function call inside onPress ends
        }//onPress end block
          >
           <Image
            style={{width:200, height:40, margin:20}}
            source={require('./calc.jpg')}
            />
          </TouchableOpacity>
          <Text style={myStyles.finalAnswer}><BasicText>YOUR BMI: </BasicText>{result}</Text>
           
        </View> 
          </ImageBackground>       
      )
};//Main block ends here

//Function to clear all input boxes
function clearAll(optionNumber){
  switch(optionNumber){
    case 1:
          this.feetInputBox.clear();
          this.inchesInputBox.clear();
          this.lbsInputBox.clear();
      break;
    case 2: 
           this.centInputBox.clear();
           this.kilosInputBox.clear();
      break;
  }           
}

//Function to calculate and return BMI result with Standrand values
function calculateStandardBmi(incomingValFeet, incomingValInches, incomingValPounds){
          var feet = parseFloat(incomingValFeet);
          var inches = parseFloat(incomingValInches);
          var feetToInches =(feet *12)+inches;
          var totalHeight = feetToInches*feetToInches;
          var lbs = parseFloat(incomingValPounds);
          var totalBMI = (lbs/totalHeight)*703;
          var applyFinalDecimalRounding = Math.round(totalBMI*10.0)/10.0;
          return applyFinalDecimalRounding;
}
//Function to calculate and return BMI result with Metric values
function calculateMetricBmi(incomingValCentimeters, incomingValKilos){
          var heightInCentimeter = parseFloat(incomingValCentimeters)
          var totalHeight= (heightInCentimeter*heightInCentimeter)/100;
          var wieghtInKilos= parseFloat(incomingValKilos)
          var calcMetricBmi = wieghtInKilos/totalHeight;
          var applyFinalDecimalRouding= (Math.round(calcMetricBmi*1000.0)/10.0);
          return applyFinalDecimalRouding;
}
// Variable that stores all my styling components to apply to different elements
const myStyles = StyleSheet.create({
                 
                  container:{
                          flex:1,
                          justifyContent:'center',
                          alignItems:'center',
                           },
                  input:{
                          width:200,
                          backgroundColor:'white',
                          borderWidth:2,
                          borderColor:'black',
                          margin:8,
                          padding: 8
                          
                          },
                  finalAnswer:{
                          fontSize:27,
                          color: 'red',
                          fontWeight: 'bold'
                  },
                  imageStyle: {
                          flex: 1,
                          width: null,
                          height: null,
                          },
                  defaultText:{
                    fontSize:20,
                    color: 'black',
                    fontWeight:'bold'

                  }
});

export default BMIApp;




 