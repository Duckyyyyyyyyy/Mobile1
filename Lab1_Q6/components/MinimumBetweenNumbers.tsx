import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';

const MinimumBetweenNumbers = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [num3, setNum3] = useState('');
  const [minValue, setMinValue] = useState<number | null>(null);

  const findMinimum = () => {

    const number1 = parseInt(num1, 10);
    const number2 = parseInt(num2, 10);
    const number3 = parseInt(num3, 10);

    if (isNaN(number1) || isNaN(number2) || isNaN(number3)) {
      Alert.alert('Error', 'Please enter valid numbers in all fields');
      return;
    }

    const minimum = Math.min(number1, number2, number3);
    setMinValue(minimum);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Find Minimum of Three Numbers</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter first number"
        keyboardType="numeric"
        value={num1}
        onChangeText={setNum1}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter second number"
        keyboardType="numeric"
        value={num2}
        onChangeText={setNum2}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter third number"
        keyboardType="numeric"
        value={num3}
        onChangeText={setNum3}
      />
      <Button title="Find Minimum" onPress={findMinimum} />
      {minValue !== null && (
        <Text style={styles.result}>Minimum Value: {minValue}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 15,
  },
  result: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default MinimumBetweenNumbers;
