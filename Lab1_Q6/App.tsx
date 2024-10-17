/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import EmployeeInformation from './components/EmployeeInformation';
import SumCalculator from './components/SumCalculator';
import {ScrollView, View} from 'react-native';
import MinimumBetweenNumbers from './components/MinimumBetweenNumbers';
import HailstoneSequence from './components/HailstoneSequence';

const App = () => {
  const employeeData = {
    fullName: 'Tran Hai Viet',
    age: '23',
    occupation: 'Software Engineering',
    specialization: 'Front-end',
  };
  return (
    <ScrollView style={{flex: 1}}>
      <View style={{padding: 20}}>
        <EmployeeInformation data={employeeData} />

        <SumCalculator />

        <MinimumBetweenNumbers />

        <HailstoneSequence />
      </View>
    </ScrollView>
  );
};

export default App;
