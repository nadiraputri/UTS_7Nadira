// app/(tabs)/home/MenuScreen.tsx
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Menggunakan ikon dari Ionicons

const MenuScreen: React.FC<{ navigation: any }> = ({ navigation }) => {

  const handleNavigation = (screen: string) => {
    navigation.navigate(screen);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Menu</Text>

      <View style={styles.menuContainer}>
        {/* Kotak menu Karyawan */}
        <TouchableOpacity 
          style={styles.menuBox} 
          onPress={() => handleNavigation('Karyawan')}
        >
          <Ionicons name="person" size={32} color="white" />
          <Text style={styles.menuText}>Karyawan</Text>
        </TouchableOpacity>

        {/* Kotak menu Absensi */}
        <TouchableOpacity 
          style={styles.menuBox} 
          onPress={() => handleNavigation('Absensi')}
        >
          <Ionicons name="clipboard" size={32} color="white" />
          <Text style={styles.menuText}>Absensi</Text>
        </TouchableOpacity>

        {/* Kotak menu Lembur */}
        <TouchableOpacity 
          style={styles.menuBox} 
          onPress={() => handleNavigation('Lembur')}
        >
          <Ionicons name="alarm" size={32} color="white" />
          <Text style={styles.menuText}>Lembur</Text>
        </TouchableOpacity>

        {/* Kotak menu Cuti */}
        <TouchableOpacity 
          style={styles.menuBox} 
          onPress={() => handleNavigation('Cuti')}
        >
          <Ionicons name="calendar" size={32} color="white" />
          <Text style={styles.menuText}>Cuti</Text>
        </TouchableOpacity>

        {/* Kotak menu Proyek */}
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
    backgroundColor: '#F0BB78', // Mengganti warna latar belakang dengan #F0BB78
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    borderRadius: 10,
    elevation: 5, // Memberikan bayangan di kotak
    borderColor: '#F0A35A', // Menggunakan warna border sedikit lebih gelap
    borderWidth: 2, // Garis tepi kotak
  },
  menuText: {
    marginTop: 10,
    color: 'black', // Teks hitam agar kontras dengan latar belakang krem
    fontSize: 16,
  },
});

export default MenuScreen;
