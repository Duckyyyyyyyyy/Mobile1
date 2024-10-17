import React from 'react';
import {View, Text, TextInput, Button, Alert, StyleSheet} from 'react-native';
import EmployeeData from '../type/Type';

interface EmployeeInformationProps {
  data:EmployeeData
}

const EmployeeInformation: React.FC<EmployeeInformationProps>=({data}) => {


  const handleUpdate = () => {
    // You can add validation and update logic here
    Alert.alert('Success', 'Employee information updated successfully!');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Full Name</Text>
      <TextInput
        style={styles.input}
        value={data.fullName}
      />

      <Text style={styles.label}>Age</Text>
      <TextInput
        style={styles.input}
        value={data.age}
        placeholder="Enter age"
        keyboardType="numeric"
      />

      <Text style={styles.label}>Occupation</Text>
      <TextInput
        style={styles.input}
        value={data.occupation}
        placeholder="Enter occupation"
      />

      <Text style={styles.label}>Specialization in Training</Text>
      <TextInput
        style={styles.input}
        value={data.specialization}
        placeholder="Enter specialization"
      />

      <Button title="Update" onPress={handleUpdate} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 15,
  },
});

export default EmployeeInformation;
