import React from 'react'
import { Text, View } from 'react-native'

const tasks = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
      >
      <Text className="font-inter text-xl text-teaGreen">tasks</Text>
    </View>
  )
}

export default tasks