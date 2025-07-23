import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import {
  ImageBackground,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

export default function ForgotPassword() {
  const [email, setEmail] = useState('');
  const router = useRouter();

  return (
    <ImageBackground
      source={require('../../assets/images/login-bg.jpg')}
      className="flex-1 justify-center px-6"
      imageStyle={{ resizeMode: 'cover' }}
    >
      <View className="mb-24">
        <Text className="text-white text-2xl font-bold text-center mb-4">
          Forgot Your Password?
        </Text>
        <Text className="text-white text-center text-base">
          Enter the email address linked to your account, and{'\n'}
          we'll send you a link to reset your password
        </Text>
      </View>

      <View className="space-y-6 mb-12">
        <View className='mb-20'>
          <Text className="text-white mb-3">Email</Text>
          <TextInput
            placeholder="Enter your Email"
            placeholderTextColor="#919090"
            value={email}
            onChangeText={setEmail}
            className="bg-white/80 rounded-lg text-teaGreen px-4 py-3"
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>

        <TouchableOpacity className="bg-[#B38A5C] py-4 rounded-xl">
          <Text className="text-white text-center font-bold text-base">
            Send Reset Link
          </Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity onPress={() => router.replace('/auth/login')}>
        <Text className="text-white text-center">
          Wait, I remember my password...
          <Text className="text-white underline">Click here</Text>
        </Text>
      </TouchableOpacity>
    </ImageBackground>
  );
}
