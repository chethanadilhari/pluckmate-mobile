import { MaterialIcons } from '@expo/vector-icons';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import tw from 'tailwind-react-native-classnames';

interface PayrollRecord {
  date: string;
  amount: string;
  status: 'Paid' | 'Unpaid';
}

const PayrollReportScreen = () => {
  const [startDate, setStartDate] = useState<Date>(new Date());
  const [endDate, setEndDate] = useState<Date>(new Date());
  const [showStartDatePicker, setShowStartDatePicker] = useState(false);
  const [showEndDatePicker, setShowEndDatePicker] = useState(false);
  const [showDateRange, setShowDateRange] = useState(false);
  const router = useRouter();

  const payrolls: PayrollRecord[] = [
  { date: '10-Mar-2025', amount: 'Rs. 4,500', status: 'Paid' },
  { date: '11-Mar-2025', amount: 'Rs. 5,100', status: 'Unpaid' },
  { date: '12-Mar-2025', amount: 'Rs. 4,900', status: 'Paid' },
  { date: '13-Mar-2025', amount: 'Rs. 5,300', status: 'Paid' },
  { date: '14-Mar-2025', amount: 'Rs. 5,700', status: 'Unpaid' },
  { date: '15-Mar-2025', amount: 'Rs. 5,000', status: 'Paid' },
  { date: '16-Mar-2025', amount: 'Rs. 5,400', status: 'Unpaid' },
  { date: '17-Mar-2025', amount: 'Rs. 4,800', status: 'Paid' },
  { date: '18-Mar-2025', amount: 'Rs. 6,000', status: 'Unpaid' },
  { date: '19-Mar-2025', amount: 'Rs. 5,600', status: 'Paid' },
  { date: '20-Mar-2025', amount: 'Rs. 5,200', status: 'Unpaid' },
  { date: '21-Mar-2025', amount: 'Rs. 4,950', status: 'Paid' },
  { date: '22-Mar-2025', amount: 'Rs. 5,800', status: 'Unpaid' },
  { date: '23-Mar-2025', amount: 'Rs. 5,250', status: 'Paid' },
  { date: '24-Mar-2025', amount: 'Rs. 5,500', status: 'Unpaid' },
];


  const totalAmount = 'Rs. 32,000';

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
        {/* Header */}
        <View style={tw`flex-row items-center mb-8`}>
          <TouchableOpacity onPress={() => router.back()}>
            <MaterialIcons name="arrow-back" size={28} color="#1F4D33" />
          </TouchableOpacity>
          <Text style={tw`text-green-900 text-xl font-bold ml-20`}>Payroll Reports</Text>
          <MaterialIcons name="attach-money" size={30} color="#1F4D33" style={tw`ml-4`} />
        </View>

        {/* Date Range Filter */}
        <View style={tw`mb-5`}>
          <Text style={tw`text-lg font-bold mb-2`}>Payroll Period:</Text>
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
                  style={tw`px-4 py-2 bg-green-900 rounded-xl`}
                  onPress={() => setShowStartDatePicker(true)}
                >
                  <Text style={tw`text-white`}>Select Start Date</Text>
                </TouchableOpacity>
                {showStartDatePicker && (
                  <DateTimePicker
                    value={startDate}
                    mode="date"
                    display="default"
                    onChange={onStartDateChange}
                  />
                )}
              </View>

              <View style={styles.dateRow}>
                <Text style={styles.dateText}>To:</Text>
                <TouchableOpacity
                  style={tw`px-5 py-2 bg-green-900 rounded-xl`}
                  onPress={() => setShowEndDatePicker(true)}
                >
                  <Text style={tw`text-white`}>Select End Date</Text>
                </TouchableOpacity>
                {showEndDatePicker && (
                  <DateTimePicker
                    value={endDate}
                    mode="date"
                    display="default"
                    onChange={onEndDateChange}
                  />
                )}
              </View>
            </View>
          )}
        </View>

        {/* Summary */}
        <View style={tw`bg-gray-300 rounded-3xl shadow-md p-5 mb-4`}>
          <View style={tw`mb-5`}>
            <Text style={tw`text-lg font-bold px-2 py-2 mb-1`}>Total Amount:</Text>
            <View style={tw`flex-row items-center bg-white border-2 border-green-800 rounded-xl px-3 py-1`}>
              <Text style={tw`text-lg text-green-900`}>{totalAmount}</Text>
            </View>
          </View>

          {/* Table Header */}
          <Text style={tw`text-lg font-bold px-2`}>Daily Breakdown:</Text>
          <View style={tw`rounded overflow-hidden mt-2`}>
            <View style={tw`flex-row justify-between px-4 py-3 mb-2`}>
              <Text style={tw`flex-1 font-bold text-green-900 text-left text-xs`}>Date</Text>
              <Text style={tw`flex-1 font-bold text-green-900 text-center text-xs`}>Amount</Text>
              <Text style={tw`flex-1 font-bold text-green-900 text-right text-xs`}>Status</Text>
            </View>

            {payrolls.map((pay, idx) => (
              <View key={idx} style={tw`flex-row bg-gray-50 rounded-xl px-4 py-3 mb-2`}>
                <Text style={tw`flex-1 text-green-900 text-xs`}>{pay.date}</Text>
                <Text style={tw`flex-1 text-green-900 text-xs text-center`}>{pay.amount}</Text>
                <Text
                  style={tw`flex-1 text-xs text-right ${
                    pay.status === 'Paid' ? 'text-green-700' : 'text-red-700'
                  }`}
                >
                  {pay.status}
                </Text>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default PayrollReportScreen;
