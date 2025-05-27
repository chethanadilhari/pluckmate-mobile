import { router, usePathname } from 'expo-router';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

interface Tab {
  label: string;
  path: string;
}

interface TopTabNavProps {
  tabs: Tab[];
}

const TopTabNav = ({ tabs } : TopTabNavProps) => {

  const pathname = usePathname();

  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-around', paddingVertical: 12,  marginHorizontal:4, backgroundColor: 'white' }}>
      {tabs.map((tab) => {
        const isActive = pathname === tab.path;
        return (
        <TouchableOpacity
          key={tab.path}
          onPress={() => router.push(tab.path as any)}
          style={{
            paddingHorizontal: 20,
            paddingVertical: 14,
            borderRadius: 15,
            backgroundColor: isActive ? '#1F4D33' : '#e5e7eb',
            marginHorizontal:1 ,
          }}
        >
          <Text style={{
            color: isActive ? '#fff' : '#1F4D33',
            fontWeight: '700',
          }}>
            {tab.label}
          </Text>
        </TouchableOpacity>
      )}
      )}
    </View>
  );
};

export default TopTabNav;
