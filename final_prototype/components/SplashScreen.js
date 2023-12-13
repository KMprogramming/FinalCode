import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    const splashTimeout = setTimeout(() => {
      navigation.replace('Home'); // Replace SplashScreen with MainScreen after the delay
    }, 2000); // Change the delay time as needed

    return () => clearTimeout(splashTimeout);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/Loggo.png')} // Path to your logo image
        style={styles.logo}
        resizeMode="contain" // Adjust the image display mode as per your requirement
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  logo: {
    width: 400, // Set your desired width
    height: 400, // Set your desired height
  },
});

export default SplashScreen;