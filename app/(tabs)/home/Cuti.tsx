import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button, FlatList } from 'react-native';

interface Cuti {
  id: string;
  mulai: string;
  selesai: string;
  jenisCuti: string;
}

const CutiScreen: React.FC = () => {
  const [cutiList, setCutiList] = useState<Cuti[]>([]);
  const [mulai, setMulai] = useState('');
  const [selesai, setSelesai] = useState('');
  const [jenisCuti, setJenisCuti] = useState('');

  const handleAddCuti = () => {
    if (mulai && selesai && jenisCuti) {
      const newCuti: Cuti = {
        id: Math.random().toString(), 
        mulai,
        selesai,
        jenisCuti,
      };
      setCutiList([...cutiList, newCuti]);
      setMulai('');
      setSelesai('');
      setJenisCuti('');
    } else {
      alert('Mohon isi semua field!');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Halaman Cuti</Text>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Jenis Cuti"
          value={jenisCuti}
          onChangeText={setJenisCuti}
        />
        <TextInput
          style={styles.input}
          placeholder="Mulai"
          value={mulai}
          onChangeText={setMulai}
          keyboardType="default"
        />
        <TextInput
          style={styles.input}
          placeholder="Selesai"
          value={selesai}
          onChangeText={setSelesai}
          keyboardType="default"
        />
        <Button title="Tambah Cuti" onPress={handleAddCuti} />
      </View>

      <FlatList
        data={cutiList}
        keyExtractor={(item) => item.id}
        style={styles.table}
        ListHeaderComponent={() => (
          <View style={styles.tableHeader}>
            <Text style={styles.tableHeaderText}>Mulai</Text>
            <Text style={styles.tableHeaderText}>Selesai</Text>
            <Text style={styles.tableHeaderText}>Jenis Cuti</Text>
          </View>
        )}
        renderItem={({ item }) => (
          <View style={styles.tableRow}>
            <Text style={styles.tableCell}>{item.mulai}</Text>
            <Text style={styles.tableCell}>{item.selesai}</Text>
            <Text style={styles.tableCell}>{item.jenisCuti}</Text>
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

export default CutiScreen;
