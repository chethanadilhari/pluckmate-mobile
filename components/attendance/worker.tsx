import React from 'react'
import { View, Text, Pressable } from 'react-native'

function Worker() {
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
              <Text className="text-lg font-semibold text-gray-700 mt-4">01</Text>
              <Text className="text-lg font-semibold text-gray-700 mt-4">Shantha Kumari</Text>
              <View className="flex-row items-center mt-4 space-x-2">
    
                <View className="flex-row items-center">
                  <Pressable
                    className="w-5 h-5 border border-gray-400 rounded flex items-center justify-center mr-2"
                    onPress={() => {/* Add  checkbox toggle logic here */ }}
                  >
    
                  </Pressable>
    
                </View>
              </View>
    </View>
  )
}

export default Worker;