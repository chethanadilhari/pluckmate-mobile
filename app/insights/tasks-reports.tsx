import { MaterialIcons } from '@expo/vector-icons';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import tw from 'tailwind-react-native-classnames';

interface TaskReport {
  date: string;
  total: number;
  completed: number;
  inProgress: number;
  pending: number;
}

const TaskReportScreen = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [showStartDatePicker, setShowStartDatePicker] = useState(false);
  const [showEndDatePicker, setShowEndDatePicker] = useState(false);
  const [showDateRange, setShowDateRange] = useState(false);
  const router = useRouter();

const taskReports: TaskReport[] = [
  { date: '10-Mar-2025', total: 9, completed: 6, inProgress: 2, pending: 1 },
  { date: '11-Mar-2025', total: 11, completed: 7, inProgress: 3, pending: 1 },
  { date: '12-Mar-2025', total: 10, completed: 6, inProgress: 2, pending: 2 },
  { date: '13-Mar-2025', total: 8, completed: 5, inProgress: 2, pending: 1 },
  { date: '14-Mar-2025', total: 12, completed: 8, inProgress: 3, pending: 1 },
  { date: '15-Mar-2025', total: 9, completed: 7, inProgress: 1, pending: 1 },
  { date: '16-Mar-2025', total: 7, completed: 6, inProgress: 0, pending: 1 },
  { date: '17-Mar-2025', total: 10, completed: 8, inProgress: 1, pending: 1 },
  { date: '18-Mar-2025', total: 11, completed: 9, inProgress: 1, pending: 1 },
  { date: '19-Mar-2025', total: 8, completed: 5, inProgress: 2, pending: 1 },
  { date: '20-Mar-2025', total: 10, completed: 6, inProgress: 3, pending: 1 },
  { date: '21-Mar-2025', total: 9, completed: 7, inProgress: 1, pending: 1 },
  { date: '22-Mar-2025', total: 7, completed: 4, inProgress: 2, pending: 1 },
  { date: '23-Mar-2025', total: 6, completed: 5, inProgress: 0, pending: 1 },
  { date: '24-Mar-2025', total: 0, completed: 0, inProgress: 0, pending: 0 },
];


  const onStartDateChange = (_event: any, selectedDate?: Date) => {
    setShowStartDatePicker(false);
    if (selectedDate) setStartDate(selectedDate);
  };

  const onEndDateChange = (_event: any, selectedDate?: Date) => {
    setShowEndDatePicker(false);
    if (selectedDate) setEndDate(selectedDate);
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    }).replace(',', '');
  };

  const toggleDateRange = () => {
    setShowDateRange(!showDateRange);
  };

  const styles = StyleSheet.create({
    dateRangeButton: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: 12,
      backgroundColor: 'white',
      borderRadius: 8,
      borderWidth: 1,
      borderColor: '#ccc',
      marginBottom: 10,
    },
    dateRangeContainer: {
      backgroundColor: 'white',
      borderRadius: 8,
      padding: 10,
      marginBottom: 10,
    },
    dateRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 10,
    },
    dateText: {
      fontSize: 16,
      color: '#1F4D33',
    },
  });

  return (
    <View style={{ flex: 1, backgroundColor: '#ffffff' }}>
      <ScrollView style={tw`flex-1 p-4 py-16`}>
        <View style={tw`flex-row items-center mb-8`}>
          <TouchableOpacity onPress={() => router.back()}>
            <MaterialIcons name="arrow-back" size={28} color="#1F4D33" />
          </TouchableOpacity>
          <Text style={tw`text-green-900 text-xl font-bold ml-20`}>Task Reports</Text>
          <MaterialIcons name="assignment" size={32} color="#1F4D33" style={tw`ml-4`} />
        </View>

        <View style={tw`mb-5`}>
          <Text style={tw`text-lg font-bold mb-2`}>Report Period:</Text>
          <TouchableOpacity style={styles.dateRangeButton} onPress={toggleDateRange}>
            <Text style={styles.dateText}>
              {formatDate(startDate)} to {formatDate(endDate)}
            </Text>
            <MaterialIcons
              name={showDateRange ? 'keyboard-arrow-up' : 'keyboard-arrow-down'}
              size={24}
              color="#666"
            />
          </TouchableOpacity>

          {showDateRange && (
            <View style={styles.dateRangeContainer}>
              <View style={styles.dateRow}>
                <Text style={styles.dateText}>From:</Text>
                <TouchableOpacity
                  style={tw`px-4 py-2 bg-green-900 border rounded-xl`}
                  onPress={() => setShowStartDatePicker(true)}
                >
                  <Text style={tw`text-white`}>Select Start Date</Text>
                </TouchableOpacity>
                {showStartDatePicker && (
                  <DateTimePicker value={startDate} mode="date" display="default" onChange={onStartDateChange} />
                )}
              </View>

              <View style={styles.dateRow}>
                <Text style={styles.dateText}>To:</Text>
                <TouchableOpacity
                  style={tw`px-5 py-2 bg-green-900 border rounded-xl`}
                  onPress={() => setShowEndDatePicker(true)}
                >
                  <Text style={tw`text-white`}>Select End Date</Text>
                </TouchableOpacity>
                {showEndDatePicker && (
                  <DateTimePicker value={endDate} mode="date" display="default" onChange={onEndDateChange} />
                )}
              </View>
            </View>
          )}
        </View>

        <View style={tw`bg-gray-300 rounded-3xl shadow-md p-5 mb-4`}>
          <View style={tw`mb-4`}>
            <Text style={tw`text-lg font-bold px-2`}>Daily Task Summary:</Text>
            <View style={tw`rounded overflow-hidden`}>
              <View style={tw`flex-row rounded-xl justify-between items-center px-4 py-3 mb-2`}>
                <Text style={tw`flex-1 text-xs font-bold text-green-900 text-left`}>Date</Text>
                <Text style={tw`flex-1 text-xs font-bold text-green-900 text-left`}>Total</Text>
                <Text style={tw`flex-1 text-xs font-bold text-green-900 text-center`}>Complete</Text>
                <Text style={tw`flex-1 text-xs font-bold text-green-900 text-right`}>Progress</Text>
                <Text style={tw`flex-1 text-xs font-bold text-green-900 text-right`}>Pending</Text>
              </View>

              {taskReports.map((report, index) => (
                <View key={index} style={tw`flex-row bg-gray-50 rounded-xl justify-between items-center px-4 py-3 mb-2`}>
                  <Text style={tw`text-green-900 flex-1 text-xs text-left`}>{report.date}</Text>
                  <Text style={tw`text-green-900 flex-1 text-xs text-center`}>{report.total}</Text>
                  <Text style={tw`text-green-900 flex-1 text-xs text-center`}>{report.completed}</Text>
                  <Text style={tw`text-green-900 flex-1 text-xs text-center`}>{report.inProgress}</Text>
                  <Text style={tw`text-green-900 flex-1 text-xs text-right`}>{report.pending}</Text>
                </View>
              ))}
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default TaskReportScreen;
