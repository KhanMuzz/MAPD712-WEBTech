 import React, {useState} from 'react';
 import { StyleSheet,Button,  Text, View, ScrollView, TouchableOpacity} from 'react-native';

/*
Developer: MUZZAMIL KHAN
Course: MAPD-712 Web Tech
Instructor: MR. PAWLUK
Description: Project Patient Data - Milestone 4
Git: https://github.com/KhanMuzz/MAPD712-WEBTech
*/

//------------------- THIS SCREEN ALLOWS USER TO VIEW ALL PATIENTS -------------------------

class ProfileScreen extends React.Component {
    //Making use of state to start an array
    constructor(props){
    super(props)
    this.state={ 
      //Create Empty array
      data :[]
    }
  }
     //This function calls server deployed on Heroku Cloud
     apiHandler=function(){
      //1. For local server call  
      //const uri = 'http://127.0.0.1:5000/patients'
  
      //2. For cloud Heroku server deployed call
      const uri = 'https://patient-data-managment.herokuapp.com/patients'

      fetch(uri,
      {
        headers : { 'Content-Type' : 'application/json'}
      }
      ).then((resp)=>resp.json()).then((respJson)=>
      { 
        this.setState({ data : respJson})//no need for to caste, already in JSON format
      }).catch((error) => console.error(error))
  }//Api handler method ends

    //This builds up a special view display while looping through patient object from MONGODB cloud storage
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
  //This is main JSX render area which calls the list above and then displays in for user
  render() {
      //Make a variable to store data in array
      const { data } = this.state
      return (
        <View style={styles.container}>
            <View style={{height:'87%', flexDirection:'row'}}>
              <ScrollView>
                {      
                  this.list() 
                }
              </ScrollView>
            </View>
            <View>
              <TouchableOpacity style={styles.button}
                        //Onclick call the api handler method to connect with my server
                        onPress={()=>{this.apiHandler()}}>
                  <Text style={{fontSize:20, fontWeight:'bold'}}>List All Patients</Text>
              </TouchableOpacity>
            </View>
        </View>
      );
    }
  }//main render end block

//Custome styling for the page
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#b534fa'
    },
    list:{
      marginTop:10,
      padding: 5,
      fontSize:24
    },
    name:{
      fontWeight:'bold',
     fontSize:24,
     textAlign: 'center'
    },
    titles:{
      fontWeight:'bold'
    },
    button:{
    marginTop:10,
    height: 60,
    width: 350,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf:'center',
    backgroundColor: '#606060',
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

export default ProfileScreen;