import { MaterialIcons } from '@expo/vector-icons';
import DateTimePicker from '@react-native-community/datetimepicker';
import React, { useState } from 'react';
import { ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import tw from 'tailwind-react-native-classnames';

interface HarvestReport {
  date: string;
  amount: string;
  pluckers: string;
  average: string;
}

const HarvestReportScreen = () => {
  const [startDate, setStartDate] = useState<Date>(new Date());
  const [endDate, setEndDate] = useState<Date>(new Date());
  const [showStartDatePicker, setShowStartDatePicker] = useState(false);
  const [showEndDatePicker, setShowEndDatePicker] = useState(false);
  const [showDateRange, setShowDateRange] = useState(false);

  const reports: HarvestReport[] = [
    { date: '19-March-2025', amount: '152kg', pluckers: '12', average: '12.5kg' },
    { date: '20-March-2025', amount: '211kg', pluckers: '14', average: '12.5kg' },
    { date: '21-March-2025', amount: '250kg', pluckers: '15', average: '12.5kg' },
    { date: '22-March-2025', amount: '180kg', pluckers: '12', average: '12.5kg' },
    { date: '23-March-2025', amount: '192kg', pluckers: '11', average: '12.5kg' },
    { date: '24-March-2025', amount: '-', pluckers: '-', average: '-' },
    { date: '25-March-2025', amount: '-', pluckers: '-', average: '-' },
    { date: '26-March-2025', amount: '192kg', pluckers: '11', average: '12.5kg' },
    { date: '27-March-2025', amount: '250kg', pluckers: '15', average: '12.5kg' },
    { date: '28-March-2025', amount: '180kg', pluckers: '12', average: '12.5kg' },
    { date: '29-March-2025', amount: '-', pluckers: '-', average: '-' },
  ];

  const totalHarvest = '2500';

  const onStartDateChange = (event: any, selectedDate?: Date) => {
    const currentDate = selectedDate || startDate;
    setShowStartDatePicker(false);
    setStartDate(currentDate);
  };

  const onEndDateChange = (event: any, selectedDate?: Date) => {
    const currentDate = selectedDate || endDate;
    setShowEndDatePicker(false);
    setEndDate(currentDate);
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    }).replace(',', '');
  };

  const toggleDateRange = () => {
    setShowDateRange(!showDateRange);
  };

  const absoluteFill = {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  };

  const styles = StyleSheet.create({
    overlay: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      backgroundColor: 'rgba(0,0,0,0.3)',
    },
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
    <ImageBackground 
      source={require('../../assets/headers/harvest.jpg')}
      style={{ flex: 1 }}
      resizeMode="cover"
    >
      {/* Semi-transparent overlay */}
      <View style={[StyleSheet.absoluteFill]} />

      <ScrollView style={tw`flex-1 p-4 bg-grey-300 py-16`}>
        <View style={tw`bg-gray-100 rounded-lg shadow-md p-6 mb-6`}>
          <Text style={tw`text-green-900 text-2xl font-bold text-center mb-5`}>Harvest Reports</Text>
          
          <View style={tw`mb-5`}>
            <Text style={tw`text-lg font-bold mb-2`}>Harvest Period:</Text>
            
            {/* Dropdown button */}
            <TouchableOpacity 
              style={styles.dateRangeButton}
              onPress={toggleDateRange}
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
            
            {/* Date range selector (shown when dropdown is clicked) */}
            {showDateRange && (
              <View style={styles.dateRangeContainer}>
                <View style={styles.dateRow}>
                  <Text style={styles.dateText}>From:</Text>
                  <TouchableOpacity 
                    style={tw`px-4 py-2 bg-gray-100 rounded`}
                    onPress={() => setShowStartDatePicker(true)}
                  >
                    <Text style={tw`text-gray-800`}>Select Start Date</Text>
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
                    style={tw`px-4 py-2 bg-gray-100 rounded`}
                    onPress={() => setShowEndDatePicker(true)}
                  >
                    <Text style={tw`text-gray-800`}>Select End Date</Text>
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
          
          <View style={tw`bg-gray-300 rounded-xl shadow-md p-5 mb-4`}>
            <View style={tw`flex-row mb-5`}>
              <Text style={tw`text-lg font-bold px-2 py-2 mb-1`}>Total Harvest:</Text>
              <View style={tw`flex-row items-center bg-white border-2 border-green-800 rounded-xl px-1 py-1 mb-2`}>
                <Text style={tw` w-12 text-center py-1 mr-1`}>
                  {totalHarvest}
                </Text>
                <View style={{ width: 2, height: 20, backgroundColor: '#747474' }} />
                <Text style={tw`text-gray-500 justify-between items-center px-4`}>kg</Text>
              </View>
            </View>
            
            <View style={tw`mb-4`}>
              <Text style={tw`text-lg font-bold px-2 `}>Daily Breakdown:</Text>
              <View style={tw` rounded overflow-hidden`}>
                <View style={tw`flex-row rounded-xl justify-between items-center px-4 py-3 mb-2 `}>
                  <Text style={tw`flex-1 text-xs font-bold text-green-900 text-left`}>Date</Text>
                  <Text style={tw`flex-1 text-xs font-bold text-green-900 text-center`}>Amount</Text>
                  <Text style={tw`flex-1 text-xs font-bold text-green-900 text-center`}>Pluckers</Text>
                  <Text style={tw`flex-1 text-xs font-bold text-green-900 text-right`}>Average</Text>
                </View>
                
                {reports.map((report, index) => (
                  <View key={index} style={tw`flex-row bg-gray-50 rounded-xl justify-between items-center px-4 py-3 mb-2`}>
                    <Text style={tw`text-green-900 text-xs text-center`}>{report.date}</Text>
                    <Text style={tw`text-green-900 flex-1 text-xs text-center`}>{report.amount}</Text>
                    <Text style={tw`text-green-900 flex-1 text-xs text-center`}>{report.pluckers}</Text>
                    <Text style={tw`text-green-900 text-xs text-center`}>{report.average}</Text>
                  </View>
                ))}
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default HarvestReportScreen;