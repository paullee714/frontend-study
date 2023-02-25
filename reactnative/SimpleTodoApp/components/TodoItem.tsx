import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

function TodoItem({id, text, done}) {
  return (
    <View style={styles.item}>
      <View style={[styles.circle, done && styles.filled]} />
      <Text style={[styles.text, done && styles.lineThrough]}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    padding: 16,
    alignItems: 'center',
  },
  circle: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderColor: '#26a69a',
    borderWidth: 1,
    marginRight: 16,
  },
  text: {
    flex: 1,
    fontSize: 16,
    color: '#212121',
  },
  filled: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#26a69a',
  },
  lineThrough: {
    textDecorationLine: 'line-through',
    color: '#9e9e9e',
  },
});

export default TodoItem;
