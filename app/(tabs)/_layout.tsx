import { Asset } from 'expo-asset';
import { Tabs, usePathname } from 'expo-router';
import React, { useEffect } from 'react';
import { Image, Text, View } from 'react-native';
import AttendanceIcon from '../../assets/icons/attendance.svg';
import HarvestIcon from '../../assets/icons/harvest.svg';
import HomeIcon from '../../assets/icons/home.svg';
import payrollIcon from '../../assets/icons/payroll.svg';
import TasksIcon from '../../assets/icons/tasks.svg';

const headerImages = [
  require('../../assets/headers/home.jpeg'),
  require('../../assets/headers/attendance.jpg'),
  require('../../assets/headers/task.jpg'),
  require('../../assets/headers/harvest.jpg'),
  require('../../assets/headers/payroll.jpg'),
];

useEffect(() => {
  const preloadImages = async () => {
    await Asset.loadAsync(headerImages);
  };
  preloadImages();
}, []);

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

// 🔁 Dynamic image based on path
const getHeaderImage = (pathname: string) => {
  if (pathname.includes('/attendance')) {
    return require('../../assets/headers/attendance.jpg');
  }
  if (pathname.includes('/tasks')) {
    return require('../../assets/headers/task.jpg');
  }
  if (pathname.includes('/harvest')) {
    return require('../../assets/headers/harvest.jpg');
  }
  if (pathname.includes('/payroll')) {
    return require('../../assets/headers/payroll.jpg');
  }
  return require('../../assets/headers/home.jpeg'); // default
};

const _layout = () => {
      const pathname = usePathname();
  const headerImage = getHeaderImage(pathname);

    return (
    <View className="flex-1 bg-white">
              <Image
        source={headerImage}
        className="absolute w-full z-0 h-64 rounded-b-3xl"
        resizeMode="cover"
      />
      <Image
        source={require('../../assets/images/logo/logo.png')}
        className="w-48 h-52 mt-10 mb-2 mx-auto"
        style={{ tintColor: '#FFFFFF' }}
      />
        <Tabs
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: {
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    elevation: 0,
                    backgroundColor: '#1F4D33',
                    borderTopWidth: 0,
                    height: 80,
                    borderTopLeftRadius: 30,
                    borderTopRightRadius: 30,
                    borderBottomLeftRadius: 0,
                    borderBottomRightRadius: 0,
                },
            }}
        >
            <Tabs.Screen
                name="home"
                options={{
                    title: 'Home',
                    tabBarIcon: ({ focused }) => (
                        <TabIcon Icon={HomeIcon} focused={focused} label="Home" />
                    ),
                }}
            />
            <Tabs.Screen
                name="attendance"
                options={{
                    title: 'Attendance',
                    tabBarIcon: ({ focused }) => (
                        <TabIcon Icon={AttendanceIcon} focused={focused} label="Attendance" />
                    ),
                }}
            />
            <Tabs.Screen
                name="tasks"
                options={{
                    title: 'Tasks',
                    tabBarIcon: ({ focused }) => (
                        <TabIcon Icon={TasksIcon} focused={focused} label="Tasks" />
                    ),
                }}
            />
            <Tabs.Screen
                name="harvest"
                options={{
                    title: 'Harvest',
                    tabBarIcon: ({ focused }) => (
                        <TabIcon Icon={HarvestIcon} focused={focused} label="Harvest" />
                    ),
                }}
            />
            <Tabs.Screen
                name="payroll"
                options={{
                    title: 'Payroll',
                    tabBarIcon: ({ focused }) => (
                        <TabIcon Icon={payrollIcon} focused={focused} label="Payroll" />
                    ),
                }}
            />
        </Tabs>
    </View>
    )
}

export default _layout