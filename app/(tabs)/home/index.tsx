import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { Link } from 'expo-router';

const HomeScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../../assets/images/office.png')} 
        style={styles.logo}
      />
      <Text style={styles.title}>Welcome to Office</Text>
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
    padding: 20,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  link: {
    fontSize: 20,
    color: '#007AFF',
    textDecorationLine: 'underline',
  },
});

export default HomeScreen;
