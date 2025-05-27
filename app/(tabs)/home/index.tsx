import React from 'react';
import { Text, View } from 'react-native';

const SummaryTab = () => {
  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <View className="bg-lightTeaGreen rounded-2xl p-4 h-80 mb-5">
        <Text className="text-base text-gray-800 text-center">
          This is Today’s Summary section.
        </Text>
      </View>
    </View>
  );
};

export default SummaryTab;
