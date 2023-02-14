import React from 'react';
import {View, Text} from 'react-native';

function Greeting(props: {name: string}) {
  return (
    <View>
      <Text> Greeting React {props.name} </Text>
    </View>
  );
}

Greeting.defaultProps = {
  name: 'John',
};

export default Greeting;
