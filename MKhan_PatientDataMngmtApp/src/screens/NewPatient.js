import React from 'react';
import { StyleSheet, Button, Text, View, TouchableOpacity, ScrollView} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import DatePicker from 'react-native-datepicker';

/*
Developer: MUZZAMIL KHAN
Course: MAPD-712 Web Tech
Instructor: MR. PAWLUK
Description: Project Patient Data - Milestone 4
Git: https://github.com/KhanMuzz/MAPD712-WEBTech
*/

//------------------- THIS SCREEN ALLOWS USER TO CREATE A PATIENT -------------------------

class NewPatient extends React.Component {   
  
    //Constructor and implement state
    constructor(props){
      super(props)
      //Creating input states for all input boxes
      this.state={ 
       firstName        : '',
       lastName         : '',
       age              : '',
       phoneNum         : '',
       visitDate        : '',
       familyDoctor     : '',
       bloodPressure    : '',
       heartBeatRate    : '',
       respiratoryRate  : '',
       CDCTemperature   : '',
       bloodOxygenLevel : ''
      }   
    }//Constructor ends

    //This is a custom setState function to update all input boxes while user enters text
    handleText = (text, type)=>{
      switch(type){
        case 'fName':
          this.setState({firstName: text})
          break;
        case 'lName':
          this.setState({lastName : text})
          break;
        case 'age':
            this.setState({age: text})
            break;
        case 'phoneNum':
            this.setState({phoneNum : text})
            break;
        case 'visitDate':
            this.setState({visitDate: text})
              break;
        case 'familyDoctor':
            this.setState({familyDoctor : text})
              break;
        case 'bloodPressure':
            this.setState({bloodPressure: text})
            break;
        case 'heartBeatRate':
            this.setState({heartBeatRate : text})
            break;
          case 'respiratoryRate':
            this.setState({respiratoryRate: text})
            break;
        case 'CDCTemperature':
            this.setState({CDCTemperature : text})  
            break;
        case 'bloodOxygenLevel':
            this.setState({bloodOxygenLevel : text})  
            break; 
        default: 
          break;  
      }
    };

    //This function calls server deployed on Heroku Cloud
    apiHandler = function(){
    //------ Formatting of variables before call to server ----------

      //Fetch and perform final modifications all inputs into a variables for DB call
      var _firstName       = this.state.firstName
      var _lastName        = this.state.lastName
      var _age             = this.state.age
      var _phoneNum        = this.state.phoneNum
      var _visitDate       = this.state.visitDate
      var _familyDoctor    = this.state.familyDoctor
      var _bloodPressure   = this.state.bloodPressure
      var _heartBeatRate   = this.state.heartBeatRate
      var _respiratoryRate = this.state.respiratoryRate
      var _CDCTemperature  = this.state.CDCTemperature
      var _bloodOxygenLevel= this.state.bloodOxygenLevel
     

      //Perform validation to make sure first char of input is coverted to Uppercase to match Database fields
      var charArray = Array.from(_firstName)
      for(i = 0; i < charArray.length; i++){
        if(i == 0){
          charArray[i]= charArray[i].toUpperCase();
        }
      }
      _firstName = charArray.join("")
      
      //Last name conversion
      var charArray = Array.from(_lastName)
      for(i = 0; i < charArray.length; i++){
        if(i == 0){
          charArray[i]= charArray[i].toUpperCase();
        }
      }
      _lastName = charArray.join("")

      //Dr Name conversion to add the word Dr. to user input
      var charArray = Array.from(_familyDoctor)
      for(i = 0; i < charArray.length; i++){
        if(i == 0){
          charArray[i]= charArray[i].toUpperCase();
        }
      }
      _familyDoctor = "Dr. "+ charArray.join("")
      
      //Apply formatting to phone number input to match server endpoints
      _phoneNum = _phoneNum.replace(/[^a-zA-Z0-9]/g, '');
      _phoneNum = _phoneNum.slice(0,3)+"-"+ _phoneNum.slice(3,6)+"-"+ _phoneNum.slice(6,15);

      //Make connection cals

      //1. for local server call
      //const uri = 'http://127.0.0.1:5000/patients'

      //2. For cloud heroku deployed server call
      const uri = 'https://patient-data-managment.herokuapp.com/patients'
      
      //Send POST req to Heroku 
      fetch(uri,
        {
          method : 'post',
          mode: 'no-cors',
          headers : { 
            'Accept' : 'application/json',
            'Content-Type' : 'application/json'
          },
          body: JSON.stringify({
            //Pass in user input for first name to Post request
            firstName       :   _firstName,
            lastName        :   _lastName,
            age             :   _age,
            phoneNum        :   _phoneNum,
            visitDate       :   _visitDate,
            familyDoctor    :   _familyDoctor,
            bloodPressure   :   _bloodPressure,
            heartBeatRate   :   _heartBeatRate,
            respiratoryRate :   _respiratoryRate,
            CDCTemperature  :   _CDCTemperature,
            bloodOxygenLevel:   _bloodOxygenLevel
          })
        }
        ).then((resp)=>{
          resp.json()
          if(resp.status == 201){
            alert("Patient added!")
            this.props.navigation.navigate('Home')
          }
        }).then((respJson)=>
      { 
        this.setState({ data : respJson})//no need for to caste, already in JSON format
      }).catch((error) => {
        console.error(error)
        alert("Unable to add patient, try again")
      })
     }

  //Main JSX view for this screen
  render() {
    return (
        <View style={{flex: 1, backgroundColor: '#b534fa'}}>
          <View style={{flex: 6}}>
            <ScrollView>
              <View style={{flexDirection: 'row', justifyContent:'center', marginTop:20, alignItems:'center'}}>
                <View style={{width: 160, height: 53, justifyContent:'center', alignItems:'center'}}>
                  <Text style={{fontSize:17, fontWeight:'bold'}}>Patient First Name:</Text>
                </View> 
                <View style={{width: 210, height: 45, backgroundColor: 'white', marginLeft:20}}>
                  <View style={{height:'95%', flexDirection:'row'}}>
                    <TextInput  style={{width:200, height:40}}
                                autoCorrect={false}
                                placeholder=' First name'
                                onChangeText={text => this.handleText(text, 'fName')}
                               style={{flex:1, fontSize:20, justifyContent:'center'}}
                                ref={input => { this.fNameInput = input }}>
                    </TextInput>
                  </View> 
                </View> 
              </View> 
              <View style={{flexDirection: 'row', justifyContent:'center', marginTop:20, alignItems:'center'}}>
                <View style={{width: 160, height: 53,justifyContent:'center', alignItems:'center'}}>
                  <Text style={{fontSize:17, fontWeight:'bold'}}>Patient Last Name:</Text>
                </View> 
                <View style={{width: 210, height: 45, backgroundColor: 'white', marginLeft:20}}>
                  <View style={{height:'95%', flexDirection:'row'}}>
                    <TextInput  style={{width:200, height:40}}
                                autoCorrect={false}
                                placeholder=' Last name'
                                onChangeText={text => this.handleText(text, 'lName')}
                                style={{flex:1, fontSize:20, justifyContent:'center'}}
                                ref={input => { this.lNameInput = input }}>
                      </TextInput>
                  </View> 
                </View> 
              </View> 

            <View style={{flexDirection: 'row', justifyContent:'center', marginTop:20, alignItems:'center'}}>
              <View style={{width: 160, height: 53,justifyContent:'center', paddingLeft:8}}>
                <Text style={{fontSize:17, fontWeight:'bold'}}>Patient Age:</Text>
              </View> 
              <View style={{width: 210, height: 45, backgroundColor: 'white', marginLeft:20}}>
                <View style={{height:'95%', flexDirection:'row'}}>
                    <TextInput  style={{width:200, height:40}}
                                autoCorrect={false}
                                placeholder=' Age'
                                onChangeText={text => this.handleText(text, 'age')}
                                style={{flex:1, fontSize:20, justifyContent:'center'}}
                                ref={input => { this.ageInput = input }}>
                    </TextInput>
                 </View> 
              </View> 
            </View> 


            <View style={{flexDirection: 'row', justifyContent:'center', marginTop:20, alignItems:'center'}}>
              <View style={{width: 160, height: 53, justifyContent:'center', paddingLeft:8}}>
                <Text style={{fontSize:17, fontWeight:'bold'}}>Phone number:</Text>
              </View> 
              <View style={{width: 210, height: 45, backgroundColor: 'white', marginLeft:20}}>
                <View style={{height:'95%', flexDirection:'row'}}>
                    <TextInput  style={{width:200, height:40}}
                                autoCorrect={false}
                                placeholder=' Phone'
                                onChangeText={text => this.handleText(text, 'phoneNum')}
                                style={{flex:1, fontSize:20, justifyContent:'center'}}
                                ref={input => { this.phoneNumInput = input }}>
                    </TextInput>
                 </View> 
              </View> 
            </View> 

            <View style={{flexDirection: 'row', justifyContent:'center', marginTop:20, alignItems:'center'}}>
              <View style={{width: 160, height: 53, justifyContent:'center', paddingLeft:8}}>
                <Text style={{fontSize:17, fontWeight:'bold'}}>Visit date:</Text>
              </View> 
              <View style={{width: 210, height: 45, backgroundColor: 'white', marginLeft:20}}>
                <DatePicker
                        style={styles.datePickerStyle}
                        date={this.state.visitDate} // Initial date from state
                        mode="date" // The enum of date, datetime and time
                        placeholder="select date"
                        format="DD-MM-YYYY"
                        minDate="01-01-2016"
                        maxDate="12-02-2021"
                        confirmBtnText="Confirm"
                        cancelBtnText="Cancel"
                        customStyles={{
                                dateIcon: {
                                position: 'absolute',
                                left: 0,
                                top: 4,
                                marginLeft: 0,
                                      },
                                dateInput: {
                                marginLeft: 36,
                                },
                              }}
                              onDateChange={(visitDate) => {this.handleText(visitDate, 'visitDate')}}/>
                </View> 
            </View> 

            <View style={{flexDirection: 'row', justifyContent:'center', marginTop:20, alignItems:'center'}}>
              <View style={{width: 160, height: 53, justifyContent:'center', paddingLeft: 8}}>
                <Text style={{fontSize:17, fontWeight:'bold'}}>Family Doctor:</Text>
              </View> 
              <View style={{width: 210, height: 45, backgroundColor: 'white', marginLeft:20}}>
                <View style={{height:'95%', flexDirection:'row'}}>
                    <TextInput  style={{width:200, height:40}}
                                autoCorrect={false}
                                placeholder=' Name only'
                                onChangeText={text => this.handleText(text, 'familyDoctor')}
                                style={{flex:1, fontSize:20, justifyContent:'center'}}
                                ref={input => { this.familyDoctorInput = input }}>
                    </TextInput>
                 </View> 
              </View> 
            </View> 

            <View style={{flexDirection: 'row', justifyContent:'center', marginTop:20, alignItems:'center'}}>
              <View style={{width: 160, height: 53, justifyContent:'center', padding: 8}}>
                <Text style={{fontSize:17, fontWeight:'bold'}}>Blood Pressure:</Text>
              </View> 
              <View style={{width: 210, height: 45, backgroundColor: 'white', marginLeft:20}}>
                <View style={{height:'95%', flexDirection:'row'}}>
                    <TextInput  style={{width:200, height:40}}
                                autoCorrect={false}
                                placeholder=' Number 0 to 140'
                                onChangeText={text => this.handleText(text, 'bloodPressure')}
                                style={{flex:1, fontSize:20, justifyContent:'center'}}
                                ref={input => { this.bpInput = input }}>
                    </TextInput>
                 </View> 
              </View> 
            </View> 

            <View style={{flexDirection: 'row', justifyContent:'center', marginTop:20, alignItems:'center'}}>
              <View style={{width: 160, height: 53,justifyContent:'center', paddingLeft: 8}}>
                <Text style={{fontSize:17, fontWeight:'bold'}}>Heart Beat Rate:</Text>
              </View> 
              <View style={{width: 210, height: 45, backgroundColor: 'white', marginLeft:20}}>
                <View style={{height:'95%', flexDirection:'row'}}>
                    <TextInput  style={{width:200, height:40}}
                                autoCorrect={false}
                                placeholder=' Number 30 to 450'
                                onChangeText={text => this.handleText(text, 'heartBeatRate')}
                                style={{flex:1, fontSize:20, justifyContent:'center'}}
                                ref={input => { this.heartRateInput = input }}>
                    </TextInput>
                 </View> 
              </View> 
            </View> 

            <View style={{flexDirection: 'row', justifyContent:'center', marginTop:20, alignItems:'center'}}>
              <View style={{width: 160, height: 53, justifyContent:'center', paddingLeft: 8}}>
                <Text style={{fontSize:17, fontWeight:'bold'}}>Respiratory Rate:</Text>
              </View> 
              <View style={{width: 210, height: 45, backgroundColor: 'white', marginLeft:20}}>
                <View style={{height:'95%', flexDirection:'row'}}>
                    <TextInput  style={{width:200, height:40}}
                                autoCorrect={false}
                                placeholder=' Number 0 to 25'
                                onChangeText={text => this.handleText(text, 'respiratoryRate')}
                                style={{flex:1, fontSize:20, justifyContent:'center'}}
                                ref={input => { this.respRateInput = input }}>
                    </TextInput>
                 </View> 
              </View> 
            </View> 

            <View style={{flexDirection: 'row', justifyContent:'center', marginTop:20, alignItems:'center'}}>
              <View style={{width: 160, height: 53, justifyContent:'center', paddingLeft: 8}}>
                <Text style={{fontSize:17, fontWeight:'bold'}}>CDC Temperature:</Text>
              </View> 
              <View style={{width: 210, height: 45, backgroundColor: 'white', marginLeft:20}}>
                <View style={{height:'95%', flexDirection:'row'}}>
                    <TextInput  style={{width:200, height:40}}
                                autoCorrect={false}
                                placeholder=' Number 0 to 10'
                                onChangeText={text => this.handleText(text, 'CDCTemperature')}
                                style={{flex:1, fontSize:20, justifyContent:'center'}}
                                ref={input => { this.cdcInput = input }}>
                    </TextInput>
                 </View> 
              </View> 
            </View> 


            <View style={{flexDirection: 'row', justifyContent:'center', marginTop:20, alignItems:'center'}}>
              <View style={{width: 160, height: 53,justifyContent:'center', paddingLeft: 8}}>
                <Text style={{fontSize:17, fontWeight:'bold'}}>Blood Oxygen:</Text>
              </View> 
              <View style={{width: 210, height: 45, backgroundColor: 'white', marginLeft:20}}>
                <View style={{height:'95%', flexDirection:'row'}}>
                    <TextInput  style={{width:200, height:40}}
                                autoCorrect={false}
                                placeholder=' Number 0 - 150'
                                onChangeText={text => this.handleText(text, 'bloodOxygenLevel')}
                                style={{flex:1, fontSize:20, justifyContent:'center'}}
                                ref={input => { this.bloodOxyInput = input }}>
                    </TextInput>
                 </View> 
              </View> 
            </View> 
          </ScrollView>  
        </View>
        

        {/*  BOTTOM SECTION FOR BUTTON, SIZE FLEX 1 */}
        <View style={{flex: 1, justifyContent:'center',alignItems:'center', backgroundColor: '#b534fa'}} >
          <TouchableOpacity style={styles.button2}
              onPress={()=>{
                //Start 1st step validation - NO INPUT BOX CAN BE EMPTY TO SUBMIT
                if(this.state.firstName.trim() == ''){
                  alert("Fill in first name")
                }else if(this.state.lastName.trim() == ''){
                  alert("Fill in last name")
                }else if(this.state.age.trim() == ''){
                  alert("Fill in age")
                }else if(this.state.phoneNum.trim() == ''){
                  alert("Fill in phone number")
                }else if(this.state.visitDate == ''){
                  alert("Choose a date")
                }else if(this.state.familyDoctor.trim() == ''){
                  alert("Fill in doctor name")
                }else if(this.state.bloodPressure.trim() == ''){
                  alert("Fill in blood pressure")
                }else if(this.state.heartBeatRate.trim() == ''){
                  alert("Fill in heart beat rate")
                }else if(this.state.respiratoryRate.trim() == ''){
                  alert("Fill in respiratory rate")
                }else if(this.state.CDCTemperature.trim() == ''){
                  alert("Fill in CDC reading")
                }else if(this.state.bloodOxygenLevel.trim() == ''){
                  alert("Fill in blood oxygen level")
                }
                else{
                  //Start 2nd step Validation, all inputs must meet different criterias
                    
                    var letters = /^[A-Za-z]+$/;
                    var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;  
                    
                    if(!this.state.firstName.match(letters)) 
                    {
                        this.fNameInput.clear()
                        this.setState({firstName: ''})
                        alert("First name must be alphabets only")           
                    }else if(!this.state.lastName.match(letters)) 
                    {
                        this.lNameInput.clear()
                        this.setState({lastName: ''})
                        alert("Last name must be alphabets only")           
                    }
                    else if(isNaN(this.state.age) || this.state.age < 2 || this.state.age > 100)  
                    {
                        this.ageInput.clear()
                        this.setState({age: ''})
                        alert("Age must be between 2-100")           
                    }else if(!this.state.phoneNum.match(phoneno)){
                        this.phoneNumInput.clear()
                        this.setState({phoneNum: ''})
                          alert("Phone # must be all nurmeric 111-222-333")
                      }else if(!this.state.familyDoctor.match(letters)) 
                      {
                          this.familyDoctorInput.clear()
                          this.setState({familyDoctor: ''})
                          alert("Doctors name must be alphabets only")           
                      }
                      else if(isNaN(this.state.bloodPressure) || this.state.bloodPressure > 140
                      || this.state.bloodPressure < 0)
                      {
                        this.bpInput.clear()
                        this.setState({bloodPressure : ''})
                        alert("Blood pressure must be a numeric value")
                      }else if(isNaN(this.state.heartBeatRate) || this.state.heartBeatRate > 450 ||
                      this.state.heartBeatRate < 30
                      ){
                        this.heartRateInput.clear()
                        this.setState({heartBeatRate : ''})
                        alert("Heartbeat Rate must be a numeric value")
                      }else if(isNaN(this.state.respiratoryRate) || this.state.respiratoryRate > 25 ||
                      this.state.respiratoryRate < 0
                      ){
                        this.respRateInput.clear()
                        this.setState({respiratoryRate : ''})
                        alert("Respiratory Rate must be a numeric value")
                      }else if(isNaN(this.state.CDCTemperature) || this.state.CDCTemperature > 10 ||
                        this.state.CDCTemperature < 0
                      ){
                        this.cdcInput.clear()
                        this.setState({CDCTemperature : ''})
                        alert("CDC reading must be a numeric value")
                      }else if(isNaN(this.state.bloodOxygenLevel) || this.state.bloodOxygenLevel > 150 ||
                        this.state.bloodOxygenLevel < 0
                      ){
                        this.bloodOxyInput.clear()
                        this.setState({bloodOxygenLevel : ''})
                        alert("Blood oxygen must be a numeric value")
                        }else{
                            
                          //All Validations passed, Call apiHandler to perform last 
                          //corrections and clear all input boxes
                            this.apiHandler()   
                            this.fNameInput.clear()
                            this.setState({firstName: ''})  
                            this.lNameInput.clear()
                            this.setState({lastName: ''})
                            this.ageInput.clear()
                            this.setState({age: ''})  
                            this.phoneNumInput.clear()
                            this.setState({phoneNum: ''}) 
                            this.setState({visitDate: ''})     
                            this.familyDoctorInput.clear()
                            this.setState({familyDoctor: ''})  
                            this.bpInput.clear()
                            this.setState({bloodPressure : ''})
                            this.heartRateInput.clear()
                            this.setState({heartBeatRate : ''}) 
                            this.respRateInput.clear()
                            this.setState({respiratoryRate : ''})
                            this.cdcInput.clear()
                            this.setState({CDCTemperature : ''}) 
                            this.bloodOxyInput.clear()
                            this.setState({bloodOxygenLevel : ''})     
                        }//main inner else ends
                    }//main outer else ends  
                   }}>
              <Text style={{fontSize:20, fontWeight:'bold'}}>Submit</Text>
            </TouchableOpacity>
          </View> 
      </View>
    );
  }//render ends
}//Main class end block

//Custom styling for this screen
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
        height: 60,
        width: 350,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf:'center',
        backgroundColor: '#606060',
        },list:{
          marginTop:10,
          padding: 10,
          backgroundColor: '#b534fa',
          fontSize:24
        },titles:{
          fontWeight:'bold'
        },name:{
          fontWeight:'bold',
           textAlign: 'center',
           fontSize:30
        },datePickerStyle: {
          width: 205,
          marginTop: 3,
        }
  });
export default NewPatient;


