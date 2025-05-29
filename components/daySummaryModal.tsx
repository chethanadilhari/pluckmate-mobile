import { AntDesign, FontAwesome, FontAwesome5, MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Modal from 'react-native-modal';

const summaryList = [
  {
    date: '2025-05-18',
    attendance: '10 Present / 2 Absent',
    tasks: '10 Assigned / 8 Completed',
    harvest: '108 kg',
    topWorker: 'Shantha Kumari (20 kg)',
  },
  {
    date: '2025-05-17',
    attendance: '8 Present / 4 Absent',
    tasks: '7 Assigned / 6 Completed',
    harvest: '90 kg',
    topWorker: 'M. Nimal (18 kg)',
  },
];

const DaySummaryModal = ({
  visible,
  date,
  onClose,
}: {
  visible: boolean;
  date: string;
  onClose: () => void;
}) => {
  const data = summaryList.find((item) => item.date === date);

  return (
    <Modal isVisible={visible} onBackdropPress={onClose}>
      <View className="bg-white rounded-2xl p-4">
        <View className="flex-row justify-between items-center mb-3">
          <View className="flex-row items-center">
            <FontAwesome name="calendar" size={18} color="#1F4D33" />
            <Text className="ml-2 text-[#1F4D33] font-bold text-lg">
              {new Date(date).toDateString()}
            </Text>
          </View>
          <TouchableOpacity onPress={onClose}>
            <AntDesign name="closecircle" size={24} color="#1F4D33" />
          </TouchableOpacity>
        </View>

        {data ? (
          <>
            <InfoRow icon={<MaterialIcons name="people" size={18} color="#1F4D33" />} label="Attendance" value={data.attendance} />
            <InfoRow icon={<FontAwesome5 name="tasks" size={16} color="#1F4D33" />} label="Tasks" value={data.tasks} />
            <InfoRow icon={<MaterialIcons name="eco" size={18} color="#1F4D33" />} label="Harvest" value={data.harvest} />
            <InfoRow icon={<FontAwesome name="trophy" size={18} color="#D97706" />} label="Top Worker" value={data.topWorker} />
          </>
        ) : (
          <Text className="text-center text-[#1F4D33]">No summary available for this day.</Text>
        )}
      </View>
    </Modal>
  );
};

const InfoRow = ({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) => (
  <View className="border border-[#B38A5C] rounded-xl p-3 mb-2 flex-row items-center">
    {icon}
    <Text className="ml-2 text-[#1F4D33]">
      <Text className="font-semibold">{label}:</Text> {value}
    </Text>
  </View>
);

export default DaySummaryModal;
