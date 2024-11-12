import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet } from 'react-native';

const LeaveTableInput = () => {
  const [employeeId, setEmployeeId] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [type, setType] = useState('');
  const [leaveData, setLeaveData] = useState([]);

  const addLeave = () => {
    const newLeave = {
      id: Math.random().toString(), // generate unique id
      employeeId,
      startTime,
      endTime,
      type,
    };

    setLeaveData([...leaveData, newLeave]);

    // Clear input fields
    setEmployeeId('');
    setStartTime('');
    setEndTime('');
    setType('');
  };

  const renderItem = ({ item }) => (
    <View style={styles.row}>
      <Text style={styles.cell}>{item.employeeId}</Text>
      <Text style={styles.cell}>{item.startTime}</Text>
      <Text style={styles.cell}>{item.endTime}</Text>
      <Text style={styles.cell}>{item.type}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Input Cuti Karyawan</Text>
      
      <TextInput
        style={styles.input}
        placeholder="ID Karyawan"
        value={employeeId}
        onChangeText={setEmployeeId}
      />
      <TextInput
        style={styles.input}
        placeholder="Mulai (HH:MM)"
        value={startTime}
        onChangeText={setStartTime}
      />
      <TextInput
        style={styles.input}
        placeholder="Selesai (HH:MM)"
        value={endTime}
        onChangeText={setEndTime}
      />
      <TextInput
        style={styles.input}
        placeholder="Jenis Cuti"
        value={type}
        onChangeText={setType}
      />
      
      <Button title="Tambah Cuti" onPress={addLeave} />

      <Text style={styles.subtitle}>Daftar Cuti</Text>
      <View style={styles.tableHeader}>
        <Text style={styles.headerCell}>ID Karyawan</Text>
        <Text style={styles.headerCell}>Mulai</Text>
        <Text style={styles.headerCell}>Selesai</Text>
        <Text style={styles.headerCell}>Jenis</Text>
      </View>

      <FlatList
        data={leaveData}
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
    color: '#fff', 
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 16,
    color: '#fff',
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

export default LeaveTableInput;
