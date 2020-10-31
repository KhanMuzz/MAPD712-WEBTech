import React, {useState} from 'react';
 import { StyleSheet,Button,  Text, View, ScrollView, TouchableOpacity} from 'react-native';


class CriticalPatients extends React.Component { 
     //Making use of state to start an array
  constructor(props){
    super(props)
    this.state={ 
      //empty array
      data :[]
    }
    var firstCounter=0
    var lastCounter = 0
  }
  apiHandler=function(){
    const uri = 'http://127.0.0.1:3009/products'
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

  list = () => {
    return (
        <View>
         
          { this.state.data.map( (eachJsonObj)=>{
            return(
            
              <View key={eachJsonObj.key}>
                <Text style={[styles.list, styles.name]}>{eachJsonObj.name}</Text>
                <Text style={styles.list}>Age: {eachJsonObj.age}</Text>
                <Text style={styles.list}>Phone: {eachJsonObj.phone}</Text>
                <Text style={styles.list}>Blood Pressure: {eachJsonObj.BP}</Text>
                <Text style={styles.list}>Heart Beat Rate: {eachJsonObj.HR}</Text>
                <Text style={styles.list}>Respiratory Rate: {eachJsonObj.RR}</Text>
                <Text style={styles.list}>CDC Temperature: {eachJsonObj.CDC}</Text>
                <Text style={styles.list}>Blood Oxygen Lev: {eachJsonObj.BOL}</Text>
    
              </View>
              
            )
          }  )  }
          
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
       onPress={()=>{
          this.apiHandler()
       }
      }
        >
            <Text style={{fontSize:20, fontWeight:'bold'}}>Critical List</Text>
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
      textAlign:'center', fontWeight:'bold', fontSize:30
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


export default CriticalPatients;

