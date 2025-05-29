import TopTabNav from '@/components/home/topTabNav';
import { Stack } from 'expo-router';
import React from 'react';
import { ScrollView, View } from 'react-native';

export default function HomeLayout() {

      const tabs = [
            { label: 'Today\'s Summary', path: '/home' },
            { label: 'Calendar', path: '/home/calendar' },
            { label: 'Insights', path: '/home/insights' },
            ];

  return (
        <View className="flex-1  bg-white">

      <TopTabNav tabs={tabs} />

      <ScrollView
        className="flex-1 px-5"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ minHeight: '100%', paddingBottom: 10}}
      >
        <Stack screenOptions={{
            headerShown: false,
            animation: 'none',
        }} />
      </ScrollView>
    </View>
  );
}
