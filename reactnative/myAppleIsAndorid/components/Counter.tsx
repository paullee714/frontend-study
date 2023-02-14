import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

function Counter({count, onIncrease, onDecrease}) {
  return (
    <View style={styles.wrapper}>
      <View style={styles.numberArea}>
        <Text style={styles.number}>{count}</Text>
      </View>
      <Button title="Increment" onPress={onIncrease} />
      <Button title="Decrement" onPress={onDecrease} />
    </View>
  );
}

Counter.defaultProps = {
  count: 0,
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  numberArea: {
    flex: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  number: {
    fontSize: 72,
    fontWeight: 'bold',
  },
});

export default Counter;
