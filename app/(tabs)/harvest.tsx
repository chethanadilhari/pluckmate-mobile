
import DateTimePicker from '@react-native-community/datetimepicker';
import { useRouter } from 'expo-router';
import { CalendarDays, ChevronDown, Search, } from 'lucide-react-native';
import React, { useState } from 'react';
import { Platform, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';

interface Employee {
  id: number;
  name: string;
  amount: string;
}

interface SummaryData {
  total: number;
  pluckers: number;
  average: number;
  topPicker: Employee;
}

const HarvestApp: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [harvestDate] = useState<string>('April 25, 2025');
  const [specialNotes, setSpecialNotes] = useState<string>('');
  const [employeeData, setEmployeeData] = useState<Employee[]>([
    { id: 1, name: 'Sunil', amount: '12' },
    { id: 2, name: 'Seetha', amount: '16' },
    { id: 3, name: 'Sharmila', amount: '20' },
    { id: 4, name: 'Geetha', amount: '' },
    { id: 5, name: 'Ramalingam', amount: '' },
    { id: 6, name: 'Shartha', amount: '' },
  ]);
 
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false)
const router = useRouter();
    const onChange = (_event: any, selectedDate?: Date) => {
      if (selectedDate) setDate(selectedDate);
      if (Platform.OS !== 'ios') setShow(false); // only auto-hide on Android
    };
  
    
  const summaryData: SummaryData = {
    total: employeeData.reduce((sum, emp) => sum + (emp.amount ? parseFloat(emp.amount) : 0), 0),
    pluckers: employeeData.filter((emp) => emp.amount !== '').length,
    average:
      employeeData.filter((emp) => emp.amount !== '').length > 0
        ? employeeData.reduce((sum, emp) => sum + (emp.amount ? parseFloat(emp.amount) : 0), 0) /
          employeeData.filter((emp) => emp.amount !== '').length
        : 0,
    topPicker: employeeData.reduce(
      (max, emp) => {
        const currentAmount = emp.amount ? parseFloat(emp.amount) : 0;
        const maxAmount = max.amount ? parseFloat(max.amount) : 0;
        return currentAmount > maxAmount ? emp : max;
      },
      { id: 0, name: 'None', amount: '0' }
    ),
  };

  const filteredEmployees = employeeData.filter((emp) => {
    if (searchQuery && !emp.name.toLowerCase().includes(searchQuery.toLowerCase())) return false;
    if (activeFilter === 'All') return true;
    if (activeFilter === '20kg+' && emp.amount) return parseFloat(emp.amount) >= 20;
    if (activeFilter === '10-20kg' && emp.amount)
      return parseFloat(emp.amount) >= 10 && parseFloat(emp.amount) < 20;
    if (activeFilter === '<1kg' && emp.amount) return parseFloat(emp.amount) < 1;
    return false;
  });

  const handleAmountChange = (id: number, value: string) => {
    setEmployeeData(
      employeeData.map((emp) =>
        emp.id === id ? { ...emp, amount: value.replace(/[^0-9.]/g, '') } : emp
      )
    );
  };

  const handleSubmit = () => {
    console.log('Submitted data:', {
      date: harvestDate,
      employees: employeeData,
      notes: specialNotes,
      summary: summaryData,
    });
    alert('Harvest data submitted successfully!');
  };

  return (
    <ScrollView className="bg-white p-4">
      <View className="bg-gray-200 rounded-2xl  p-6 mb-6">
         <View className='flex-row items-center justify-between '>
          <Text className="text-2xl pl-2 text-teaGreen font-bold ">Harvest</Text>

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

        <ScrollView horizontal showsHorizontalScrollIndicator={false} className="mb-4 mt-4">
          <View className="flex-row justify-between space-x-4">
            {['All', '20kg+', '10-20kg', '<1kg'].map((filter) => (
              <TouchableOpacity
                key={filter}
                className={`px-6 pt-2 pb-4 mr-6 rounded-xl ${
                  activeFilter === filter ? 'bg-green-900' : 'bg-white'
                }`}
                onPress={() => setActiveFilter(filter)}
              >
                <Text
                  className={`text-sm ${
                    activeFilter === filter ? 'text-white' : 'text-green-900'
                  }`}
                >
                  {filter}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>

        <View className="mb-6">
          <View className="flex-row justify-between pb-2 mt-5 mb-2">
            <Text className="font-semibold text-green-900">Employee Name</Text>
            <Text className="font-semibold text-green-900">Harvest Amount (kg)</Text>
          </View>

          {filteredEmployees.map((employee) => (
            <View
              key={employee.id}
              className="flex-row bg-gray-50 rounded-xl justify-between items-center px-4 py-3 mb-2"
            >
              <Text className="text-gray-800">{employee.name}</Text>
              <View className="flex-row items-center bg-white border-2 border-green-800 rounded-xl px-1 py-1">
                <TextInput
                  className="w-12 text-center py-1 mr-1 text-black"
                  value={employee.amount}
                  onChangeText={(value) => handleAmountChange(employee.id, value)}
                  keyboardType="numeric"
                  placeholder="0"
                  placeholderTextColor="#9CA3AF"
                />
                <View style={{ width: 2, height: 20, backgroundColor: '#747474' }} />
                <Text className="text-gray-500 px-4">kg</Text>
              </View>
            </View>
          ))}
        </View>

        <Text className="text-sm font-bold text-green-900 mb-2">Special Notes (Optional)</Text>
        <TextInput
          className="border border-gray-300 rounded-lg p-3 h-24 text-gray-800 bg-gray-50"
          multiline
          value={specialNotes}
          onChangeText={setSpecialNotes}
          placeholder="Enter any special notes or observations..."
          placeholderTextColor="#9CA3AF"
        />

        <View className="flex-row justify-between mt-6">
          <TouchableOpacity
            className="border border-teaGreen bg-white px-6 py-2 rounded-xl flex-1 mr-2"
            onPress={() => {
              setSearchQuery('');
              setSpecialNotes('');
              setActiveFilter('All');
            }}
          >
            <Text className="text-teaGreen font-medium text-center">Cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity
            className="bg-green-900 px-4 py-2 rounded-xl flex-1 ml-2"
            onPress={handleSubmit}
          >
            <Text className="text-white font-medium text-center">Enter Harvest Data</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Summary Section */}
      <View className="bg-gray-300 rounded-2xl  p-6 mb-32">
        <Text className="text-xl font-bold text-teaGreen mb-6 text-center">Today's Summary</Text>

        <View className="flex-row bg-gray-300 rounded-xl justify-between items-center px-4 py-3 mb-2">
          <Text className="text-black font-bold">Total Harvested Today</Text>
          <View className="flex-row items-center bg-white border-2 border-green-800 rounded-xl px-1 py-1">
            <Text className="w-12 text-center py-1 mr-1">{summaryData.total.toFixed(1)}</Text>
            <View style={{ width: 2, height: 20, backgroundColor: '#747474' }} />
            <Text className="text-gray-500 px-4">kg</Text>
          </View>
        </View>

        <View className="flex-row bg-gray-50 rounded-xl justify-between items-center px-4 py-3 mb-2">
          <Text className="text-gray-800">Pluckers Today</Text>
          <View style={{ width: 2, height: 20, backgroundColor: '#747474' }} />
          <Text className="text-gray-500 px-4">{summaryData.pluckers}</Text>
        </View>

        <View className="flex-row bg-gray-50 rounded-xl justify-between items-center px-4 py-3 mb-2">
          <Text className="text-gray-800">Average per Worker</Text>
          <View style={{ width: 2, height: 20, backgroundColor: '#747474' }} />
          <Text className="text-gray-500 px-4">{summaryData.average.toFixed(1)} kg</Text>
        </View>

        <View className="flex-row bg-gray-50 rounded-xl justify-between items-center px-4 py-3 mb-2">
          <Text className="text-gray-800">Top Plucker</Text>
          <View style={{ width: 2, height: 20, backgroundColor: '#747474' }} />
          <Text className="text-gray-500">{summaryData.topPicker.name} ({summaryData.topPicker.amount}kg)</Text>
        </View>

        <TouchableOpacity
  className="bg-teaGreen py-3 rounded-2xl mt-2"
  onPress={() => router.push('/insights/harvest-reports')}
>
  <Text className="text-white font-medium text-center">View Harvest Reports</Text>
</TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default HarvestApp;
