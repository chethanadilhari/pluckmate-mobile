import DateTimePicker from '@react-native-community/datetimepicker';
import { CalendarDays, ChevronDown, Search, } from 'lucide-react-native';
import { useState } from 'react';
import { Platform, Pressable, ScrollView, Text, TextInput, View } from 'react-native';
import Worker from '../../components/attendance/worker';


const Attendance = () => {
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);

  const onChange = (event: any, selectedDate?: Date) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios'); // iOS: keep visible
    setDate(currentDate);
  };

  return (
    <ScrollView className="flex-1 rounded-3xl mb-24 bg-white" showsVerticalScrollIndicator={false}>
      <View
        className=" p-4 rounded-3xl bg-lightTeaGreen mt-4 ml-2 mr-2"
        style={{
          flex: 1,
        }}
      >
        <View className='flex-row items-center justify-between'>
          <Text className="font-bold text-2xl pl-2 pt-4">attendance</Text>

          <View className="pl-4 items-center mt-4">
            <Pressable
              className="flex-row items-center px-4 py-2 bg-green-800 rounded-xl space-x-2"
              onPress={() => setShow(true)}
            >
              <CalendarDays color="white" size={18} />
              <Text className="text-white">
                {date.toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </Text>
              <ChevronDown color="white" size={16} />
            </Pressable>

            {show && (
              <DateTimePicker
                value={date}
                mode="date"
                display="default"
                onChange={onChange}
              />
            )}
          </View>
        </View>
        <View style={{ alignItems: 'flex-start', marginTop: 24, width: '100%' }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              backgroundColor: 'white',
              borderRadius: 8,
              width: '90%',
              marginLeft: 16,
              paddingHorizontal: 10,
              borderWidth: 1,
              borderColor: '#9ca3af',
            }}
          >
            <TextInput
              style={{
                flex: 1,
                color: 'black',
                textAlign: 'left',
                fontSize: 16,
                paddingVertical: 10,
              }}
              placeholder='Search Employee By Name...'
              placeholderTextColor={'brown'}
            />
            <Search color="black" size={20} style={{ marginLeft: 8 }} />
          </View>
        </View>
        <View className='flex-row items-center justify-between'
          style={{
            marginTop: 0,
            paddingHorizontal: 16,
            width: '90%',

          }}>
          <Text className="text-lg  text-gray-700 mt-4">No</Text>
          <Text className="text-lg  text-gray-700 mt-4">Name</Text>
          <Text className="text-lg  text-gray-700 mt-4">Present/Absent</Text>
        </View>
        <Worker />
        <Worker />
        <Worker />
        <Worker />
        <Worker />
        <View style={{ alignItems: 'center', marginTop: 20 }}>
          <Pressable
            className="bg-gray-400 px-6 py-2 rounded-xl"
            onPress={() => {}}
          >
            <Text className="text-white font-semibold">Next &gt;&gt;</Text>
          </Pressable>
          <View className="flex-row space-x-4 mt-4 ">
            <Pressable
              className="bg-white px-6 py-2 rounded-xl border border-gray-400"
              onPress={() => {}}
            >
              <Text className="text-green-800 font-semibold">Cancel</Text>
            </Pressable>
            <Pressable 
              className="bg-green-800 px-6 py-2 rounded-xl ml-8 "
              onPress={() => {}}
            >
              <Text className="text-white font-semibold">Save Changes</Text>
            </Pressable>
          </View>
        </View>
      </View>

    </ScrollView>
  );
};

export default Attendance;