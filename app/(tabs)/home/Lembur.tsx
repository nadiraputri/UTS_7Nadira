import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TextInput, Button } from 'react-native';

type LemburData = {
  idKaryawan: string;
  tanggal: string;
  mulai: string;
  selesai: string;
  jumlah: string;
};

const TabelLembur: React.FC = () => {
  const [dataLembur, setDataLembur] = useState<LemburData[]>([
    { idKaryawan: '001', tanggal: '2024-11-12', mulai: '18:00', selesai: '21:00', jumlah: '3 jam' },
  ]);

  const [inputData, setInputData] = useState<LemburData>({
    idKaryawan: '',
    tanggal: '',
    mulai: '',
    selesai: '',
    jumlah: '',
  });

  const handleInputChange = (name: keyof LemburData, value: string) => {
    setInputData({ ...inputData, [name]: value });
  };

  const handleAddData = () => {
    setDataLembur([...dataLembur, inputData]);
    setInputData({ idKaryawan: '', tanggal: '', mulai: '', selesai: '', jumlah: '' });
  };

  const renderItem = ({ item }: { item: LemburData }) => (
    <View style={styles.row}>
      <Text style={styles.cell}>{item.idKaryawan}</Text>
      <Text style={styles.cell}>{item.tanggal}</Text>
      <Text style={styles.cell}>{item.mulai}</Text>
      <Text style={styles.cell}>{item.selesai}</Text>
      <Text style={styles.cell}>{item.jumlah}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tabel Lembur</Text>
      
      <Text style={styles.subtitle}>Tambah Data Lembur</Text>
      <View style={styles.inputRow}>
        <TextInput
          style={styles.input}
          placeholder="ID Karyawan"
          value={inputData.idKaryawan}
          onChangeText={(text) => handleInputChange('idKaryawan', text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Tanggal"
          value={inputData.tanggal}
          onChangeText={(text) => handleInputChange('tanggal', text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Mulai"
          value={inputData.mulai}
          onChangeText={(text) => handleInputChange('mulai', text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Selesai"
          value={inputData.selesai}
          onChangeText={(text) => handleInputChange('selesai', text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Jumlah"
          value={inputData.jumlah}
          onChangeText={(text) => handleInputChange('jumlah', text)}
        />
      </View>
      <Button title="Tambah Data" onPress={handleAddData} />

      <View style={styles.header}>
        <Text style={styles.headerCell}>ID Karyawan</Text>
        <Text style={styles.headerCell}>Tanggal</Text>
        <Text style={styles.headerCell}>Mulai</Text>
        <Text style={styles.headerCell}>Selesai</Text>
        <Text style={styles.headerCell}>Jumlah</Text>
      </View>
      <FlatList
        data={dataLembur}
        renderItem={renderItem}
        keyExtractor={(item) => item.idKaryawan}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#ADD8E6', 
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  header: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#000',
    paddingBottom: 8,
    marginBottom: 8,
    marginTop: 16,
  },
  headerCell: {
    flex: 1,
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
  },
  row: {
    flexDirection: 'row',
    paddingVertical: 8,
  },
  cell: {
    flex: 1,
    fontSize: 14,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    textAlign: 'center',
  },
  inputRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  input: {
    backgroundColor: '#fff',
    padding: 8,
    borderRadius: 5,
    borderColor: '#ddd',
    borderWidth: 1,
    flexBasis: '48%',
    marginBottom: 10,
    fontSize: 14,
  },
});

export default TabelLembur;
