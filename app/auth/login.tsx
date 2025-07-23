import Checkbox from 'expo-checkbox';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import {
  ActivityIndicator,
  Alert,
  ImageBackground,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { login } from '../../services/authService';

export default function Login() {
  const [remember, setRemember] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async() => {
    setLoading(true);
    console.log("Login button pressed");
    try {
      const user = await login(email, password);
      if (user) {
        router.replace('/home');
      } else {
        Alert.alert("Login Failed", "Invalid email or password.");
      }   
    } catch (error) {
      console.error("Login error:", error);
      Alert.alert("Login Failed", "Invalid email or password.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <ImageBackground
      source={require('../../assets/images/login-bg.jpg')}
      className="flex-1 justify-center px-6"
      imageStyle={{ resizeMode: 'cover' }}
    >
      <View className="mb-20">
        <Text className="text-white text-2xl py-5 font-bold text-center">
          Welcome Back to PluckMate
        </Text>
        <Text className="text-white text-md text-center pb-24 mt-1">
          Log in to access your bookings and exclusive experiences.
        </Text>
      </View>

      <View className="space-y-4 mb-16">
        <View className="mb-6">
          <Text className="text-white mb-4">Email</Text>
          <TextInput
            placeholder="Enter your Email"
            placeholderTextColor="#919090"
            className="bg-white/80 rounded-lg text-teaGreen px-4 py-3"
            keyboardType="email-address"
            autoCapitalize="none"
            value={email}
            onChangeText={setEmail}
          />
        </View>

        <View>
          <Text className="text-white mb-4">Password</Text>
          <TextInput
            placeholder="Enter your Password"
            placeholderTextColor="#919090"
            secureTextEntry
            className="bg-white/80 rounded-lg text-teaGreen px-4 py-3"
            value={password}
            onChangeText={setPassword}
          />
        </View>

        <View className="flex-row justify-between items-center mt-8">
          <View className="flex-row items-center">
            <Checkbox value={remember} onValueChange={setRemember} />
            <Text className="text-white ml-2">Remember Me</Text>
          </View>

          <TouchableOpacity onPress={() => router.push('/auth/forgotPassword')}>
            <Text className="text-white underline">Forgot password?</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          className="bg-[#B38A5C] py-3 rounded-xl mt-20"
          onPress={handleLogin}
          disabled={loading}
        >
          {loading ? (
            <ActivityIndicator color="#fff" />
          ) : (
            <Text className="text-white text-center text-lg font-bold">
              Login
            </Text>
          )}
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}
