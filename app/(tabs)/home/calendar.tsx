import { isBefore, isEqual, parseISO } from 'date-fns';
import React, { useState } from 'react';
import {
  Alert,
  ScrollView,
  Text,
  View
} from 'react-native';
import { Calendar } from 'react-native-calendars';
import DaySummaryModal from '../../../components/daySummaryModal'; // Adjust path as needed

// Helper to get local date string (YYYY-MM-DD)
const getLocalDate = () => {
  const offset = new Date().getTimezoneOffset() * 60000;
  return new Date(Date.now() - offset).toISOString().split('T')[0];
};

const CalendarTab = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const [isModalVisible, setModalVisible] = useState(false);
  const todayStr = getLocalDate();

  const handleDayPress = (day: any) => {
    const selected = parseISO(day.dateString);
    const today = new Date();

    if (isBefore(selected, today) || isEqual(selected, today)) {
      setSelectedDate(day.dateString);
      setModalVisible(true);
    } else {
      Alert.alert('Unavailable', 'You can only view summaries for today or past dates.');
    }
  };

  return (
    <ScrollView className="flex-1 bg-white relative">

      <View style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: -1, backgroundColor: '#D3C5B5', borderRadius: 24 }} />
      {/* Background Image */}
    {/*  <View style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: -1 }}>
        <Image
          source={require('../../../assets/images/calendar-background.jpg')}
          style={{ width: '100%', height: '100%' }}
          resizeMode="cover"
          borderRadius={24}
        />
      </View>

      {/* Calendar Card */}
      <View className="p-6 rounded-2xl">
        <View className="bg-white rounded-2xl px-2 py-2 shadow-md">
          <Calendar
            current={todayStr}
            onDayPress={handleDayPress}
            markingType={'custom'}
            markedDates={{
              [todayStr]: {
                customStyles: {
                  container: {
                    backgroundColor: '#B38A5C',
                    borderRadius: 16,
                  },
                  text: {
                    color: '#fff',
                    fontWeight: 'bold',
                  },
                },
              },
            }}
            theme={{
              textMonthFontSize: 20,
              textDayFontWeight: '500',
              todayTextColor: '#B38A5C',
              arrowColor: '#1F4D33',
              monthTextColor: '#1F4D33',
              textMonthFontWeight: 'bold',
              selectedDayBackgroundColor: '#1F4D33',
            }}
          />
        </View>
      </View>

      {/* Weekly Harvest Summary Card */}
      <View className="bg-white rounded-2xl mx-6 mb-6 p-4 shadow-md">
        <Text className="text-lg font-semibold text-[#1F4D33] mb-3">Weekly Harvest Summary</Text>

        <View className="flex-row justify-between mb-3">
          <Text className="text-[#5E360A]">Target</Text>
          <Text className="text-[#5E360A] font-medium">2400 kg</Text>
        </View>

        <View className="flex-row justify-between mb-4">
          <Text className="text-[#5E360A]">Collected</Text>
          <Text className="text-[#1F4D33] font-semibold">1860 kg </Text>
        </View>

        {/* Progress Bar */}
        <View className="w-full h-3 bg-[#D9D9D9] rounded-full mt-3">
          <View
            className="h-3 bg-[#1F4D33] rounded-full"
            style={{ width: `${(1860 / 2400) * 100}%` }}
          />
        </View>
      </View>

      {/* Summary Modal */}
      <DaySummaryModal
        visible={isModalVisible}
        date={selectedDate}
        onClose={() => setModalVisible(false)}
      />
    </ScrollView>
  );
};

export default CalendarTab;
