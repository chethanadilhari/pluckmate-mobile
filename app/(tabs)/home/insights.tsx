import React from 'react';
import { Text, View } from 'react-native';

const InsightsTab = () => {
  return (
 <View style={{ flex: 1, backgroundColor: 'white' }}>
    <View className="bg-yellow-100 rounded-2xl p-4 h-80 mb-5">
      <Text className="text-base text-gray-800 text-center">
        Insights and stats will be shown here.
      </Text>
    </View>
   </View>
  );
};

export default InsightsTab;
