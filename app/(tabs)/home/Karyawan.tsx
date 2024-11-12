import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';


type Employee = {
  nik: string;
  id: string;
  nama: string;
  jabatan: string;
  alamat: string;
  keterangan: string;
};

const EmployeeTable: React.FC = () => {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [employee, setEmployee] = useState<Employee>({
    nik: '',
    id: '',
    nama: '',
    jabatan: '',
    alamat: '',
    keterangan: '',
  });

  const handleInputChange = (field: keyof Employee, value: string) => {
    setEmployee({ ...employee, [field]: value });
  };

  const addEmployee = () => {
    setEmployees([...employees, employee]);
    setEmployee({
      nik: '',
      id: '',
      nama: '',
      jabatan: '',
      alamat: '',
      keterangan: '',
    });
  };

  const renderItem = ({ item }: { item: Employee }) => (
    <View style={styles.row}>
      <Ionicons name="person-circle-outline" size={24} color="black" style={styles.icon} />
      <Text style={styles.cell}>{item.nik}</Text>
      <Text style={styles.cell}>{item.id}</Text>
      <Text style={styles.cell}>{item.nama}</Text>
      <Text style={styles.cell}>{item.jabatan}</Text>
      <Text style={styles.cell}>{item.alamat}</Text>
      <Text style={styles.cell}>{item.keterangan}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Form Input Karyawan</Text>
      <TextInput
        style={styles.input}
        placeholder="NIK"
        value={employee.nik}
        onChangeText={(text) => handleInputChange('nik', text)}
      />
      <TextInput
        style={styles.input}
        placeholder="ID Karyawan"
        value={employee.id}
        onChangeText={(text) => handleInputChange('id', text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Nama Karyawan"
        value={employee.nama}
        onChangeText={(text) => handleInputChange('nama', text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Jabatan"
        value={employee.jabatan}
        onChangeText={(text) => handleInputChange('jabatan', text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Alamat"
        value={employee.alamat}
        onChangeText={(text) => handleInputChange('alamat', text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Keterangan"
        value={employee.keterangan}
        onChangeText={(text) => handleInputChange('keterangan', text)}
      />
      <Button title="Tambahkan Karyawan" onPress={addEmployee} />

      <View style={styles.tableContainer}>
        <Text style={styles.title}>Tabel Karyawan</Text>
        <View style={styles.headerRow}>
          <Text style={styles.headerCell}></Text>
          <Text style={styles.headerCell}>NIK</Text>
          <Text style={styles.headerCell}>ID</Text>
          <Text style={styles.headerCell}>Nama</Text>
          <Text style={styles.headerCell}>Jabatan</Text>
          <Text style={styles.headerCell}>Alamat</Text>
          <Text style={styles.headerCell}>Keterangan</Text>
        </View>
        <FlatList
          data={employees}
          renderItem={renderItem}
          keyExtractor={(item) => item.nik}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#87CEEB', 
  },
  tableContainer: {
    backgroundColor: '#fff', 
    padding: 10,
    borderRadius: 10,
    marginTop: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
  },
  input: {
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 8,
    borderRadius: 5,
    backgroundColor: '#fff',
  },
  headerRow: {
    flexDirection: 'row',
    backgroundColor: '#ddd',
    paddingVertical: 8,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    paddingVertical: 8,
  },
  headerCell: {
    flex: 1,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  cell: {
    flex: 1,
    textAlign: 'center',
  },
  icon: {
    marginRight: 5,
  },
});

export default EmployeeTable;
