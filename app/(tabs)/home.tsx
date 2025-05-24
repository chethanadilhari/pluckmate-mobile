
import React from 'react';
import { Image, ScrollView, Text, View } from 'react-native';

const home = () => {
  return (
    <View className="flex-1 bg-white">
      <View className="mb-5 " />
      <Image
      source={require('../../assets/headers/home.jpeg')}
      className="absolute w-full z-0 h-64 rounded-3xl"
      resizeMode="cover"
      />
    
      <Image
      source={require('../../assets/images/logo/logo.png')}
      className="w-48 h-52 mt-10 mb-5 mx-auto"
      style={{ tintColor: '#FFFFFF' }} 
      />

      <ScrollView
      className="flex-1 px-5"
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ minHeight: "100%", paddingBottom: 10 }}
      >
        <Text className="text-2xl font-bold text-center  text-teaGreen mb-5">
          Welcome to the Home Page 
        </Text>
        <View
          className="bg-lightTeaGreen rounded-2xl p-4 h-80 mb-5"
          
        >
          <Text className="text-base text-gray-800 text-center">
            This is a rectangle with rounded borders.
          </Text>
        </View>

      </ScrollView>
    </View>
  );
}

export default home