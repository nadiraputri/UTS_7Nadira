import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button, FlatList } from 'react-native';

interface Absensi {
  id: string;
  tanggal: string;
  waktuMasuk: string;
  waktuKeluar: string;
  keterangan: string;
}

const AbsensiScreen: React.FC = () => {
  const [absensiList, setAbsensiList] = useState<Absensi[]>([]);
  const [tanggal, setTanggal] = useState('');
  const [waktuMasuk, setWaktuMasuk] = useState('');
  const [waktuKeluar, setWaktuKeluar] = useState('');
  const [keterangan, setKeterangan] = useState('');

  const handleAddAbsensi = () => {
    if (tanggal && waktuMasuk && waktuKeluar && keterangan) {
      const newAbsensi: Absensi = {
        id: Math.random().toString(),
        tanggal,
        waktuMasuk,
        waktuKeluar,
        keterangan,
      };
      setAbsensiList([...absensiList, newAbsensi]);
      setTanggal('');
      setWaktuMasuk('');
      setWaktuKeluar('');
      setKeterangan('');
    } else {
      alert('Mohon isi semua field!');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Halaman Absensi</Text>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Tanggal"
          value={tanggal}
          onChangeText={setTanggal}
          keyboardType="default"
        />
        <TextInput
          style={styles.input}
          placeholder="Waktu Masuk"
          value={waktuMasuk}
          onChangeText={setWaktuMasuk}
          keyboardType="default"
        />
        <TextInput
          style={styles.input}
          placeholder="Waktu Keluar"
          value={waktuKeluar}
          onChangeText={setWaktuKeluar}
          keyboardType="default"
        />
        <TextInput
          style={styles.input}
          placeholder="Keterangan"
          value={keterangan}
          onChangeText={setKeterangan}
        />
        <Button title="Tambah Absensi" onPress={handleAddAbsensi} color="#F0BB78" />
      </View>

      <FlatList
        data={absensiList}
        keyExtractor={(item) => item.id}
        style={styles.table}
        ListHeaderComponent={() => (
          <View style={styles.tableHeader}>
            <Text style={styles.tableHeaderText}>Tanggal</Text>
            <Text style={styles.tableHeaderText}>Waktu Masuk</Text>
            <Text style={styles.tableHeaderText}>Waktu Keluar</Text>
            <Text style={styles.tableHeaderText}>Keterangan</Text>
          </View>
        )}
        renderItem={({ item }) => (
          <View style={styles.tableRow}>
            <Text style={styles.tableCell}>{item.tanggal}</Text>
            <Text style={styles.tableCell}>{item.waktuMasuk}</Text>
            <Text style={styles.tableCell}>{item.waktuKeluar}</Text>
            <Text style={styles.tableCell}>{item.keterangan}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#FFE6A5', 
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
    color: '#000',
  },
  inputContainer: {
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 8,
    marginBottom: 10,
    color: '#000',
  },
  table: {
    marginTop: 10,
  },
  tableHeader: {
    flexDirection: 'row',
    backgroundColor: '#FADA7A', 
    padding: 10,
    borderRadius: 5,
  },
  tableHeaderText: {
    flex: 1,
    color: '#000',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  tableRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingVertical: 8,
  },
  tableCell: {
    flex: 1,
    textAlign: 'center',
    fontSize: 14,
    color: '#000',
  },
});

export default AbsensiScreen;
