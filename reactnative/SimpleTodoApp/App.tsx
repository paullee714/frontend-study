/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React from 'react';
import {StyleSheet} from 'react-native';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import DateHeadComponents from './components/DateHeadComponents';

const App = () => {
  const today = new Date();

  return (
    <SafeAreaProvider>
      <SafeAreaView edges={['bottom']}>
        <DateHeadComponents date={today} />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const style = StyleSheet.create({});

export default App;
