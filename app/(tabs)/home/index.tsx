import { Feather, FontAwesome5, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { format } from 'date-fns';
import React, { useState } from 'react';
import { ImageBackground, ScrollView, Switch, Text, TouchableOpacity, View } from 'react-native';

const SummaryTab = () => {
  const [isHoliday, setIsHoliday] = useState(false);
  const [lastSynced, setLastSynced] = useState('2025-05-28 09:45 AM');
  const today = format(new Date(), 'yyyy-MM-dd');

  const handleSync = () => {
    const newTime = format(new Date(), 'yyyy-MM-dd hh:mm a');
    setLastSynced(newTime);
  };

  const Card = ({ title, icon, iconColor, children }: any) => (
    <View className="bg-white rounded-2xl shadow-sm p-4 mb-4">
      <View className="flex-row items-center mb-2">
        <View className={`p-2 rounded-full mr-3`} style={{ backgroundColor: iconColor }}>
          {icon}
        </View>
        <Text className="text-lg font-semibold">{title}</Text>
      </View>
      {children}
    </View>
  );

  return (
    <ScrollView className="flex-1 rounded-3xl mb-24  bg-white" showsVerticalScrollIndicator={false}>
      {/* Header with Background */}
      <ImageBackground
        source={require('../../../assets/headers/bg.jpg')}
        className="h-28 w-full justify-end   px-4 pb-6"
        imageStyle={{ borderRadius:24 }}
      >
        <View className="flex-row justify-between items-center">
          <Text className="text-white text-xl font-bold">{today}</Text>
          <View className="flex-row items-center">
            <Text className="text-white mr-2 text-lg font-bold">Holiday</Text>
            <Switch value={isHoliday} onValueChange={setIsHoliday} />
          </View>
        </View>
      </ImageBackground>

      {/* Cards */}
      <View className="p-4 rounded-3xl bg-lightTeaGreen mt-4">
        <Card
          title="Attendance Summary"
          icon={<FontAwesome5 name="user-check" size={18} color="white" />}
          iconColor="#10B981"
        >
            <View className="flex-row border-2 border-gray-400 bg-gray-100 rounded-2xl px-4 py-4 mt-2 justify-between items-center">
            <Text className="text-green-700 text-md font-semibold">Present: 38</Text>
            <View style={{ width: 2, height: 32, backgroundColor: '#747474' }} />
            <Text className="text-red-700 text-md font-semibold">Absent: 12</Text>
            </View>
        </Card>

        <Card
          title="Task Summary"
          icon={<MaterialIcons name="task-alt" size={20} color="white" />}
          iconColor="#10B981"
        >
          <View className="flex-row border-2 border-gray-400 bg-gray-100 rounded-2xl px-4 py-4 mt-2 mb-4 justify-between items-center">
            
            <Text className="text-lightBrown font-semibold">Ongoing: 5</Text>
            <View style={{ width: 2, height: 32, backgroundColor: '#747474' }} />
            <Text className="text-green-700 font-semibold">Completed: 10</Text>
            <View style={{ width: 2, height: 32, backgroundColor: '#747474' }} />
            <Text className="text-red-700 font-semibold">Pending: 3</Text>
          </View>
     
        </Card>

        <Card
          title="Today's Harvest"
          icon={<MaterialCommunityIcons name="leaf" size={20} color="white" />}
          iconColor="#10B981"
        >
          <View className="flex-row border-2 border-gray-400 bg-gray-100 rounded-2xl px-4 py-4 mt-2 mb-4  justify-between items-center">
            <Text className="text-lg font-semibold">Total: 456.5kg</Text>
            <Text className="text-gray-500 font-medium">Avg: 12.1kg</Text>
          </View>
        </Card>

        <Card
          title="Top Plucker"
          icon={<Feather name="award" size={20} color="white" />}
          iconColor="#B38A5C"
        >
          <View className="flex-row border-2 border-gray-400 bg-gray-100 rounded-2xl px-4 py-4 mt-2 mb-4  justify-between items-center">
            <Text className="text-lg font-semibold">Kumari D.</Text>
            <Text className="text-gray-500 font-medium">46.8kg</Text>
          </View>
        </Card>
<Card
          title="Last Sync"
          icon={<Feather name="refresh-cw" size={20} color="white" />}
          iconColor="#5E360A"
        >
          <View className="flex-row justify-between items-center">
            <Text className="text-gray-500">{lastSynced}</Text>
            <TouchableOpacity
              className="bg-[#B38A5C] px-4 py-2 rounded-xl flex-row items-center"
              onPress={handleSync}
            >
              <Feather name="refresh-ccw" size={16} color="#fff" />
              <Text className="text-white text-m ml-2 font-medium">Sync</Text>
            </TouchableOpacity>
          </View>
        </Card>
        
      </View>
    </ScrollView>
  );
};

export default SummaryTab;
