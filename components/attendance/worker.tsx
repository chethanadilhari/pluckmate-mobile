import Checkbox from 'expo-checkbox';
import React from 'react';
import { Text, View } from 'react-native';

interface employeeRecord {
  id: number;
  name: string;
  present: boolean;
}
const Worker = ({ data, togglePresent }: { data: employeeRecord, togglePresent: (id: number) => void }) => {
  return (
    <View className='flex-row items-center justify-between py-3'
      style={{
        marginTop: 12,
        width: '100%',
        paddingHorizontal: 16,
        paddingVertical: 3,
        backgroundColor: 'white',
        borderRadius: 8,

      }}>
      <Text className="text-md font-semibold text-gray-700 ">{data.id}</Text>
      <Text className="text-md font-semibold text-gray-700 ">{data.name}</Text>
      <View className="flex-row items-center space-x-2">

        <View className="flex-row items-center">
          <Checkbox
            value={data.present}
            onValueChange={() => { togglePresent(data.id) }}
            color={data.present ? '#1F4D33' : undefined}
          />
        </View>
      </View>
    </View>
  )
}

export default Worker;