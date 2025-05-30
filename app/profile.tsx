import React from 'react';
import { Text, View } from 'react-native';

const Profile = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: 'white',
      }}
    >
      <Text className="font-inter text-xl text-teaGreen">Profile</Text>
    </View>
  )
}

export default Profile;