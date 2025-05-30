import React from 'react'
import { Text, View } from 'react-native'

const notification = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: 'white',
      }}
    >
      <Text className="font-inter text-xl text-teaGreen">Notifications</Text>
    </View>
  )
}

export default notification