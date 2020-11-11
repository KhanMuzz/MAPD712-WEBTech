 import React, {useState} from 'react';
 import { StyleSheet,Button,  Text, View, ScrollView, TouchableOpacity} from 'react-native';


class ProfileScreen extends React.Component {
  //Making use of state to start an array
  constructor(props){
    super(props)
    this.state={ 
      //Create Empty array
      data :[]
    }
    var firstCounter=0
    var lastCounter = 0
  }
  //Call my Rest local host server
  apiHandler=function(){
  const uri = 'http://127.0.0.1:5000/patients'
  //const URL = 'https://jsonplaceholder.typicode.com/photos?_limit=10'
  fetch(uri,
    {
      headers : { 'Content-Type' : 'application/json'}
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

  render() {
    //Make a variable to store data in array
    const { data } = this.state
    return (
      <View style={styles.container}>
      <View style={{height:'85%', flexDirection:'row'}}>
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
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#b534fa'
    },
    list:{
      marginTop:10,
      padding: 10,
      backgroundColor: '#b534fa',
      fontSize:24
    },
    name:{
      fontWeight:'bold',
       textAlign: 'center',
       fontSize:30
    },
    titles:{
      fontWeight:'bold'
    },
    button:{
    marginTop:10,
    height: 50,
    width: 300,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf:'center',
    backgroundColor: '#606060',
    }
  });
export default ProfileScreen;