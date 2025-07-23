import { Stack, useRouter } from 'expo-router';
import { ChevronLeft, Clock } from 'lucide-react-native';
import React from 'react';
import {
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const notifications = [
  {
    title: 'Work & Task Updates',
    message: 'Start plucking in Block A today. Quality check scheduled for evening.',
    time: 'Just now',
    unread: true,
  },
  {
    title: 'General Announcements',
    message: 'Monthly review scheduled for 30th – prepare payroll summary.',
    time: '3 hours ago',
    unread: true,
  },
  {
    title: 'Reporting Reminders',
    message: 'Please submit today’s harvest report before 6 PM.',
    time: '12 hours ago',
    unread: false,
  },
  {
    title: 'Alerts & Issues',
    message: 'Wild animal activity reported near Block C. Stay alert.',
    time: '22 Apr 25 02:37PM',
    unread: false,
  },
  {
    title: 'Inventory & Supply',
    message: 'Fertilizer stock delivered. Confirm receipt and update records.',
    time: '21 Apr 25 08:57AM',
    unread: false,
  },
  {
    title: 'Work & Task Update',
    message: 'Rain expected after 2 PM. Stop fieldwork early if necessary.',
    time: '20 Apr 25 12:57AM',
    unread: false,
  },
  {
    title: 'Inventory & Supply',
    message: 'Fertilizer stock delivered. Confirm receipt and update records.',
    time: '18 Apr 25 14:57AM',
    unread: false,
  },

  {
    title: 'Inventory & Supply',
    message: 'Fertilizer stock delivered. Confirm receipt and update records.',
    time: '18 Apr 25 8:27AM',
    unread: false,
  },
  {
    title: 'Alerts & Issues',
    message: 'Power outage reported in Block D. Backup generator activated.',
    time: '17 Apr 25 09:15AM',
    unread: false,
  },
  {
    title: 'Work & Task Updates',
    message: 'Weed removal scheduled for Block C tomorrow. Prepare tools.',
    time: '16 Apr 25 05:42PM',
    unread: false,
  }
];

export default function NotificationsScreen() {
  const router = useRouter();

  return (
    <View className="flex-1 px-2 bg-white">
      <Stack.Screen options={{ headerShown: false }} />
      <StatusBar barStyle="dark-content" />

      {/* Header */}
      <View className="flex-row items-center mb-4 mt-16 px-4  pb-2">
        <TouchableOpacity onPress={() => router.back()}>
          <ChevronLeft size={32} color="#000" />
        </TouchableOpacity>
        <View className="flex-1 items-center ">
        <Text className="text-center text-xl  font-semibold text-teaGreen">Notifications</Text>
      </View>
      </View>

      {/* Filter Tabs */}
      <View className="flex-row px-4 space-x-3 mb-4">
        <TouchableOpacity className="bg-teaGreen px-8 mr-2 py-1.5 rounded-full">
          <Text className="text-md p-2 font-medium text-white">All</Text>
        </TouchableOpacity>
        <TouchableOpacity className="border border-teaGreen px-4 py-1.5 rounded-full">
          <Text className="text-sm p-2 font-medium text-green-900">Unread</Text>
        </TouchableOpacity>
      </View>

      {/* Notifications List */}
      <ScrollView className="px-4 space-y-3 pb-6">
        {notifications.map((item, index) => (
          <View
            key={index}
            className={`rounded-2xl my-1 p-4 ${
              item.unread
                ? 'bg-[#F1F1F1] border border-gray-400' // light ash for unread
                : 'bg-white border border-gray-400'
            }`}
          >
            <View className="flex-row py-2 justify-between items-start mb-1">
              <Text className="text-md font-semibold text-green-800">
                {item.title}
              </Text>
              <View className="flex-row items-end space-x-1">
                <Clock size={14} color="#6B7280" />
                <Text className="text-xs text-gray-500">{item.time}</Text>
              </View>
            </View>
            <Text className="text-sm text-gray-800">{item.message}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}
