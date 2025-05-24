import { useRouter } from "expo-router";
import * as SplashScreen from 'expo-splash-screen';
import React, { useEffect } from 'react';
import { ActivityIndicator, Text, View } from "react-native";

SplashScreen.preventAutoHideAsync();

const index = () => {
  const router = useRouter();

    useEffect(() => {
    const prepare = async () => {
      // Wait 2 seconds or until fonts/assets are ready
      await new Promise(resolve => setTimeout(resolve, 2000));
      await SplashScreen.hideAsync();
    };

    prepare();
  }, []);
  
  useEffect(() => {
    const checkLogin = async () => {
      // const token = await getToken();
      // Simulate a delay for checking login status
      await new Promise((resolve) => setTimeout(resolve, 2000));
      const token = true; // Simulating a token for demonstration purposes
      const destination = token ? "/(tabs)/home" : "/(tabs)/tasks";
      router.replace(destination);
    };
    checkLogin();
  }, []);

  return (
    <View className="flex-1 items-center justify-center bg-white">
      <ActivityIndicator size="large" />
      <Text className="mt-2 text-gray-600">Loading...</Text>
    </View>
  );
}

export default index