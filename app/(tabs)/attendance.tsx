import DateTimePicker from '@react-native-community/datetimepicker';
import { CalendarDays, ChevronDown, Search, } from 'lucide-react-native';
import { useState } from 'react';
import { Image, Platform, Pressable, ScrollView, Text, TextInput, View } from 'react-native';
import Worker from '../../components/attendance/worker';



const Attendance = () => {
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);

  const employees = [
    { id: 1, name: 'John Doe', present: true },
    { id: 2, name: 'Jane Smith', present: false },
    { id: 3, name: 'Alice Johnson', present: true },
    { id: 4, name: 'Bob Brown', present: true },
    { id: 5, name: 'Charlie White', present: false },
  ];

  const onChange = (_event: any, selectedDate?: Date) => {
    if (selectedDate) setDate(selectedDate);
    if (Platform.OS !== 'ios') setShow(false); // only auto-hide on Android
  };

  return (
    <ScrollView className="flex-1 rounded-3xl mb-24 px-4 py-2 bg-white" showsVerticalScrollIndicator={false}>
      <View
        className=" p-4 rounded-3xl bg-gray-200 mt-4 ml-2 mr-2"
        style={{
          flex: 1,
        }}
      >
        <View className='flex-row items-center justify-between '>
          <Text className="text-2xl pl-2 text-teaGreen font-bold ">Attendance</Text>

          <View className="pl-4 items-center ">
          {show && (
            <View className="flex-row items-center px-4 py-1 bg-teaGreen rounded-2xl space-x-2">
              <CalendarDays color="white" size={20} />
              <DateTimePicker
                value={date}
                mode="date"
                display="default"
                  onChange={onChange}
                />
                <ChevronDown color="white" size={20} />
              </View>
            )}
          </View>
        </View>
        <View style={{ alignItems: 'flex-start', marginTop: 14, width: '100%' }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              backgroundColor: 'white',
              borderRadius: 12,
              width: '100%',

              paddingHorizontal: 4,
              borderWidth: 1,
              borderColor: '#9ca3af',
            }}
          >
            <TextInput
              style={{
                flex: 1,
                color: 'black',
                textAlign: 'left',
                fontSize: 14,
                paddingHorizontal: 10,
                paddingVertical: 10,
              }}
              placeholder='Search Employee By Name...'
              placeholderTextColor={'gray'}
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
          <Text style={{ fontFamily: 'Poppins' }} className="text-lg  text-gray-700 mt-4">No</Text>
          <Text style={{ fontFamily: 'Poppins' }} className="text-lg  text-gray-700 mt-4">Name</Text>
          <Text style={{ fontFamily: 'Poppins' }} className="text-lg  text-gray-700 mt-4">Present/Absent</Text>
        </View>
        {
          employees.map((employee, index) => (
            <Worker data={employee} key={employee.id} />
          ))
        }
        <View style={{ alignItems: 'center', marginTop: 20 }}>
          <Pressable
            className="bg-gray-400 px-6 py-2 rounded-xl"
            onPress={() => { }}
          >
            <Text style={{ fontFamily: 'Poppins' }} className="text-white font-semibold">Next &gt;&gt;</Text>
          </Pressable>
          <View className="flex-row space-x-4 mt-4 ">
            <Pressable
              className="bg-white px-6 py-2 rounded-xl border border-gray-400"
              onPress={() => { }}
            >
              <Text style={{ fontFamily: 'Poppins' }} className="text-green-800 font-semibold">Cancel</Text>
            </Pressable>
            <Pressable
              className="bg-green-800 px-6 py-2 rounded-xl ml-8 "
              onPress={() => { }}
            >
              <Text style={{ fontFamily: 'Poppins' }} className="text-white font-semibold">Save Changes</Text>
            </Pressable>
          </View>
        </View>
      </View>

      <View >
        <View style={{
          padding: 16,
          flex: 1,
        }}
        >
          <View className='flex-row justify-between'>
            <Text
              style={{
                fontFamily: 'Poppins',
                fontSize: 14,
                fontWeight: 'bold',
                marginBottom: 8,
                color: '#333',
              }}
              className="text-lg font-semibold text-gray-700 mt-4 ml-4">
              Total Employee Count
            </Text>
            <View className="border-2 border-gray-400 bg-gray-100 rounded-2xl px-4 py-2 mt-2 mr-8">
              <Text style={{ fontFamily: 'Poppins' }} className="text-gray-700 text-lg font-semibold">
                12
              </Text>
            </View>
          </View>

          <View>
            <View className="flex-row border-2 border-gray-400 bg-gray-100 rounded-2xl px-4 py-4 mt-2 justify-between items-center">
              <Text style={{ fontFamily: 'Poppins' }} className="text-green-700 text-lg font-semibold">Present Count</Text>
              <View style={{ width: 2, height: 32, backgroundColor: '#747474' }} />
              <Text style={{ fontFamily: 'Poppins' }} className="text-green-700 text-lg font-semibold">10</Text>
            </View>

            <View className="flex-row border-2 border-gray-400 bg-gray-100 rounded-2xl px-4 py-4 mt-2 justify-between items-center">
              <Text style={{ fontFamily: 'Poppins' }} className="text-green-700 text-lg font-semibold">Absent Count</Text>
              <View style={{ width: 2, height: 32, backgroundColor: '#747474' }} />
              <Text style={{ fontFamily: 'Poppins' }} className="text-red-700 text-lg font-semibold">02</Text>
            </View>
          </View>
        </View>
        <View>
          <Image
            source={require('../../assets/images/tea_plucker.jpg')}
            style={{ width: '100%', height: 200, borderRadius: 16, overflow: 'hidden' }}
            resizeMode="cover"
          >
          </Image>
        </View>
      </View>


    </ScrollView>
  );
};

export default Attendance;