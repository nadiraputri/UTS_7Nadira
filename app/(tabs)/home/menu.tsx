import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 

const MenuScreen: React.FC<{ navigation: any }> = ({ navigation }) => {

  const handleNavigation = (screen: string) => {
    navigation.navigate(screen);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Menu</Text>

      <View style={styles.menuContainer}>
        <TouchableOpacity 
          style={styles.menuBox} 
          onPress={() => handleNavigation('Karyawan')}
        >
          <Ionicons name="person" size={32} color="white" />
          <Text style={styles.menuText}>Karyawan</Text>
        </TouchableOpacity>

        
        <TouchableOpacity 
          style={styles.menuBox} 
          onPress={() => handleNavigation('Absensi')}
        >
          <Ionicons name="clipboard" size={32} color="white" />
          <Text style={styles.menuText}>Absensi</Text>
        </TouchableOpacity>

       
        <TouchableOpacity 
          style={styles.menuBox} 
          onPress={() => handleNavigation('Lembur')}
        >
          <Ionicons name="alarm" size={32} color="white" />
          <Text style={styles.menuText}>Lembur</Text>
        </TouchableOpacity>

        
        <TouchableOpacity 
          style={styles.menuBox} 
          onPress={() => handleNavigation('Cuti')}
        >
          <Ionicons name="calendar" size={32} color="white" />
          <Text style={styles.menuText}>Cuti</Text>
        </TouchableOpacity>

        
        <TouchableOpacity 
          style={styles.menuBox} 
          onPress={() => handleNavigation('Proyek')}
        >
          <Ionicons name="briefcase" size={32} color="white" />
          <Text style={styles.menuText}>Proyek</Text>
        </TouchableOpacity>
      </View>
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
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  menuContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    width: '100%',
  },
  menuBox: {
    width: '40%',
    height: 120,
    backgroundColor: '#F0BB78', 
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    borderRadius: 10,
    elevation: 5, 
    borderColor: '#F0A35A', 
    borderWidth: 2, 
  },
  menuText: {
    marginTop: 10,
    color: 'black', 
    fontSize: 16,
  },
});

export default MenuScreen;
