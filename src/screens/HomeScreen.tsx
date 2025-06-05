import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.header}>
        <Text style={styles.title}>BeastHub</Text>
      </View>

      {/* Rest of your home screen UI */}
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Welcome to BeastHub Home!</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 60,
    paddingHorizontal: 15,
    justifyContent: 'center',
    backgroundColor: '#fff',
    borderBottomWidth: 0.5,
    borderBottomColor: '#ccc',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#519FBA', // Your blue highlight color
    fontFamily: '', // Ensure you have this font installed
  },
});
