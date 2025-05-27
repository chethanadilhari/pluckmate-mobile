import React from 'react'
import { Text, View } from 'react-native'

const harvest = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: 'white',
      }}
    >
      <Text className="font-inter text-xl text-teaGreen">harvest</Text>
    </View>
  )
}

export default harvest