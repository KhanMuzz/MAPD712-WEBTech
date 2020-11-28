import React from 'react';
import { StyleSheet, Button, Text, View, TouchableOpacity, ScrollView} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

/*
Developer: MUZZAMIL KHAN
Course: MAPD-712 Web Tech
Instructor: MR. PAWLUK
Description: Project Patient Data - Milestone 4
Git: https://github.com/KhanMuzz/MAPD712-WEBTech
*/

//------------------- THIS SCREEN ALLOWS USER TO PERFORM SEARCH BY PHONE -------------------------

class SearchPatientByPhone extends React.Component { 
      //Making use of state to start an array
      constructor(props){
      super(props)
      this.state={ 
          //Create Empty array
          data :[],
          //State variable text to store user input
          text: ''
        }
      }//Constructor ends
   
     //This function calls server deployed on Heroku Cloud
      apiHandler=function(){
      
      //Fetch use input into a variable
      var _phoneNum = this.state.text
      
      //Formatt phone to required type
      _phoneNum = _phoneNum.replace(/[^a-zA-Z0-9]/g, '');
      _phoneNum = _phoneNum.slice(0,3)+"-"+ _phoneNum.slice(3,6)+"-"+ _phoneNum.slice(6,15);

      //Make connection and Call Mondoose Local host server with user's input
      
      //1. For local server call
      //const uri = 'http://127.0.0.1:5000/patients/search'

      //2. For cloud Heroku server deployed call
      const uri = 'https://patient-data-managment.herokuapp.com/patients/search'
      
      //Call...Connect to Url for local host, running with Mongoose and Restify
      fetch(uri,
        {
          method : 'post',
          mode: 'no-cors',
          headers : { 
            'Accept' : 'application/json',
            'Content-Type' : 'application/json'
          },
          body: JSON.stringify({
            phoneNum: _phoneNum
          })
          }
          ).then((resp)=>resp.json()).then((respJson)=>
          { 
          this.setState({ data : respJson})//no need for to caste, already in JSON format
          if(respJson.length == 0){
            alert("Sorry, no records for that phone number")
          }
        }).catch((error) => console.error(error))
        }
  
    //Using Map loop through and print patient data in scrollable form
    list = () => {
        return (
            <View>
              { this.state.data.map( (eachJsonObj)=>{
              return( 
                  <View key={eachJsonObj._id}>
                    <View style={styles.displayBox}>    
                       <View style={{ flex: 1, alignSelf: 'stretch', flexDirection: 'column'}}>
                         <View style={{ flex: 1, alignSelf: 'stretch' }}> 
                          <Text style={[styles.list, styles.name]}>Name: {eachJsonObj.firstName}{" "}
                            <Text>{eachJsonObj.lastName}</Text></Text>
                              <Text></Text>
                          </View>
                          <View style={{ flex: 1, alignSelf: 'stretch' }}> 
                            <Text style={styles.baseStyling}><Text style={styles.titles}> ID:{" "}</Text>{eachJsonObj._id}</Text>
                            <Text style={styles.baseStyling}><Text style={styles.titles}> Age:{" "}</Text>{eachJsonObj.age}</Text>     
                            <Text style={styles.baseStyling}><Text style={styles.titles}> Phone:{" "}</Text>{eachJsonObj.phoneNum}</Text>
                            <Text style={styles.baseStyling}><Text style={styles.titles}> Visit Date:{" "}</Text>{eachJsonObj.visitDate}</Text>
                            <Text style={styles.baseStyling}><Text style={styles.titles}> Family Doctor:{" "}</Text>{eachJsonObj.familyDoctor}</Text>
                            <Text style={styles.baseStyling}><Text style={styles.titles}> Blood Pressure:{" "}</Text>{eachJsonObj.bloodPressure}</Text>
                            <Text style={styles.baseStyling}><Text style={styles.titles}> Heart Beat Rate:{" "}</Text>{eachJsonObj.heartBeatRate}</Text>
                            <Text style={styles.baseStyling}><Text style={styles.titles}> Respiratory Rate:{" "}</Text>{eachJsonObj.respiratoryRate}</Text>
                            <Text style={styles.baseStyling}><Text style={styles.titles}> CDC Temperature:{" "}</Text>{eachJsonObj.CDCTemperature}</Text>
                            <Text style={styles.baseStyling}><Text style={styles.titles}> Blood Oxygen Lev:{" "}</Text>{eachJsonObj.bloodOxygenLevel}</Text>
                        </View>
                      </View>
                  </View>
                </View> 
              )
            })} 
        </View>
      );
    };

  //Main JSX view for this screen
  render() {
    return (
        <View style={{flex: 1, backgroundColor: '#b534fa'}}>
            {/*  TOP SECTION WITH LABEL AND A INPUT BOX, SIZE FLEX 1 */}
            <View style={{flex: 1}}>
              <View style={{flex: 1, flexDirection: 'row', justifyContent:'center', marginTop: 5, alignItems:'center'}}>
                  <View style={{width: 160, height: 53, justifyContent:'center', alignItems:'center'}}>
                    <Text style={{fontSize:18, fontWeight:'bold'}}>Patient Phone #</Text>
                  </View> 
                    <View style={{width: 210, height: 45, backgroundColor: 'white', marginLeft:20}}>
                    <View style={{height:'100%', flexDirection:'row'}}>
                      <TextInput  style={{backgroundColor:'white', width:200, height:40}}
                                  placeholder=' Phone' 
                                  onChangeText={text => this.setState({ text })}
                                  value={this.state.fName}
                                  style={{flex:1, fontSize:20, justifyContent:'center'}}
                                  ref={input => { this.phoneNumInput = input }}>
                      </TextInput>
                  </View> 
              </View> 
            </View>
          </View> 

        {/*  MIDDLE SECTION TO DISPLAY PATIENTS FROM DATABASE, SIZE FLEX 5 */}
          <View style={{flex: 5}} >
              <ScrollView>
                {      
                this.list() 
                }
              </ScrollView>
          </View>
        {/*  BOTTOM SECTION FOR BUTTON, SIZE FLEX 1 */}
          <View style={{flex: 1, justifyContent:'center',alignItems:'center'}} >
            <TouchableOpacity style={styles.button2}
                              onPress={()=>{
                                  var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
                                        if(this.state.text.trim() == ''){
                                          alert("Fill in phone number")
                                        }else{
                                          if(!this.state.text.match(phoneno)){
                                            this.phoneNumInput.clear()
                                            this.setState({text: ''})
                                              alert("Phone # must be all nurmeric 111-222-333")
                                          }else{
                                            this.apiHandler()
                                            this.phoneNumInput.clear()
                                            this.setState({text: ''})
                                          }
                                        }
                                      }}>
                <Text style={{fontSize:20, fontWeight:'bold'}}>Find Patient</Text>
            </TouchableOpacity>
          </View> 
        </View>
      );
    }
  }//main class end block

//Custom styles for this screen
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
            },
            button2:{
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
                padding: 5,
                fontSize:24
              },titles:{
                fontWeight:'bold'
              },name:{
                fontWeight:'bold',
                fontSize:24,
                textAlign: 'center'
              },
              displayBox:{
              justifyContent: 'center',
              alignItems: 'center',
              marginRight:40,
              marginLeft:40,
              marginTop:10,
              paddingTop:5,
              paddingBottom:20,
              backgroundColor:'#606060',
              borderRadius:10,
              borderWidth: 1,
              borderColor: 'black'
            },
              baseStyling:{
              fontSize:20, 
              textAlign:'left'
            }
        });

export default SearchPatientByPhone;