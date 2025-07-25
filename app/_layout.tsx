import { Inter_400Regular, Inter_600SemiBold, Inter_700Bold, } from '@expo-google-fonts/inter';
import { Poppins_400Regular, Poppins_600SemiBold, Poppins_700Bold, } from '@expo-google-fonts/poppins';
import { useFonts } from 'expo-font';
import { Stack } from "expo-router";

import "../global.css";

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_600SemiBold,
    Poppins_700Bold,
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_700Bold,
  });


  return <Stack>
    <Stack.Screen
      name="(tabs)"
      options={{
        headerShown: false,
        
      }}
    />
    <Stack.Screen
      name="auth"
      options={{ headerShown: false }}
    />
 <Stack.Screen
      name="insights"
      options={{ headerShown: false }}
    />
    
  </Stack>
}
