import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';

const ButtonVeryLarge = () => {
  return (
    <View style={styles.buttonVeryLarge_Box}>
      <TouchableOpacity>
        <Text style={styles.buttonVeryLarge}>Button Style Very Large</Text>
      </TouchableOpacity>
    </View>
  );
};

const ButtonLarge = () => {
  return (
    <View style={styles.buttonLarge_Box}>
      <TouchableOpacity style={styles.buttonLarge}>
        <Text>Button Style Large</Text>
      </TouchableOpacity>
    </View>
  );
};

const ButtonMiddle = () => {
  return (
    <View style={styles.buttonMiddle_Box}>
      <TouchableOpacity style={styles.buttonMiddle}>
        <Text>Button Style Middle</Text>
      </TouchableOpacity>
    </View>
  );
};

const ButtonSmall = () => {
  return (
    <View style={styles.buttonSmall_Box}>
      <TouchableOpacity style={styles.buttonSmall}>
        <Text>Button Style Small</Text>
      </TouchableOpacity>
    </View>
  );
};

const ButtonVerySmall = () => {
  return (
    <View style={styles.buttonVerySmall_Box}>
      <TouchableOpacity style={styles.buttonVerySmall}>
        <Text>Button Style Very Small</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonVeryLarge_Box: {
    backgroundColor: '#0064FF',
    padding: 30,
    margin: 'auto',
    borderRadius: 40,
  },
  buttonLarge_Box: {},
  buttonMiddle_Box: {},
  buttonSmall_Box: {},
  buttonVerySmall_Box: {},
  buttonVeryLarge: {
    textAlign: 'center',
    fontSize: 30,
  },
  buttonLarge: {},
  buttonMiddle: {},
  buttonSmall: {},
  buttonVerySmall: {},
});

export {
  ButtonVeryLarge,
  ButtonLarge,
  ButtonMiddle,
  ButtonSmall,
  ButtonVerySmall,
};
