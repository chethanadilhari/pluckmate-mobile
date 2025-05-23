import { Tabs } from 'expo-router';
import React from 'react';
import { Text, View } from 'react-native';
import AttendanceIcon from '../../assets/icons/attendance.svg';
import HarvestIcon from '../../assets/icons/harvest.svg';
import HomeIcon from '../../assets/icons/home.svg';
import payrollIcon from '../../assets/icons/payroll.svg';
import TasksIcon from '../../assets/icons/tasks.svg';
// import TabIcon from '../../components/tabIcon';

function TabIcon({ Icon, focused, label }: any) {
      return (
        <View style={{ alignItems: 'center', marginTop: 20, width: 70 }}>
          <View
            style={{
              padding: 8,
              borderRadius: 12,
              marginTop: 5,  
              backgroundColor: focused ? '#ffffff' : 'transparent',
            }}
          >
            <Icon width={24} height={24} fill={focused ? '#1F4D33' : '#ffffff'} />
          </View>
          <Text
            className={`mt-1 text-[12px] text-white`}
          >
            {label}
          </Text>
        </View>
      );
}


const _layout = () => {
    return (
        <Tabs
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: {
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    elevation:0 ,
                    backgroundColor: '#1F4D33',
                    borderTopWidth: 0,
                    height: 90,
                    borderRadius: 30,
                },
                
        
            }} >
            <Tabs.Screen
                name="index"
                options={{
                    title: 'Home',
                    tabBarIcon: ({ focused }) => (
                        <TabIcon Icon={HomeIcon} focused={focused} label="Home" />
                    ),

                }} />

            <Tabs.Screen
                name="attendance"
                options={{
                    title: 'Attendance',
                    tabBarIcon: ({ focused }) => (
                        <TabIcon Icon={AttendanceIcon} focused={focused} label="Attendance" />
                    ),

                }} />

            <Tabs.Screen
                name="tasks"
                options={{
                    title: 'Tasks',
                    tabBarIcon: ({ focused }) => (
                        <TabIcon Icon={TasksIcon} focused={focused} label="Tasks" />
                    ),

                }} />
            <Tabs.Screen
                name="harvest"
                options={{
                    title: 'Harvest',
                    tabBarIcon: ({ focused }) => (
                        <TabIcon Icon={HarvestIcon} focused={focused} label="Harvest" />
                    ),

                }} />
            <Tabs.Screen
                name="payroll"
                options={{
                    title: 'Payroll',
                    tabBarIcon: ({ focused }) => (
                        <TabIcon Icon={payrollIcon} focused={focused} label="Payroll" />
                    ),

                }} />
        </Tabs>
    )
}

export default _layout