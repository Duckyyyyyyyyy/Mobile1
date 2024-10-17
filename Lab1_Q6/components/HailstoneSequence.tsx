import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Alert,
  ScrollView,
} from 'react-native';

const HailstoneSequence = () => {
  const [inputNumber, setInputNumber] = useState('');
  const [sequence, setSequence] = useState<number[]>([]);

  const generateHailstoneSequence = () => {
    const n = parseInt(inputNumber, 10);

    if (isNaN(n) || n <= 0) {
      Alert.alert('Error', 'Please enter a positive integer greater than 0');
      return;
    }

    let current = n;
    const hailstoneSequence = [current];

    while (current !== 1) {
      if (current % 2 === 0) {
        current = current / 2;
      } else {
        current = current * 3 + 1;
      }
      hailstoneSequence.push(current);
    }

    setSequence(hailstoneSequence);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hailstone Sequence Generator</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter a positive number"
        keyboardType="numeric"
        value={inputNumber}
        onChangeText={setInputNumber}
      />
      <Button title="Generate Sequence" onPress={generateHailstoneSequence} />

      <ScrollView style={styles.sequenceContainer}>
        {sequence.length > 0 && (
          <Text style={styles.result}>
            Hailstone Sequence: {sequence.join(' -> ')}
          </Text>
        )}
      </ScrollView>
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
  sequenceContainer: {
    marginTop: 20,
  },
  result: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default HailstoneSequence;
