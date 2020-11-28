import React, {useState} from 'react';
import { StyleSheet,Button,  Text, View, ScrollView, TouchableOpacity, Alert} from 'react-native';

/*
Developer: MUZZAMIL KHAN
Course: MAPD-712 Web Tech
Instructor: MR. PAWLUK
Description: Project Patient Data - Milestone 4
Git: https://github.com/KhanMuzz/MAPD712-WEBTech
*/

//------------------- THIS SCREEN ALLOWS USER TO CHOOSE AND UPDATE PATIENT-------------------------

class UpdatePatient extends React.Component {
    //Making use of state to start an array
    constructor(props){
    super(props)
    this.state={ 
     //Create Empty array
     data :[],
   }
 }
    //This function calls server deployed on Heroku Cloud
    apiHandler=function(){
   
          //1. for local server call
          //const uri = 'http://127.0.0.1:5000/patients'
 
          //2. For cloud Heroku server deployed call
          const uri = 'https://patient-data-managment.herokuapp.com/patients'
          
          //Get call to server
          fetch(uri,
            {
              headers : { 'Content-Type' : 'application/json'}
            }
            ).then((resp)=>resp.json()).then((respJson)=>
            { 
            this.setState({ data : respJson})//no need for to caste, already in JSON format
            }).catch((error) => console.error(error))
    }//api handler method ends

    //Using Map loop through and print patient data in scrollable view
    list = () => {
          return (
            <View>
              { this.state.data.map( (eachJsonObj)=>{
                return( 
                  <View key={eachJsonObj._id}>
                    <TouchableOpacity style={styles.displayBox}
                      //Onclick call the api handler method to connect with my server
                          onPress={()=>{alert(eachJsonObj._id)}}>
                              <View style={{ flex: 1, alignSelf: 'stretch', flexDirection: 'column'}}>
                              <View style={{ flex: 1, alignSelf: 'stretch' }}> 
                                <Text style={[styles.list, styles.name]}>Name: {eachJsonObj.firstName}{" "}
                                <Text>{eachJsonObj.lastName}</Text>
                                </Text>
                              </View>
                              <View style={{ flex: 1, alignSelf: 'stretch' }}> 
                                <Text style={{fontSize:20, textAlign:'center'}}><Text style={styles.titles}> ID:{" "}</Text>{eachJsonObj._id}</Text>
                                < Text></Text>
                                <Text style={{textAlign: 'center'}}>CLICK TO UPDATE</Text>
                            </View>
                      </View>
                    </TouchableOpacity>
                </View> 
                )
             })} 
          </View>
        );
      };

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
                <View style={{}}>
                <TouchableOpacity style={styles.button}
                  //Onclick call the api handler method to connect with my server
                    onPress={()=>{this.apiHandler()}}>
                    <Text style={{fontSize:20, fontWeight:'bold'}}>Choose a patient</Text>
                </TouchableOpacity>
              </View>
            </View>
          );
        }
    }//main class end block

//Custom Styling for this page
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
                  }
                });

export default UpdatePatient;