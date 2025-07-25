import DateTimePicker from '@react-native-community/datetimepicker';
import { useRouter } from 'expo-router';
import { CalendarDays, ChevronDown, Search, } from 'lucide-react-native';
import { useState } from 'react';
import { Image, Platform, Pressable, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Worker from '../../components/attendance/worker';



const Attendance = () => {
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);

 const [employees, setEmployees] = useState([
  { id: 1, name: 'John Doe', present: true },
  { id: 2, name: 'Jane Smith', present: false },
  { id: 3, name: 'Alice Johnson', present: true },
  { id: 4, name: 'Bob Brown', present: true },
  { id: 5, name: 'Charlie White', present: false },
  { id: 6, name: 'Nimal Perera', present: true },
  { id: 7, name: 'Kumari Herath', present: false },
  { id: 8, name: 'Ruwan Silva', present: true },
  { id: 9, name: 'Heshani Fernando', present: true },
  { id: 10, name: 'Ajith Rajapaksha', present: false },
  { id: 11, name: 'Saman Weerasinghe', present: true },
  { id: 12, name: 'Malsha Jayasinghe', present: false },
  { id: 13, name: 'Tharindu Senanayake', present: true },
  { id: 14, name: 'Dilani Ranasinghe', present: false },
  { id: 15, name: 'Kasun Jayalath', present: true },
]);

  const togglePresent = (id: number) => {
    setEmployees((prev) =>
      prev.map((emp) =>
        emp.id === id ? { ...emp, present: !emp.present } : emp
      )
    );
  };
  const onChange = (_event: any, selectedDate?: Date) => {
    if (selectedDate) setDate(selectedDate);
    if (Platform.OS !== 'ios') setShow(false); // only auto-hide on Android
  };

  const router = useRouter();

  return (
    <ScrollView className="flex-1 rounded-3xl mb-24 px-2 py-2 bg-white" showsVerticalScrollIndicator={false}>
      <View
        className=" p-4 rounded-3xl bg-gray-200 mt-4 ml-2 mr-2"
        style={{
          flex: 1,
        }}
      >
        <View className='flex-row items-center justify-between '>
          <Text className="text-2xl pl-2 text-teaGreen font-bold ">Attendance</Text>

          <View className="pl-4 items-center ">
          
            <View className="flex-row items-center px-2 py-1 bg-teaGreen rounded-2xl space-x-1">
              <CalendarDays color="white" size={15} />
              <DateTimePicker
                value={date}
                mode="date"
                display="default"
                  onChange={onChange}
                />
                <ChevronDown color="white" size={15} />
              </View>
            
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
        <View className='flex-row items-center justify-between space-x-3'
          style={{
            marginTop: 0,
            paddingHorizontal: 16,
            width: '90%',

          }}>
            
          <Text  className="font-semibold text-green-900 mt-6">No</Text>
          <Text  className="font-semibold text-green-900 mt-6">Name</Text>
          <Text  className="font-semibold text-green-900 mt-6">Present</Text>
        </View>
        {
          employees.map((employee, index) => (
            <Worker data={employee} key={employee.id} togglePresent={togglePresent} />
          ))
        }
        <View style={{ alignItems: 'flex-end', marginTop: 20 }}>
          <View className="flex-row space-x-2 mt-4 ">
            <Pressable
              className="bg-white px-6 py-2 rounded-xl border border-teaGreen"
              onPress={() => { }}
            >
              <Text  className="text-teaGreen font-semibold">Cancel</Text>
            </Pressable>
            <Pressable
              className="bg-teaGreen px-6 py-2 rounded-xl ml-8 "
              onPress={() => { }}
            >
              <Text  className="text-white font-semibold">Save Changes</Text>
            </Pressable>
          </View>
        </View>
      </View>

      <View className="flex-1 rounded-3xl mb-10 mx-2 my-6 py-2 bg-gray-200 mt-4">
        <View style={{
          padding: 16,
          flex: 1,
        }}
        >
          <Text className="text-xl font-bold text-teaGreen mb-6 text-center">Today's Summary</Text>
          <View className='flex-row items-center mb-5 justify-between'>
            
            <Text
              className="text-md ml-2 font-bold text-gray-900  ">
              Total Employee Count:
            </Text>
            <View className="border border-teaGreen bg-white rounded-2xl px-4 py-2 mt-2 ">
              <Text  className="text-gray-700 text-lg font-semibold">
                12
              </Text>
            </View>
          </View>

          <View>
            <View className="flex-row border border-teaGreen bg-white rounded-2xl px-4 py-2 mt-2 justify-between items-center">
              <Text  className="text-green-700 text-lg font-semibold">Present Count</Text>
              <View style={{ width: 2, height: 32, backgroundColor: '#747474' }} />
              <Text  className="text-green-700 text-lg font-semibold">10</Text>
            </View>

            <View className="flex-row border border-teaGreen bg-white rounded-2xl px-4 py-2 mt-2 justify-between items-center">
              <Text  className="text-green-700 text-lg font-semibold">Absent Count</Text>
              <View style={{ width: 2, height: 32, backgroundColor: '#747474' }} />
              <Text  className="text-red-700 text-lg font-semibold">02</Text>
            </View>

            <TouchableOpacity
              className="bg-teaGreen py-4 rounded-2xl mt-6"
              onPress={() => router.push('/insights/attendance-reports')}
            >
              <Text className="text-white font-medium text-center">View Attendance Reports</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <Image
            source={require('../../assets/images/tea_plucker.jpg')}
            style={{ width: '100%', height: 400, borderRadius: 24, overflow: 'hidden' }}
            resizeMode="cover"
          >
          </Image>
        </View>
      </View>


    </ScrollView>
  );
};

export default Attendance;