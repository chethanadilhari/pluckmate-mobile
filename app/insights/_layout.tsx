import { Slot } from 'expo-router';
import { SafeAreaView } from 'react-native';

const InsightsLayout = () => {
  return (
    <SafeAreaView className="flex-1 bg-white">
      
      <Slot />

    
    </SafeAreaView>
  );
};

export default InsightsLayout;
