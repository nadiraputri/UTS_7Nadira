import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button, FlatList } from 'react-native';

interface Karyawan {
  id: string;
  nama: string;
  jabatan: string;
  alamat: string;
  keterangan: string;
}

const KaryawanScreen: React.FC = () => {
  const [karyawanList, setKaryawanList] = useState<Karyawan[]>([]);
  const [nama, setNama] = useState('');
  const [jabatan, setJabatan] = useState('');
  const [alamat, setAlamat] = useState('');
  const [keterangan, setKeterangan] = useState('');

  const handleAddKaryawan = () => {
    if (nama && jabatan && alamat && keterangan) {
      const newKaryawan: Karyawan = {
        id: Math.random().toString(), // Unique ID
        nama,
        jabatan,
        alamat,
        keterangan,
      };
      setKaryawanList([...karyawanList, newKaryawan]);
      setNama('');
      setJabatan('');
      setAlamat('');
      setKeterangan('');
    } else {
      alert('Mohon isi semua field!');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Halaman Karyawan</Text>

      {/* Input Fields */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Nama"
          value={nama}
          onChangeText={setNama}
        />
        <TextInput
          style={styles.input}
          placeholder="Jabatan"
          value={jabatan}
          onChangeText={setJabatan}
        />
        <TextInput
          style={styles.input}
          placeholder="Alamat"
          value={alamat}
          onChangeText={setAlamat}
        />
        <TextInput
          style={styles.input}
          placeholder="Keterangan"
          value={keterangan}
          onChangeText={setKeterangan}
        />
        <Button title="Tambah Karyawan" onPress={handleAddKaryawan} />
      </View>

      {/* Tabel Data Karyawan */}
      <FlatList
        data={karyawanList}
        keyExtractor={(item) => item.id}
        style={styles.table}
        ListHeaderComponent={() => (
          <View style={styles.tableHeader}>
            <Text style={styles.tableHeaderText}>Nama</Text>
            <Text style={styles.tableHeaderText}>Jabatan</Text>
            <Text style={styles.tableHeaderText}>Alamat</Text>
            <Text style={styles.tableHeaderText}>Keterangan</Text>
          </View>
        )}
        renderItem={({ item }) => (
          <View style={styles.tableRow}>
            <Text style={styles.tableCell}>{item.nama}</Text>
            <Text style={styles.tableCell}>{item.jabatan}</Text>
            <Text style={styles.tableCell}>{item.alamat}</Text>
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
    backgroundColor: '#f8f9fa',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
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
  },
  table: {
    marginTop: 10,
  },
  tableHeader: {
    flexDirection: 'row',
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
  },
  tableHeaderText: {
    flex: 1,
    color: '#fff',
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
  },
});

export default KaryawanScreen;
