import React from 'react';
import { View } from 'react-native';
import CustomButton from '../components/CustomButton';

const TestScreen = () => {
  return (
    <View>
      <CustomButton title="Hello" onPress={() => console.log('test')} />
    </View>
  );
};

export default TestScreen;