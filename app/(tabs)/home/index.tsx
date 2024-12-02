import React from 'react';
import { Text, View } from 'react-native';
import { Link } from 'expo-router';

const HomeScreen: React.FC = () => {
  return (
    <View>
      
      <Link href="/list/Started">Get Started</Link>
    </View>
  );
};

export default HomeScreen;