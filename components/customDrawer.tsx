import {
  Entypo,
  Feather,
  FontAwesome,
  FontAwesome5,
  Ionicons,
  MaterialIcons,
} from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import {
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

type ValidRoute =
  | '/home'
  | '/attendance'
  | '/tasks'
  | '/harvest'
  | '/payroll'
  | '/analytics'
  | '/profile'
  | '/notifications'
  | '/settings'
  | '/info'
  | '/share'
  | '/logout';

type CustomDrawerProps = {
  closeDrawer: () => void;
};

type MenuItemProps = {
  icon: React.ReactNode;
  label: string;
  route: ValidRoute;
  closeDrawer: () => void;
};

const MenuItem = ({ icon, label, route, closeDrawer }: MenuItemProps) => {
  const router = useRouter();

  const handlePress = () => {
    router.push(route as any);
    closeDrawer();
  };

  return (
    <TouchableOpacity
      onPress={handlePress}
      className="flex-row items-center space-x-3 p-3 rounded-lg"
    >
      {icon}
      <Text className="text-[#1F4D33] text-xl font-inter font-medium">{label}</Text>
    </TouchableOpacity>
  );
};

const CustomDrawer = ({ closeDrawer }: CustomDrawerProps) => {
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      {/* Header */}
      <View className="bg-[#1F4D33] w-full h-auto p-4 rounded-br-3xl">
        <Image
          source={require('../assets/images/logo/logo.png')}
          style={{ width: 275, height: 170 }}
          resizeMode="contain"
        />
      </View>

      <View className="p-6">
        <MenuItem icon={<FontAwesome name="home" size={20} color="#1F4D33" />} label="Home" route="/home" closeDrawer={closeDrawer} />
        <MenuItem icon={<MaterialIcons name="people" size={20} color="#1F4D33" />} label="Attendance" route="/attendance" closeDrawer={closeDrawer} />
        <MenuItem icon={<FontAwesome5 name="tasks" size={18} color="#1F4D33" />} label="Tasks" route="/tasks" closeDrawer={closeDrawer} />
        <MenuItem icon={<MaterialIcons name="eco" size={20} color="#1F4D33" />} label="Harvest" route="/harvest" closeDrawer={closeDrawer} />
        <MenuItem icon={<FontAwesome name="money" size={18} color="#1F4D33" />} label="Payroll" route="/payroll" closeDrawer={closeDrawer} />
        <MenuItem icon={<FontAwesome5 name="chart-bar" size={18} color="#1F4D33" />} label="Analytics" route="/analytics" closeDrawer={closeDrawer} />

        <View className="border-t border-gray-300 my-4" />
        <Text className="text-xs text-gray-500 mb-2">Communication</Text>

        <MenuItem icon={<FontAwesome name="user" size={18} color="#1F4D33" />} label="Profile" route="/profile" closeDrawer={closeDrawer} />
        <MenuItem icon={<Ionicons name="notifications" size={20} color="#1F4D33" />} label="Notifications" route="/notifications" closeDrawer={closeDrawer} />
        <MenuItem icon={<Entypo name="share" size={18} color="#1F4D33" />} label="Share" route="/share" closeDrawer={closeDrawer} />
        <MenuItem icon={<Ionicons name="information-circle-outline" size={20} color="#1F4D33" />} label="Info" route="/info" closeDrawer={closeDrawer} />

        <View className="border-t border-gray-300 my-4" />
        <Text className="text-xs text-gray-500 mb-2">Settings</Text>

        <MenuItem icon={<Ionicons name="settings" size={20} color="#1F4D33" />} label="Settings" route="/settings" closeDrawer={closeDrawer} />
        <MenuItem icon={<Feather name="power" size={20} color="#1F4D33" />} label="Logout" route="/logout" closeDrawer={closeDrawer} />
      </View>
    </ScrollView>
  );
};

export default CustomDrawer;
