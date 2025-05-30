import {
  Entypo,
  Feather,
  FontAwesome,
  FontAwesome5,
  Ionicons,
  MaterialIcons,
} from '@expo/vector-icons';
import { usePathname, useRouter } from 'expo-router';
import React from 'react';
import {
  Image,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

type ValidRoute =
  | '/home'
  | '/attendance'
  | '/tasks'
  | '/harvest'
  | '/home/insights'
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

type MenuItem = {
  icon: React.ReactNode;
  label: string;
  route: ValidRoute;
};

type Section = {
  title?: string;
  items: MenuItem[];
};

const CustomDrawer = ({ closeDrawer }: CustomDrawerProps) => {
  const router = useRouter();
  const pathname = usePathname();

  const handleNavigate = (route: ValidRoute) => {
    router.push(route as any);
    closeDrawer();
  };

  const sections: Section[] = [
    {
      items: [
        {
          icon: <FontAwesome name="home" size={24} color="#555252" />,
          label: 'Home',
          route: '/home',
        },
        {
          icon: <MaterialIcons name="people" size={28} color="#555252" />,
          label: 'Attendance',
          route: '/attendance',
        },
        {
          icon: <FontAwesome5 name="tasks" size={28} color="#555252" />,
          label: 'Tasks',
          route: '/tasks',
        },
        {
          icon: <MaterialIcons name="eco" size={28} color="#555252" />,
          label: 'Harvest',
          route: '/harvest',
        },
        {
          icon: <FontAwesome name="money" size={28} color="#555252" />,
          label: 'Payroll',
          route: '/payroll',
        },
        {
          icon: <FontAwesome5 name="chart-bar" size={28} color="#555252" />,
          label: 'Insights',
          route: '/home/insights',
        },
      ],
    },
    {
      title: 'Communication',
      items: [
        {
          icon: <FontAwesome name="user" size={28} color="#555252" padding="4"/>,
          label: 'Profile',
          route: '/profile',
        },
        {
          icon: <Ionicons name="notifications" size={28} color="#555252" />,
          label: 'Notifications',
          route: '/notifications',
        },
        {
          icon: <Entypo name="share" size={32} color="#555252" />,
          label: 'Share',
          route: '/share',
        },
        {
          icon: <Ionicons name="information-circle-outline" size={32} color="#555252" />,
          label: 'Info',
          route: '/info',
        },
      ],
    },
    {
      title: 'Settings',
      items: [
        {
          icon: <Ionicons name="settings" size={28} color="#555252" />,
          label: 'Settings',
          route: '/settings',
        },
        {
          icon: <Feather name="power" size={28} color="#555252" />,
          label: 'Logout',
          route: '/logout',
        },
      ],
    },
  ];

  return (
    <View style={{ flex: 1 }}>
      {/* Drawer Header */}
      <View
        style={{
          backgroundColor: '#1F4D33',
          width: '100%',
          padding: 27,
          borderTopRightRadius: 24,
        }}
      >
        <Image
          source={require('../assets/images/logo/logo.png')}
          style={{ width: 275, height: 170 }}
          resizeMode="contain"
        />
      </View>

      {/* Menu Sections */}
      <View style={{ flex: 1 }}>
        <View className="p-2 bg-white " style={{ flex: 1 }}>
          <ScrollView
            contentContainerStyle={{ paddingBottom: 24, marginBottom: 20 }}
            showsVerticalScrollIndicator={false}
          >
            {sections.map((section, sectionIndex) => (
              <View key={sectionIndex} className="mb-2 p-2">
                {section.title && (
                  <Text
                    style={{
                      fontSize: 16,
                      color: '#676666',
                      marginBottom: 6,
                    }}
                  >
                    {section.title}
                  </Text>
                )}

                {section.items.map((item, itemIndex) => {
                  const isActive = pathname === item.route;
                  return (
                    <TouchableOpacity
                      key={itemIndex}
                      onPress={() => handleNavigate(item.route)}
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        padding: 12,
                        borderRadius: 20,
                        marginBottom: 2,
                        gap: 12,
                        backgroundColor: isActive ? '#DBDCDF' : undefined,
                        borderWidth: isActive ? 1 : 0,
                        borderColor: isActive ? '#C0C0C0' : undefined,
                      }}
                      disabled={isActive}
                    >
                      {item.icon}
                      <Text
                        style={{
                          color: '#555252',
                          fontSize: 15,
                          fontWeight: '500',
                          fontFamily: 'inter-bold',
                        }}
                      >
                        {item.label}
                      </Text>
                    </TouchableOpacity>
                  );
                })}

                {sectionIndex < sections.length - 1 && (
                  <View
                    style={{
                      borderTopWidth: 2,
                      borderTopColor: '#D1D5DB',
                      marginTop: 16,
                      marginBottom: 8,
                    }}
                  />
                )}
              </View>
            ))}
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

export default CustomDrawer;
