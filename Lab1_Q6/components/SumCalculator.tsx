import React, {useState} from 'react';
import {Alert, Button, StyleSheet, Text, TextInput, View} from 'react-native';

const SumCalculator = () => {
  const [number, setNumber] = useState('');
  const [value, setValue] = useState<number | null>(null);

  const calculateSum = () => {
    const num = parseInt(number);
    if (isNaN(num)) {
      Alert.alert('Error', 'Please enter a valid number');
      return;
    }

    const firstDigit = parseInt(number.charAt(0));
    const lastDigit = parseInt(number.charAt(number.length - 1));

    const sumTotal = firstDigit + lastDigit;
    setValue(sumTotal);
  };
  return (
    <View style={[styles.container, {marginTop: 100}]}>
      <Text style={styles.label}>Number</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter number"
        keyboardType="numeric"
        value={number}
        onChangeText={setNumber}
      />

      <Button title="Calculate Sum" onPress={calculateSum}></Button>
      {value !== null && <Text>Sum of first and last digit: {value}</Text>}
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

export default SumCalculator;
