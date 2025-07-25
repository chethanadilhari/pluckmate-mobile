import { MaterialIcons } from '@expo/vector-icons';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import tw from 'tailwind-react-native-classnames';

interface AttendanceRecord {
  date: string;
  total: number;
  present: number;
  absent: number;
}

const AttendanceReport = () => {
  const router = useRouter();
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [showStartDatePicker, setShowStartDatePicker] = useState(false);
  const [showEndDatePicker, setShowEndDatePicker] = useState(false);
  const [showDateRange, setShowDateRange] = useState(false);

 const attendanceData: AttendanceRecord[] = [
  { date: '15-Mar-2025', total: 22, present: 20, absent: 2 },
  { date: '16-Mar-2025', total: 22, present: 21, absent: 1 },
  { date: '17-Mar-2025', total: 21, present: 19, absent: 2 },
  { date: '18-Mar-2025', total: 20, present: 20, absent: 0 },
  { date: '19-Mar-2025', total: 20, present: 18, absent: 2 },
  { date: '20-Mar-2025', total: 20, present: 19, absent: 1 },
  { date: '21-Mar-2025', total: 20, present: 20, absent: 0 },
  { date: '22-Mar-2025', total: 20, present: 17, absent: 3 },
  { date: '23-Mar-2025', total: 20, present: 18, absent: 2 },
  { date: '24-Mar-2025', total: 21, present: 19, absent: 2 },
  { date: '25-Mar-2025', total: 21, present: 20, absent: 1 },
  { date: '26-Mar-2025', total: 22, present: 22, absent: 0 },
  { date: '27-Mar-2025', total: 22, present: 21, absent: 1 },
  { date: '28-Mar-2025', total: 22, present: 19, absent: 3 },
  { date: '29-Mar-2025', total: 22, present: 20, absent: 2 },
  { date: '30-Mar-2025', total: 21, present: 21, absent: 0 },
];


  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    }).replace(',', '');
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
    dateText: {
      fontSize: 16,
      color: '#1F4D33',
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
  });

  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      <ScrollView style={tw`flex-1 p-4 py-16`}>
        {/* Header */}
        <View style={tw`flex-row items-center mb-8`}>
          <TouchableOpacity onPress={() => router.back()}>
            <MaterialIcons name="arrow-back" size={28} color="#1F4D33" />
          </TouchableOpacity>
          <Text style={tw`text-green-900 text-xl font-bold ml-20`}>Attendance Report</Text>
          <MaterialIcons name="groups" size={32} color="#1F4D33" style={tw`ml-4`} />
        </View>

        {/* Date Range */}
        <Text style={tw`text-lg font-bold mb-2`}>Attendance Period:</Text>

        <TouchableOpacity
          style={styles.dateRangeButton}
          onPress={() => setShowDateRange(!showDateRange)}
        >
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
                style={tw`px-4 py-2 bg-green-900 border rounded rounded-xl`}
                onPress={() => setShowStartDatePicker(true)}
              >
                <Text style={tw`text-white`}>Select Start Date</Text>
              </TouchableOpacity>
              {showStartDatePicker && (
                <DateTimePicker
                  value={startDate}
                  mode="date"
                  display="default"
                  onChange={(_, date) => {
                    setShowStartDatePicker(false);
                    if (date) setStartDate(date);
                  }}
                />
              )}
            </View>

            <View style={styles.dateRow}>
              <Text style={styles.dateText}>To:</Text>
              <TouchableOpacity
                style={tw`px-5 py-2 bg-green-900 border rounded rounded-xl`}
                onPress={() => setShowEndDatePicker(true)}
              >
                <Text style={tw`text-white`}>Select End Date</Text>
              </TouchableOpacity>
              {showEndDatePicker && (
                <DateTimePicker
                  value={endDate}
                  mode="date"
                  display="default"
                  onChange={(_, date) => {
                    setShowEndDatePicker(false);
                    if (date) setEndDate(date);
                  }}
                />
              )}
            </View>
          </View>
        )}

        {/* Breakdown Table */}
        <View style={tw`bg-gray-300 rounded-3xl shadow-md mt-4 p-5 mb-4`}>
          <Text style={tw`text-lg font-bold mb-3`}>Daily Breakdown:</Text>

          <View style={tw`rounded overflow-hidden`}>
            <View style={tw`flex-row justify-between items-center px-4 py-3 mb-2`}>
              <Text style={tw`flex-1 text-sm font-bold text-green-900 text-left`}>Date</Text>
              <Text style={tw`flex-1 text-sm font-bold text-green-900 text-center`}>Total</Text>
              <Text style={tw`flex-1 text-sm font-bold text-green-900 text-center`}>Present</Text>
              <Text style={tw`flex-1 text-sm font-bold text-green-900 text-right`}>Absent</Text>
            </View>

            {attendanceData.map((record, index) => (
              <View
                key={index}
                style={tw`flex-row bg-gray-50 rounded-xl justify-between items-center px-4 py-3 mb-2`}
              >
                <Text style={tw`flex-1 text-xs text-green-900 text-left`}>{record.date}</Text>
                <Text style={tw`flex-1 text-xs text-green-900 text-center`}>{record.total}</Text>
                <Text style={tw`flex-1 text-xs text-green-900 text-center`}>{record.present}</Text>
                <Text style={tw`flex-1 text-xs text-green-900 text-right`}>{record.absent}</Text>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default AttendanceReport;
