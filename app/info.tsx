import React from 'react'
import { Text, View } from 'react-native'

const info = () => {
    return (
        <View
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: 'white',
            }}
        >
            <Text className="font-inter text-xl text-teaGreen">Info</Text>
        </View>
    )
}

// Hide the header
info.options = {
    headerShown: false,
}

export default info