import React from 'react';
import {View, StyleSheet} from 'react-native';

function Box({rounded, size, color}) {
  return (
    <View
      style={[
        boxStyle.box,
        rounded && boxStyle.rounded,
        sizes[size],
        {
          backgroundColor: color,
        },
      ]}
    />
  );
}

Box.defaultProps = {
  size: 'medium',
  color: 'black',
};

const boxStyle = StyleSheet.create({
  box: {
    width: 64,
    height: 64,
    backgroundColor: 'red',
  },
  rounded: {
    borderRadius: 16,
  },
  small: {
    width: 32,
    height: 32,
  },
  medium: {
    width: 64,
    height: 64,
  },
  large: {
    width: 128,
    height: 128,
  },
});

const sizes = {
  small: boxStyle.small,
  medium: boxStyle.medium,
  large: boxStyle.large,
};

export default Box;
