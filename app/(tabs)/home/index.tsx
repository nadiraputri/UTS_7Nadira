import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Link } from 'expo-router';

const HomeScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Link href="/list/Started" style={styles.link}>
        Get Started
      </Link>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center', 
    backgroundColor: '#f5f5f5', 
  },
  link: {
    fontSize: 20, 
    color: '#007AFF', 
    textDecorationLine: 'underline', 
  },
});

export default HomeScreen;
