import DateTimePicker from '@react-native-community/datetimepicker';
import { useRouter } from 'expo-router';
import { CalendarDays, ChevronDown, Search } from 'lucide-react-native';
import { useState } from 'react';
import {
  Platform,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

const TaskTab: React.FC = () => {
  const [date, setDate] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false);
  const [search, setSearch] = useState('');
  const router = useRouter();

const payrolls = [
  { name: 'Sunil', category: 'Daily Basis', amount: '1000.00', status: 'Unpaid' },
  { name: 'Seetha', category: 'Field Maintenance', amount: '1500.00', status: 'Paid' },
  { name: 'Sharmila', category: 'Plucking', amount: '1200.00', status: 'Paid' },
  { name: 'Upul', category: 'Fertilizing', amount: '1800.00', status: 'Unpaid' },
  { name: 'Geetha', category: 'Daily Basis', amount: '950.00', status: 'Paid' },
  { name: 'Ramalingam', category: 'Weeding', amount: '1300.00', status: 'Unpaid' },
  { name: 'Nagalingam', category: 'Transport', amount: '2000.00', status: 'Paid' },
  { name: 'Shantha', category: 'Field Maintenance', amount: '1500.00', status: 'Unpaid' },
  { name: 'Saman', category: 'Daily Basis', amount: '1050.00', status: 'Paid' },
  { name: 'Nirosha', category: 'Cleaning', amount: '1100.00', status: 'Paid' },
];




  const onChange = (_event: any, selectedDate?: Date) => {
    if (selectedDate) setDate(selectedDate);
    if (Platform.OS !== 'ios') setShowPicker(false);
  };

  return (
    <ScrollView className="flex-1 px-4 pt-4 pb-32 bg-white" showsVerticalScrollIndicator={false}>
      {/* Header Section */}
      <View className="bg-gray-200 rounded-3xl p-4 mb-6">
        <View className="flex-row items-center justify-between mb-4">
          <Text className="text-2xl pl-2 font-bold text-teaGreen">Payroll</Text>

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

        <View style={{ alignItems: 'flex-start', marginTop: 10, marginBottom: 14, width: '100%' }}>
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

        <TouchableOpacity
          onPress={() => console.log('Add New Task')}
          className="self-end bg-teaGreen first-letter px-4 py-3 mb-2 rounded-xl"
        >
          <Text className="text-white text-sm font-bold">+ Request Advanced Payment</Text>
        </TouchableOpacity>
        {/* Table Header */}
        <View className="flex-row  px-4 py-3 mt-2 mb-1 rounded-t-xl">
          <Text className="text-teaGreen font-semibold w-[20%%]">Name</Text>
          <Text className="text-teaGreen font-semibold w-[40%]">Category</Text>
          <Text className="text-teaGreen font-semibold w-[20%] text-center">Amount (Rs)</Text>
          <Text className="text-teaGreen font-semibold w-[20%] text-right">Status</Text>
        </View>


        {/* Task Rows */}
        {payrolls.map((item, index) => (
          <View
            key={index}
            className={`flex-row justify-between rounded-xl my-1 px-4 py-3 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'
              }`}
          >
            <Text className="text-gray-800 w-[20%]">{item.name}</Text>
            <Text className="text-gray-800 w-[40%]">{item.category}</Text>
            <View className="w-[20%] text-center" >
              <Text className="text-gray-800">{item.amount}</Text>
            </View>
            <View className="w-[20%] items-end">
              <View
                className={`px-4 py-2 rounded-full ${item.status === 'Paid' ? 'bg-green-700' : 'bg-yellow-600'
                  }`}
              >
                <Text className="text-white text-xs">{item.status}</Text>
              </View>
            </View>
          </View>
        ))}
      </View>

      {/* Summary Section */}
      <View className="bg-gray-300 rounded-2xl mb-32 p-6">
        <Text className="text-xl font-bold text-teaGreen mb-6 text-center">
          Today's Summary
        </Text>

        <View className="flex-row justify-between items-center bg-gray-300 rounded-xl px-4 py-3 mb-2">
          <Text className="text-black font-bold">Total Payroll for Today</Text>
          <View className="bg-white border-2 border-teaGreen rounded-xl px-6 py-2">
            <Text className="text-center text-lg font-bold text-black">
              Rs.15000.00
            </Text>
          </View>
        </View>

        

        <TouchableOpacity
          className="bg-teaGreen py-3 rounded-2xl mt-4"
          onPress={() => router.push('/insights/payroll-reports')}
        >
          <Text className="text-white font-medium text-center">View Payroll Reports</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default TaskTab;
