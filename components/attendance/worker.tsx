import React from 'react'
import { View, Text, Pressable } from 'react-native'

interface employeeRecord {
  id: number;
  name: string;
  present: boolean;
}
const Worker = ({ data }: { data: employeeRecord }) => {
  return (
    <View className='flex-row items-center justify-between'
      style={{
        marginTop: 12,
        width: '100%',
        paddingHorizontal: 16,
        paddingVertical: 3,
        backgroundColor: 'white',
        borderRadius: 8,

      }}>
      <Text className="text-lg font-semibold text-gray-700 mt-4">{data.id}</Text>
      <Text className="text-lg font-semibold text-gray-700 mt-4">{data.name}</Text>
      <View className="flex-row items-center mt-4 space-x-2">

        <View className="flex-row items-center">
          <Pressable onPress={() => { }}>
            <View
              className={`w-5 h-5 border rounded ${data.present ? 'bg-blue-500' : 'bg-white'}`}
            />
          </Pressable>

        </View>
      </View>
    </View>
  )
}

export default Worker;