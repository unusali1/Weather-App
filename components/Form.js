import React, { useState } from 'react'
import { Button, StyleSheet, Text, TextInput, View } from 'react-native'

const Form = () => {
    const [display,setDisplay] =useState(false);
    const [name,setName] =useState();
    const [email,setEmail] =useState();
    const [password,setPassword] =useState();
    

  return (
    <View>
        <Text>Name: {name}</Text>
        <TextInput 
         placeholder='Enter your email'
         style={styles.textInput}
         onChangeText={(text)=>setEmail(text)}
        />
        <TextInput 
         placeholder='Enter your password'
         secureTextEntry={true}
         style={styles.textInput}
         onChangeText={(text)=>setPassword(text)}
        ><Text>Show</Text></TextInput>
        <TextInput 
         placeholder='Enter your name'
         style={styles.textInput}
         onChangeText={(text)=>setName(text)}
        />

        <Button style={styles.button} title='Show Data' onPress={()=>setDisplay(true)} />
        
        <Button style={styles.button} title='Clear Data' />
      {
        display ? (
            <View>
                <Text>Name: {name}</Text>
                <Text>Email: {email}</Text>
                <Text>Password: {password}</Text>
                
            </View>
        ): null
      }
  
    </View>
  )
}

const styles = StyleSheet.create({
    textInput:{
        fontSize:18,
        color:"red",
        borderWidth:2,
        borderColor:"black",
        margin:10
    },
    button:{
     margin:10

    }
})

export default Form