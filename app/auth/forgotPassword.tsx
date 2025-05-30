import React from 'react'
import { Text, View } from 'react-native'

const forgotPassword = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: 'white',
      }}
    >
      <Text className="font-inter text-xl text-teaGreen">Forgot Password</Text>
    </View>
  )
}

export default forgotPassword