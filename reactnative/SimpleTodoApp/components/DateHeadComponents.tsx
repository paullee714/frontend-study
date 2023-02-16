import React from 'react';
import {View, Text, StyleSheet, StatusBar} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

function DateHeadComponents({date}) {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  const {top} = useSafeAreaInsets();

  return (
    <>
      <View style={[style.statuisBarPlaceholder, {height: top}]} />
      <StatusBar backgroundColor="#26a69a" barStyle={'light-content'} />
      <View style={style.block}>
        <Text style={style.dateText}>
          {year}년 {month}월 {day}일
        </Text>
      </View>
    </>
  );
}

const style = StyleSheet.create({
  statuisBarPlaceholder: {
    backgroundColor: '#26a69a',
  },
  block: {
    padding: 16,
    backgroundColor: '#26a69a',
  },
  dateText: {
    fontSize: 24,
    color: 'white',
  },
});

export default DateHeadComponents;
