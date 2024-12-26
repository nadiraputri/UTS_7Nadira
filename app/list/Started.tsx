import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';

const LoginScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleNavigateToMenu = () => {
    console.log('Navigating to Menu');
    navigation.navigate('menu'); 
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/images/orang.png')}
        style={styles.logo}
      />

      <View style={styles.table}>
        <View style={styles.row}>
          <Text style={styles.label}>Email:</Text>
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
          />
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Password:</Text>
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
        </View>
      </View>

      <Link href="/list/menu" style={styles.link}>Login</Link>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  table: {
    width: '100%',
    marginBottom: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  label: {
    fontSize: 16,
    width: '30%',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    borderRadius: 5,
    width: '65%',
  },
  link: {
    fontSize: 18,
    color: '#FFFFFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#3A6BA2',
    borderRadius: 8,
  }
  
});

export default LoginScreen;
