import React from 'react';
import { StyleSheet, Button, Text, View, TouchableOpacity, ScrollView} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

/*
Developer: MUZZAMIL KHAN
Course: MAPD-712 Web Tech
Instructor: MR. PAWLUK
Description: Project Patient Data - Milestone 3
Git: https://github.com/KhanMuzz/MAPD712-WEBTech
*/

//Search screen to find a patient by name
class SearchPatientByName extends React.Component {    
    //Making use of state to start an array
    constructor(props){
      super(props)
      this.state={ 
        //Create Empty array
        data :[],
        //State variable text to store userinput
        text: ''
      }
    }//Constructor ends
   
    //Function to handle Api call to MondoDB running on local host server 
      apiHandler = function(){

      //Fetch user input into a variable
      var input = this.state.text

      //Perform validation to make sure first char of input is Uppercase to match Database fields
      var charArray = Array.from(input)
      for(i = 0; i < charArray.length; i++){
        if(i == 0){
          charArray[i]= charArray[i].toUpperCase();
        }
      }
      input = charArray.join("")

      //Make connection and Call Mondoose Local host server with user's input
      const uri = 'http://127.0.0.1:5000/patients/search'
      
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
            //Pass in user input for first name to Post request
            firstName: input
          })
        }
        ).then((resp)=>resp.json()).then((respJson)=>
      { 
        this.setState({ data : respJson})//no need for to caste, already in JSON format
      }).catch((error) => console.error(error))
    }
  
    //Using Map loop through and print patient data in scrollable form
    list = () => {
      return (
        <View>
          { this.state.data.map( (eachJsonObj)=>{
            return( 
              <View key={eachJsonObj.key}>
               
                <Text style={[styles.list, styles.name]}>{eachJsonObj.firstName}{" "}
                <Text>{eachJsonObj.lastName}</Text>
                </Text>
                <Text style={[styles.list]}><Text style={styles.titles}>ID:{" "}</Text>{eachJsonObj._id}</Text>
                <Text style={styles.list}><Text style={styles.titles}>Age:{" "}</Text>{eachJsonObj.age}</Text>
                <Text style={styles.list}><Text style={styles.titles}>Phone:{" "}</Text>{eachJsonObj.phoneNum}</Text>
                <Text style={styles.list}><Text style={styles.titles}>Visit Date:{" "}</Text>{eachJsonObj.visitDate}</Text>
                <Text style={styles.list}><Text style={styles.titles}>Phone:{" "}</Text>{eachJsonObj.familyDoctor}</Text>
                <Text style={styles.list}><Text style={styles.titles}>Blood Pressure:{" "}</Text>{eachJsonObj.bloodPressure}</Text>
                <Text style={styles.list}><Text style={styles.titles}>Heart Beat Rate:{" "}</Text>{eachJsonObj.heartBeatRate}</Text>
                <Text style={styles.list}><Text style={styles.titles}>Respiratory Rate:{" "}</Text>{eachJsonObj.respiratoryRate}</Text>
                <Text style={styles.list}><Text style={styles.titles}>CDC Temperature:{" "}</Text>{eachJsonObj.CDCTemperature}</Text>
                <Text style={styles.list}><Text style={styles.titles}>Blood Oxygen Lev:{" "}</Text>{eachJsonObj.bloodOxygenLevel}</Text>
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
              <View style={{flex: 1, flexDirection: 'row', justifyContent:'center', marginTop:20, alignItems:'center'}}>
                  <View style={{width: 160, height: 50, backgroundColor: 'gray',justifyContent:'center', alignItems:'center'}}>
                    <Text style={{fontSize:15, fontWeight:'bold'}}>Patient First Name:</Text>
                  </View> 
              <View style={{width: 210, height: 44, backgroundColor: 'white', marginLeft:20}}>
                <View style={{height:'85%', flexDirection:'row'}}>
                    <TextInput style={{backgroundColor:'white', width:200, height:50}}
                        placeholder='First name'
                        onChangeText={text => this.setState({ text })}
                        value={this.state.fName}
                        style={{flex:1, fontSize:24, justifyContent:'center'}}
                        >
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
              onPress={()=>{this.apiHandler()} }>
              <Text style={{fontSize:20, fontWeight:'bold'}}>Find Patient</Text>
          </TouchableOpacity>
        </View> 
    </View>
    );
  }
}

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
        height: 50,
        width: 300,
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
        }
  });
export default SearchPatientByName;


