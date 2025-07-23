import { Stack, useRouter } from 'expo-router';
import { ChevronLeft, Pencil } from 'lucide-react-native';
import React, { useState } from 'react';
import {
  Image,
  ScrollView,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

export default function ProfileScreen() {
  const router = useRouter();

  const [profile, setProfile] = useState({
    name: 'Sunil Abesinghe',
    email: 'sunilabesinghe123@gmail.com',
    mobile: '07709870871',
    address: 'No.123/2, Peradeniya Road, Kandy',
    nic: '7345678321V',
  });

  const handleChange = (field: keyof typeof profile, value: string) => {
    setProfile({ ...profile, [field]: value });
  };

  return (
    <View className="flex-1 bg-white">
      <Stack.Screen options={{ headerShown: false }} />
      <StatusBar barStyle="dark-content" />

      {/* Header */}
      <View className="flex-row items-center mb-4 mt-16 px-4 pb-2">
        <TouchableOpacity onPress={() => router.back()}>
          <ChevronLeft size={32} color="#000" />
        </TouchableOpacity>
        <View className="flex-1 items-center">
          <Text className="text-xl font-semibold text-teaGreen">Profile</Text>
        </View>
      </View>

      <ScrollView className="px-8" showsVerticalScrollIndicator={false}>
        {/* Profile Picture */}
        <View className="items-center mb-10 relative">
          <Image
              source={require('../assets/profile.jpg')}// relative to your file
            className="w-36 h-36 rounded-full"
          />
          <TouchableOpacity className="absolute bottom-1 right-10 bg-white p-2 rounded-full border border-gray-300">
            <Pencil size={20} color="#14532d" />
          </TouchableOpacity>
        </View>

        {/* Form Fields */}
        {[
          { label: 'Name', key: 'name' },
          { label: 'Email', key: 'email' },
          { label: 'Mobile Number', key: 'mobile' },
          { label: 'Address', key: 'address' },
          { label: 'NIC Number', key: 'nic' },
        ].map((field, idx) => (
          <View key={idx} className="mb-6 ">
            <Text className="text-md text-gray-800 mb-3">{field.label}</Text>
            <TextInput
              value={profile[field.key as keyof typeof profile]}
              onChangeText={(text) => handleChange(field.key as any, text)}
              className="border border-gray-300 rounded-2xl px-4 py-4 text-gray-900"
              placeholder={field.label}
              placeholderTextColor="#A0A0A0"
            />
          </View>
        ))}

        {/* Action Buttons */}
        <View className="flex-row justify-between mt-6 mb-12">
          <View className='flex-1 mr-4'>
          <TouchableOpacity
            className="flex-1 border border-teaGreen py-3 rounded-2xl"
            onPress={() => router.back()}
          >
            <Text className="text-center text-gray-800  text-md">Cancel</Text>
          </TouchableOpacity>
          </View>
          <View className='flex-1 '>
          <TouchableOpacity className="flex-1 bg-teaGreen py-3 rounded-2xl">
            <Text className="text-center text-white font-medium">Save Changes</Text>
          </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
