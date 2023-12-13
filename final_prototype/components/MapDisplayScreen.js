import React from 'react';
import { View, Text } from 'react-native';
import Constants from 'expo-constants';

const MapDisplayScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Map Display Screen</Text>
      <Text>{Constants.deviceName}</Text>
    </View>
  );
};

export default MapDisplayScreen;
