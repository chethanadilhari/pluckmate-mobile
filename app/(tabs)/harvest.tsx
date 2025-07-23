import React, { useState } from 'react';
import { ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import tw from 'tailwind-react-native-classnames';

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

  // Calculate summary data
  const summaryData: SummaryData = {
    total: employeeData.reduce((sum: number, emp: Employee) => 
      sum + (emp.amount ? parseFloat(emp.amount) : 0), 0),
    pluckers: employeeData.filter((emp: Employee) => emp.amount !== '').length,
    average: employeeData.filter((emp: Employee) => emp.amount !== '').length > 0 
      ? employeeData.reduce((sum: number, emp: Employee) => 
          sum + (emp.amount ? parseFloat(emp.amount) : 0), 0) / 
        employeeData.filter((emp: Employee) => emp.amount !== '').length
      : 0,
    topPicker: employeeData.reduce((max: Employee, emp: Employee) => {
      const currentAmount = emp.amount ? parseFloat(emp.amount) : 0;
      const maxAmount = max.amount ? parseFloat(max.amount) : 0;
      return currentAmount > maxAmount ? emp : max;
    }, { id: 0, name: 'None', amount: '0' })
  };

  const filteredEmployees = employeeData.filter((emp: Employee) => {
    // Filter by search query
    if (searchQuery && !emp.name.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false;
    }
    // Filter by amount
    if (activeFilter === 'All') return true;
    if (activeFilter === '20kg+' && emp.amount) return parseFloat(emp.amount) >= 20;
    if (activeFilter === '10-20kg' && emp.amount) return parseFloat(emp.amount) >= 10 && parseFloat(emp.amount) < 20;
    if (activeFilter === '<1kg' && emp.amount) return parseFloat(emp.amount) < 1;
    
    return activeFilter === 'All' && emp.amount === '';
  });

  const handleAmountChange = (id: number, value: string): void => {
    setEmployeeData(employeeData.map((emp: Employee) => 
      emp.id === id ? { ...emp, amount: value.replace(/[^0-9.]/g, '') } : emp
    ));
  };

  const handleSubmit = () => {
    // Here you would typically send data to your backend
    console.log('Submitted data:', {
      date: harvestDate,
      employees: employeeData,
      notes: specialNotes,
      summary: summaryData
    });
    alert('Harvest data submitted successfully!');
  };

  return (
    <ScrollView style={tw`bg-white p-4`}>
      {/* Harvest Entry Section */}
      <View style={tw`bg-gray-200 rounded-lg shadow-md p-6 mb-6`}>
        <View style={tw`flex-row justify-between items-center mb-4`}>
          <Text style={tw`text-2xl font-bold text-green-900`}>Harvest</Text>
          <View style={tw`bg-green-900 px-3 py-1 rounded-lg`}>
            <Text style={tw`text-white text-sm`}>{harvestDate}</Text>
          </View>
        </View>

        {/* Search and Filters */}
        <TextInput
          style={tw`border border-gray-300 border-1 border-black rounded-lg p-3 mb-4 bg-gray-50`}
          placeholder="Search employee by name..."
          placeholderTextColor="#63676dff"
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
        
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={tw`mb-4 `}>
          <View style={tw`flex-row space-x-2 px-2 `}>
            {['All', '20kg+', '10-20kg', '<1kg'].map(filter => (
              <TouchableOpacity
                key={filter}
                style={[
                  tw`px-4 py-2 mr-1 rounded-xl  `,
                  activeFilter === filter ? tw`bg-green-900 ` : tw`bg-white`
                ]}
                onPress={() => setActiveFilter(filter)}
              >
                <Text style={[
                  tw`text-sm`,
                  activeFilter === filter ? tw`text-white` : tw`text-green-900`
                ]}>
                  {filter}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
        
        {/* Employee List */}
        <View style={tw`mb-6`}>
          <View style={tw`flex-row justify-between pb-2 mb-2`}>
            <Text style={tw`font-semibold text-green-900`}>Employee Name</Text>
            <Text style={tw`font-semibold text-green-900`}> Harvest Amount (kg)</Text>
          </View>
          
          {filteredEmployees.map((employee) => (
            <View key={employee.id} style={tw`flex-row bg-gray-50 rounded-xl justify-between items-center px-4 py-3 mb-2 `}>
              <Text style={tw`text-gray-800 `}>{employee.name}</Text>
              <View style={tw`flex-row items-center bg-white border-2 border-green-800 rounded-xl px-1 py-1`}>
                <TextInput
                  style={tw` w-12 text-center py-1 mr-1`}
                  value={employee.amount}
                  onChangeText={(value) => handleAmountChange(employee.id, value)}
                  keyboardType="numeric"
                  placeholder="0"
                />
                <View style={{ width: 2, height: 20, backgroundColor: '#747474' }} />
                <Text style={tw`text-gray-500 justify-between items-center px-4`}>kg</Text>
              </View>
            </View>
          ))}
        </View>
        
        {/* Special Notes */}
        <Text style={tw`text-sm font-medium font-bold text-green-900 mb-2`}>Special Notes (Optional)</Text>
        <TextInput
          style={tw`border border-gray-300 rounded-lg p-3 h-24 text-gray-800 bg-gray-50`}
          multiline
          value={specialNotes}
          onChangeText={setSpecialNotes}
          placeholder="Enter any special notes or observations..."
          placeholderTextColor="#9CA3AF"
        />
        
        {/* Action Buttons */}
        <View style={tw`flex-row justify-between mt-6`}>
          <TouchableOpacity 
            style={tw`bg-gray-200 border-2 border-green-800 px-6 py-2 rounded-lg flex-3 mr-2`}
            onPress={() => {
              setSearchQuery('');
              setSpecialNotes('');
              setActiveFilter('All');
            }}
          >
            <Text style={tw`text-gray-800 font-medium text-center`}>Cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={tw`bg-green-900 px-4 py-2 rounded-lg flex-1 ml-2`}
            onPress={handleSubmit}
          >
            <Text style={tw`text-white font-medium text-center`}>Enter Harvest Data</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Summary Section */}
      <View style={tw`bg-gray-300 rounded-lg shadow-md p-6 mb-6`}>
        <Text style={tw`text-2xl font-bold text-green-900 mb-6 text-center`}>Today's Summary</Text>
        
        <View style={tw`flex-row bg-gray-300 rounded-xl justify-between items-center px-4 py-3 mb-2 `}>
              <Text style={tw`text-black font-bold `}>Total Harvested Today</Text>
              <View style={tw`flex-row items-center bg-white border-2 border-green-800 rounded-xl px-1 py-1`}>
                <Text style={tw` w-12 text-center py-1 mr-1`}>
                 {summaryData.total.toFixed(1)}
                </Text>
                <View style={{ width: 2, height: 20, backgroundColor: '#747474' }} />
                <Text style={tw`text-gray-500 justify-between items-center px-4`}>kg</Text>
              </View>
        </View>

            <View style={tw`flex-row bg-gray-50 rounded-xl justify-between items-center px-4 py-3 mb-2 `}>
                <Text style={tw`text-gray-800 `}>Pluckers Today</Text>
                <View style={{ width: 2, height: 20, backgroundColor: '#747474' }} />
                <Text style={tw`text-gray-500 justify-between items-center px-4`}>{summaryData.pluckers}</Text>
            </View>

            <View style={tw`flex-row bg-gray-50 rounded-xl justify-between items-center px-4 py-3 mb-2 `}>
                <Text style={tw`text-gray-800 `}>Average per Worker</Text>
                <View style={{ width: 2, height: 20, backgroundColor: '#747474' }} />
                <Text style={tw`text-gray-500 justify-between items-center px-4`}>{summaryData.average.toFixed(1)} kg</Text>
            </View>

            <View style={tw`flex-row bg-gray-50 rounded-xl justify-between items-center px-4 py-3 mb-2 `}>
                <Text style={tw`text-gray-800 justify-right`}>Top Plucker</Text>
                <View style={{ width: 2, height: 20, backgroundColor: '#747474' }} />
                <Text style={tw`text-gray-500 justify-between items-center `}>{summaryData.topPicker.name} ({summaryData.topPicker.amount}kg)</Text>
            </View>
        
        <TouchableOpacity 
          style={tw`bg-green-900 py-3 rounded-lg mt-2`}
          onPress={() => console.log()}>
          <Text style={tw`text-white font-medium text-center`}>View Harvest Reports</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default HarvestApp;
