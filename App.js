import axios from 'axios';
import * as React from 'react';
import { View, Text, Button, ImageBackground, StyleSheet, TextInput, ActivityIndicator } from 'react-native';


function App() {

  const [input,setInput] = React.useState();
  const [loading,setLoading] = React.useState(false);
  const [data,setData] = React.useState();

  const fetchDataHandler = React.useCallback(()=>{
    setLoading(true);
    axios({
      method:"GET",
      url:`https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=dc72c611da1a3c43dc67b75149e66118`
    }).then((res)=>{
      console.warn("Response:",res);
      setData(res.data);
    })
    .catch(e => console.dir(e))
    .finally(() =>setLoading(false))
  },[input])



  return (
    <View style={styles.root} >
      <ImageBackground
       source={require("./assets/bg.jpg")}
       resizeMode='cover'
       style={styles.image}
      >
        <View>
           <TextInput
            placeholder='Search any city'
            style={styles.input}
            value={input}
            onChangeText={text => setInput(text)}
            onSubmitEditing={fetchDataHandler}
           />
        </View>

        {
          loading && (
          <View style={styles.intigator} >
              <ActivityIndicator size="large" color="#fff"></ActivityIndicator>
          </View>
          )
        }

           {
            data && (
              <View style={styles.infoView} >
              <Text style={styles.counteryTxt} >
               {`${data.name}, ${data?.sys?.country}`}
              </Text>
              <Text style={styles.date}>
               {new Date().toLocaleString()}
              </Text>
 
              <Text style={styles.temp}>
               {`${data?.main?.temp} °C`} 
              </Text>
 
              <Text style={styles.tempinfo}>
               {`Min ${Math.round(data?.main?.temp_min)} °C / Max ${Math.round(data?.main?.temp_max)} °C`}
              </Text>
             </View>
            )
           }
      

      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  root:{
    flex: 1
  },
  image:{
    flex:1,
    flexDirection:"column"
  },
  input:{
    backgroundColor:"#fff",
    padding:10,
    marginTop:80,
    marginLeft:40,
    marginRight:40,
    borderRadius:50
  },
  intigator:{
    marginTop:50
  },
  infoView:{
    marginTop: 60,
    textAlign:"center",
    alignItems:"center"
  },
  counteryTxt:{
    fontSize:32,
    color:"white",
    fontWeight:"bold"
  },
  date:{
    color:"white",
    marginTop:10
    },
  temp:{
    marginTop:50,
    color:"white",
    fontSize:40,
    fontWeight:"bold"
   
   },
   tempinfo:{
    marginTop:20,
    color:"white",
    fontSize:20,
    fontWeight:"bold"
   
   }
})

export default App;
