import React, { useState } from 'react';
import {
  ScrollView,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import { Calendar } from 'react-native-calendars';

const CalendarTab = () => {
  const [selectedTab, setSelectedTab] = useState('Calendar');
  const [selectedFilter, setSelectedFilter] = useState('Tasks');

  return (
    <ScrollView className="flex-1 bg-white">
     
      {/* Calendar */}
      <View className="bg-[#D0C3B5] my-2 p-6  rounded-2xl ">
        <View className="bg-white rounded-3xl overflow-hidden p-4">
          <Calendar
            current="2025-05-01"
            theme={{
              textMonthFontSize: 20,
              textDayFontWeight: '500',
              textDayFontSize: 16,
              todayTextColor: '#B38A5C',
              arrowColor: '#1F4D33',
              monthTextColor: '#1F4D33',
              textMonthFontWeight: 'bold',
              selectedDayBackgroundColor: '#1F4D33',
            }}
          />
        </View>
      

      {/* Filter Buttons */}
      <View className=" mt-2">
        <Text className="text-[#5E360A] m-2 font-bold text-lg ">Apply Filters</Text>
        <View className="flex-row m-4 justify-between">
          {['Attendance', 'Tasks', 'Harvest'].map((filter) => (
            <TouchableOpacity
              key={filter}
              onPress={() => setSelectedFilter(filter)}
              className={`px-4 py-2 rounded-full ${
                selectedFilter === filter
                  ? 'bg-[#1F4D33]'
                  : 'bg-white border border-[#1F4D33]'
              }`}
            >
              <Text
                className={`font-medium ${
                  selectedFilter === filter ? 'text-white' : 'text-[#1F4D33]'
                }`}
              >
                {filter}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Reset Filters Button */}
        <TouchableOpacity className="bg-[#5E360A] mt-4 p-3 rounded-xl items-center">
          <Text className="text-white font-semibold">Reset Filters</Text>
        </TouchableOpacity>
      </View>
      </View>
    </ScrollView>
  );
};

export default CalendarTab;
