import React from 'react';
import data from '@/data.js';
import styles from '@/styles';
import { ScrollView } from 'react-native';
import Square from '@/Square';

const App = ()=>{
  return(
    <ScrollView style={styles.container}>
      {data.map((item, index) => (
        <Square key={item} text={`Square ${index+1}`} />
      ))}
    </ScrollView>
  );
}

export default App;