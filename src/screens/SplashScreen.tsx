import React, { useEffect, useRef } from 'react';
import { View, Text, Image, StyleSheet, Animated } from 'react-native';


export default function SplashScreen({ navigation }) {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Start fade-in animation
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000, // 1 second
      useNativeDriver: true,
    }).start();

    // Navigate after delay
    const timeout = setTimeout(() => {
      navigation.replace('Home');
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <View style={styles.container}>
      <Animated.Image
        source={require('../../assets/logo.png')}
        style={[styles.logo, { opacity: fadeAnim }]}
      />
      <Animated.Text style={[styles.appName, { opacity: fadeAnim }]}>
        BeastHub
      </Animated.Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E1E1E',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
    resizeMode: 'contain',
  },
  appName: {
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold',
  },
});
