import React from 'react'
import { Text, View } from 'react-native'

const UserData = (props) => {
  return (
    <View>
        <Text>Name: {props.name}</Text>
    </View>
  )
}

export default UserData;