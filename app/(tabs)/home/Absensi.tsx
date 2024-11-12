import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet } from 'react-native';

const AbsensiTableInput = () => {
  const [employeeId, setEmployeeId] = useState('');
  const [date, setDate] = useState('');
  const [entryTime, setEntryTime] = useState('');
  const [exitTime, setExitTime] = useState('');
  const [remarks, setRemarks] = useState('');
  const [attendanceData, setAttendanceData] = useState<any[]>([]);

  const addAttendance = () => {
    const newAttendance = {
      id: Math.random().toString(), // generate unique id
      employeeId,
      date,
      entryTime,
      exitTime,
      remarks,
    };

    setAttendanceData([...attendanceData, newAttendance]);

    // Clear input fields
    setEmployeeId('');
    setDate('');
    setEntryTime('');
    setExitTime('');
    setRemarks('');
  };

  const renderItem = ({ item }: any) => (
    <View style={styles.row}>
      <Text style={styles.cell}>{item.employeeId}</Text>
      <Text style={styles.cell}>{item.date}</Text>
      <Text style={styles.cell}>{item.entryTime}</Text>
      <Text style={styles.cell}>{item.exitTime}</Text>
      <Text style={styles.cell}>{item.remarks}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Input Absensi Karyawan</Text>
      
      <TextInput
        style={styles.input}
        placeholder="ID Karyawan"
        value={employeeId}
        onChangeText={setEmployeeId}
      />
      <TextInput
        style={styles.input}
        placeholder="Tanggal (YYYY-MM-DD)"
        value={date}
        onChangeText={setDate}
      />
      <TextInput
        style={styles.input}
        placeholder="Waktu Masuk (HH:MM)"
        value={entryTime}
        onChangeText={setEntryTime}
      />
      <TextInput
        style={styles.input}
        placeholder="Waktu Keluar (HH:MM)"
        value={exitTime}
        onChangeText={setExitTime}
      />
      <TextInput
        style={styles.input}
        placeholder="Keterangan"
        value={remarks}
        onChangeText={setRemarks}
      />
      
      <Button title="Tambah Absensi" onPress={addAttendance} />

      <Text style={styles.subtitle}>Daftar Absensi</Text>
      <View style={styles.tableHeader}>
        <Text style={styles.headerCell}>ID Karyawan</Text>
        <Text style={styles.headerCell}>Tanggal</Text>
        <Text style={styles.headerCell}>Masuk</Text>
        <Text style={styles.headerCell}>Keluar</Text>
        <Text style={styles.headerCell}>Keterangan</Text>
      </View>

      <FlatList
        data={attendanceData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#87CEEB', 
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#000000', 
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 16,
    color: '#000000',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
    backgroundColor: '#fff', 
  },
  tableHeader: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#000',
    paddingBottom: 8,
    marginBottom: 8,
  },
  headerCell: {
    flex: 1,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#fff',
  },
  row: {
    flexDirection: 'row',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  cell: {
    flex: 1,
    textAlign: 'center',
    color: '#fff',
  },
});

export default AbsensiTableInput;
