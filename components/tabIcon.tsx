import React from 'react';
import { Text, View } from 'react-native';
import { SvgProps } from 'react-native-svg';

type TabIconProps = {
  Icon: React.FC<SvgProps>;
  focused: boolean;
  label: string;
};

export default function TabIcon({ Icon, focused, label }: TabIconProps) {
  return (
    <View style={{ alignItems: 'center' }}>
      <View

        style={{
          padding: 8,
          borderRadius: 12,
          backgroundColor: focused ? '#E0F0FF' : 'transparent',
        }}
      >
        <Icon width={24} height={24} fill={focused ? '#1A73E8' : '#808080'} />
      </View>
      <Text
        className={`mt-0.5 text-[10px] ${focused ? 'text-white' : 'text-gray-500'}`}
      >
        {label}
      </Text>
    </View>
  );
}
