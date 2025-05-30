import React from 'react';
import { Text, View } from 'react-native';

const Login = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: 'white',
      }}
    >
      <Text className="font-inter text-xl text-teaGreen">Login</Text>
    </View>
  )
}

export default Login;