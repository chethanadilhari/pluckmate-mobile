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

  const tasks = [
    {
      no: '01',
      task: 'Plucking',
      assignees: ['Shantha', 'Upul', 'Sharmila', 'Seetha'],
      status: 'Pending',
    },
    {
      no: '02',
      task: 'Field Maintenance',
      assignees: ['Sunil', 'Geetha', 'Nagalingam'],
      status: 'Completed',
    },
    {
      no: '03',
      task: 'Weeding',
      assignees: ['Saman', 'Nirosha'],
      status: 'Completed',
    },
    {
      no: '04',
      task: 'Fertilizing',
      assignees: ['Kumara', 'Dinesh'],
      status: 'Pending',
    },
    {
      no: '05',
      task: 'Transport',
      assignees: ['Rajiv'],
      status: 'In Progress',
    },
    {
      no: '06',
      task: 'Cleaning',
      assignees: ['Nimal', 'Kavindi'],
      status: 'Pending',
    },
    {
      no: '07',
      task: 'Daily Basis',
      assignees: ['Nadeesha', 'Gamini'],
      status: 'Completed',
    },
    {
      no: '08',
      task: 'Spraying',
      assignees: ['Bandara'],
      status: 'In Progress',
    },
    {
      no: '09',
      task: 'Pruning',
      assignees: ['Asela', 'Taniya'],
      status: 'Completed',
    },
    {
      no: '10',
      task: 'Water Management',
      assignees: ['Indika'],
      status: 'Pending',
    },
  ];

  const taskSummary = {
    total: 10,
    completed: 5,
    inProgress: 2,
    pending: 3,
  };

  const onChange = (_event: any, selectedDate?: Date) => {
    if (selectedDate) setDate(selectedDate);
    if (Platform.OS !== 'ios') setShowPicker(false);
  };

  return (
    <ScrollView className="flex-1 px-4 pt-4 pb-32 bg-white" showsVerticalScrollIndicator={false}>
      {/* Header Section */}
      <View className="bg-gray-200 rounded-3xl p-4 mb-6">
        <View className="flex-row items-center justify-between mb-4">
          <Text className="text-2xl pl-2 font-bold text-teaGreen">Tasks</Text>

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
          <Text className="text-white text-sm font-bold">+ Add New Task</Text>
        </TouchableOpacity>
        {/* Table Header */}
        <View className="flex-row  px-4 py-3 mt-2 mb-1 rounded-t-xl">
          <Text className="text-teaGreen font-semibold w-[12%]">No</Text>
          <Text className="text-teaGreen font-semibold w-[25%]">Task</Text>
          <Text className="text-teaGreen font-semibold w-[40%] text-center">Assignees</Text>
          <Text className="text-teaGreen font-semibold w-[20%] text-right">Status</Text>
        </View>


        {/* Task Rows */}
        {tasks.map((item, index) => (
          <View
            key={index}
            className={`flex-row justify-between rounded-xl my-1 px-4 py-3 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'
              }`}
          >
            <Text className="text-gray-800 w-[12%]">{item.no}</Text>
            <Text className="text-gray-800 w-[25%]">{item.task}</Text>
            <View className="w-[40%] text-center" >
              {item.assignees.map((name, idx) => (
                <Text key={idx} className="text-gray-600 text-sm pl-10 text-left">{name}</Text>
              ))}
            </View>
            <View className="w-[25%] items-end">
              <View
                className={`px-4 py-2 rounded-full ${item.status === 'Completed'
                    ? 'bg-green-700'
                    : item.status === 'In Progress'
                      ? 'bg-yellow-600'
                      : 'bg-darkBrown'
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
          <Text className="text-black font-bold">Total Tasks Today</Text>
          <View className="bg-white border-2 border-teaGreen rounded-xl px-6 py-2">
            <Text className="text-center text-lg font-bold text-black">
              {taskSummary.total.toString().padStart(2, '0')}
            </Text>
          </View>
        </View>

        <View className="flex-row bg-gray-50 rounded-xl justify-between items-center px-4 py-3 mb-2">
          <Text className="text-gray-800">Completed Tasks</Text>
          <View style={{ width: 2, height: 20, backgroundColor: '#747474' }} />
          <Text className="text-gray-500 px-4">{taskSummary.completed.toString().padStart(2, '0')}</Text>
        </View>

        <View className="flex-row bg-gray-50 rounded-xl justify-between items-center px-4 py-3 mb-2">
          <Text className="text-gray-800">In Progress Tasks</Text>
          <View style={{ width: 2, height: 20, backgroundColor: '#747474' }} />
          <Text className="text-gray-500 px-4">{taskSummary.inProgress.toString().padStart(2, '0')}</Text>
        </View>

        <View className="flex-row bg-gray-50 rounded-xl justify-between items-center px-4 py-3 mb-2">
          <Text className="text-gray-800">Pending Tasks</Text>
          <View style={{ width: 2, height: 20, backgroundColor: '#747474' }} />
          <Text className="text-gray-500 px-4">{taskSummary.pending.toString().padStart(2, '0')}</Text>
        </View>

        <TouchableOpacity
          className="bg-teaGreen py-3 rounded-2xl mt-4"
          onPress={() => router.push('/insights/tasks-reports')}
        >
          <Text className="text-white font-medium text-center">View Task Reports</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default TaskTab;
