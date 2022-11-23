import * as React from 'react';
import { View } from 'react-native';
import { RadioButton } from 'react-native-paper';

const RadioB = () => {
  const [checked, setChecked] = React.useState('first');

  return (
    <View>
      <RadioButton
        value="first"
        status={ checked === 'first' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('first')}
        color="black"
      />
      <RadioButton
        value="second"
        status={ checked === 'second' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('second')}
        color="black"
      />
    </View>
  );
};

export default RadioB;