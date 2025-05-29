import { FontAwesome, FontAwesome5, MaterialIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

const HomeInsightsTab = () => {
  const router = useRouter();

  const buttons = [
    {
      title: 'Attendance',
      route: '/insights/attendance-reports',
      icon: <MaterialIcons name="people" size={36} color="#1F4D33" />,
    },
    {
      title: 'Tasks',
      route: '/insights/tasks-reports',
      icon: <FontAwesome5 name="tasks" size={32} color="#1F4D33" />,
    },
    {
      title: 'Harvest',
      route: '/insights/harvest-reports',
      icon: <MaterialIcons name="eco" size={40} color="#1F4D33" />,
    },
    {
      title: 'Payroll',
      route: '/insights/payroll-reports',
      icon: <FontAwesome name="money" size={32} color="#1F4D33" />,
    },
  ] as const;

  return (
    <View className="flex-1 bg-white p-2 justify-center items-center">
      <View className="bg-[#D3C5B5] rounded-2xl p-6 flex-wrap flex-row justify-between items-center h-[75%] w-full relative overflow-hidden">
        {buttons.map((btn, idx) => (
          <TouchableOpacity
            key={idx}
            onPress={() => router.push(btn.route)}
            className="w-[48%] h-36 bg-white rounded-2xl mb-4 justify-center items-center shadow"
          >
            {btn.icon}
            <Text className="text-[#1F4D33] font-semibold text-base mt-3 text-center">
              {btn.title} Reports
            </Text>
          </TouchableOpacity>
        ))}
  <View className="w-full items-center mt-8 py-4 px-2">
  <Text className="text-[#5E360A] italic text-center text-sm leading-5">
    “Behind every cup of tea is a story of patience, care, and the gentle hands that pluck each leaf with dedication.”
  </Text>

    <View className="h-[1px] bg-[#B38A5C] w-1/2 mb-2 mt-4" />
  <View className="items-center mt-4">
    <FontAwesome name="coffee" size={36} color="#5E360A" />
  </View>
</View>


       
      </View>
    </View>
  );
};

export default HomeInsightsTab;
