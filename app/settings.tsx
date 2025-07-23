import { Stack, useRouter } from 'expo-router';
import { ChevronLeft, ChevronRight } from 'lucide-react-native';
import React, { useState } from 'react';
import {
  ScrollView,
  StatusBar,
  Switch,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

export default function SettingsScreen() {
  const router = useRouter();
  const [pushEnabled, setPushEnabled] = useState(true);
  const [autoSync, setAutoSync] = useState(true);

  return (
    <View className="flex-1 px-2 bg-white">
      <Stack.Screen options={{ headerShown: false }} />
      <StatusBar barStyle="dark-content" />

      {/* Header */}
      <View className="flex-row items-center mb-4 mt-16 px-4 pb-2">
        <TouchableOpacity onPress={() => router.back()}>
          <ChevronLeft size={32} color="#000" />
        </TouchableOpacity>
        <View className="flex-1 items-center">
          <Text className="text-xl font-semibold text-teaGreen">Settings</Text>
        </View>
      </View>

      {/* Settings List */}
      <ScrollView className="px-4 my-6 ">
        {/* Section 1: Account & Security */}
        <View className=" pb-6 pt-4">
          <Text className="text-[15px] font-semibold text-green-900">Account & Security</Text>
          <TouchableOpacity className="flex-row justify-between items-center py-3 border-b border-gray-200">
            <Text className="text-[14px] text-gray-800">Change Password</Text>
            <ChevronRight size={20} color="#1C1C1C" />
          </TouchableOpacity>
        </View>
        {/* Section 2: Notifications */}
        <View className=" pb-6 pt-4">
          <Text className="text-[15px] font-semibold text-green-900 mt-2">Notifications</Text>
          <View className="flex-row justify-between items-center py-3 border-b border-gray-200">
            <Text className="text-[14px] text-gray-800">Push Notifications</Text>
            <Switch
              trackColor={{ false: '#ccc', true: '#D0F0C0' }}
              thumbColor={pushEnabled ? '#146356' : '#f4f3f4'}
              onValueChange={() => setPushEnabled(!pushEnabled)}
              value={pushEnabled}
            />
          </View>
          <TouchableOpacity className="flex-row justify-between items-center py-3 border-b border-gray-200">
            <Text className="text-[14px] text-gray-800">Quiet Hours</Text>
            <Text className="text-[13px] text-gray-500">Quiet Hours</Text>
          </TouchableOpacity>
          <TouchableOpacity className="flex-row justify-between items-center py-3 border-b border-gray-200">
            <Text className="text-[14px] text-gray-800">Notification Categories</Text>
            <View className="flex-row items-center space-x-1">
              <Text className="text-[13px] text-gray-600">Sinhala</Text>
              <ChevronRight size={20} color="#1C1C1C" />
            </View>
          </TouchableOpacity>
        </View>

        {/* Section 3: Preferences */}
        <View className=" pb-6 pt-4">
        <Text className="text-[15px] font-semibold text-green-900 mt-2">Preferences</Text>
        <TouchableOpacity className="flex-row justify-between items-center py-3 border-b border-gray-200">
          <Text className="text-[14px] text-gray-800">Date format</Text>
          <View className="flex-row items-center space-x-1">
            <Text className="text-[13px] text-gray-600">DD-MM-YYYY</Text>
            <ChevronRight size={20} color="#1C1C1C" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity className="flex-row justify-between items-center py-3 border-b border-gray-200">
          <Text className="text-[14px] text-gray-800">Time Format</Text>
          <View className="flex-row items-center space-x-1">
            <Text className="text-[13px] text-gray-600">24-hour</Text>
            <ChevronRight size={20} color="#1C1C1C" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity className="flex-row justify-between items-center py-3 border-b border-gray-200">
          <Text className="text-[14px] text-gray-800">Language</Text>
          <View className="flex-row items-center space-x-1">
            <Text className="text-[13px] text-gray-600">Sinhala</Text>
            <ChevronRight size={20} color="#1C1C1C" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity className="flex-row justify-between items-center py-3 border-b border-gray-200">
          <Text className="text-[14px] text-gray-800">Theme</Text>
          <View className="flex-row items-center space-x-1">
            <Text className="text-[13px] text-gray-600">Light</Text>
            <ChevronRight size={20} color="#1C1C1C" />
          </View>
        </TouchableOpacity>
        </View>

        {/* Section 4: Data & Storage */}
        <View className=" pb-6 pt-4">
        <Text className="text-[15px] font-semibold text-green-900 mt-2">Data & Storage</Text>
        <View className="flex-row justify-between items-center py-3 border-b border-gray-200">
          <Text className="text-[14px] text-gray-800">Auto-sync</Text>
          <Switch
            trackColor={{ false: '#ccc', true: '#D0F0C0' }}
            thumbColor={autoSync ? '#146356' : '#f4f3f4'}
            onValueChange={() => setAutoSync(!autoSync)}
            value={autoSync}
          />
        </View>
        <TouchableOpacity className="flex-row justify-between items-center py-3 border-b border-gray-200">
          <Text className="text-[14px] text-gray-800">Clear Local Data</Text>
          <ChevronRight size={20} color="#1C1C1C" />
        </TouchableOpacity>
        </View>


        {/* Section 5: Support & Help */}
        <View className=" pb-6 pt-4">
          <TouchableOpacity className="flex-row justify-between items-center py-3 border-b border-gray-200">
            <Text className="text-[15px] font-semibold text-green-900 mt-2">Support & Help</Text>
            <ChevronRight size={20} color="#1C1C1C" />
          </TouchableOpacity>

        </View>

        {/* Section 6: About */}
      </ScrollView>
    </View>
  );
}
