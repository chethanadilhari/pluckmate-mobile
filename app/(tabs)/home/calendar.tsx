import React from 'react';
import { Text, View } from 'react-native';

const CalendarTab = () => {
  return (
     <View style={{ flex: 1, backgroundColor: 'white' }}>
    <View className="bg-blue-100 rounded-2xl p-4 h-80 mb-5">
      <Text className="text-base text-gray-800 text-center">
        Calendar View will be shown here.
      </Text>
    </View>
   </View>
  );
};

export default CalendarTab;
