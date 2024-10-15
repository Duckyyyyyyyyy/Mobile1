/* eslint-disable react/self-closing-comp */
import React from 'react';
import styles from './styles';
import {Alert, View, Text, Button} from 'react-native';

function ClickOnTheSquare(value: string) {
  Alert.alert(value);
}

interface SquareProps {
  text: string;
}

const Square: React.FC<SquareProps> = ({text}) => {
  return (
    <View style={[styles.box, {backgroundColor: '#7ce09f'}]}>
      <Text>{text}</Text>
      <Button
        title="Click on the square"
        onPress={() => ClickOnTheSquare(text)}
      />
    </View>
  );
};

export default Square;
