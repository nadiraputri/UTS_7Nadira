import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, FlatList } from 'react-native';

type OvertimeData = {
  id: string;
  project: string;
  location: string;
  start: string;
  deadline: string;
};

const Proyek: React.FC = () => {
  const [overtimeData, setOvertimeData] = useState<OvertimeData[]>([]);
  const [project, setProject] = useState('');
  const [location, setLocation] = useState('');
  const [start, setStart] = useState('');
  const [deadline, setDeadline] = useState('');

  const addOvertimeData = () => {
    const newData: OvertimeData = {
      id: Math.random().toString(),
      project,
      location,
      start,
      deadline,
    };
    setOvertimeData([...overtimeData, newData]);
    setProject('');
    setLocation('');
    setStart('');
    setDeadline('');
  };

  const renderItem = ({ item }: { item: OvertimeData }) => (
    <View style={styles.row}>
      <Text style={styles.cell}>{item.project}</Text>
      <Text style={styles.cell}>{item.location}</Text>
      <Text style={styles.cell}>{item.start}</Text>
      <Text style={styles.cell}>{item.deadline}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Tabel Proyek</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Proyek"
        placeholderTextColor="#ccc"
        value={project}
        onChangeText={setProject}
      />
      <TextInput
        style={styles.input}
        placeholder="Lokasi"
        placeholderTextColor="#ccc"
        value={location}
        onChangeText={setLocation}
      />
      <TextInput
        style={styles.input}
        placeholder="Start (HH:MM)"
        placeholderTextColor="#ccc"
        value={start}
        onChangeText={setStart}
      />
      <TextInput
        style={styles.input}
        placeholder="Deadline (YYYY-MM-DD)"
        placeholderTextColor="#ccc"
        value={deadline}
        onChangeText={setDeadline}
      />
      <Button title="Tambah Lembur" onPress={addOvertimeData} color="#F0BB78" />

      <View style={styles.table}>
        <View style={styles.row}>
          <Text style={styles.headerCell}>Proyek</Text>
          <Text style={styles.headerCell}>Lokasi</Text>
          <Text style={styles.headerCell}>Start</Text>
          <Text style={styles.headerCell}>Deadline</Text>
        </View>
        <FlatList
          data={overtimeData}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FFE6A5', 
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#000000', 
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    backgroundColor: '#fff', 
  },
  table: {
    marginTop: 20,
    borderWidth: 1,
    borderColor: '#000',
  },
  row: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  headerCell: {
    flex: 1,
    padding: 10,
    fontWeight: 'bold',
    backgroundColor: '#FADA7A', 
  },
  cell: {
    flex: 1,
    padding: 10,
    textAlign: 'center',
    color: '#000',
  },
});

export default Proyek;
