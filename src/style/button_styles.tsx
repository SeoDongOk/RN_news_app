import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';

const buttonVeryLarge = () => {
  return (
    <View style={styles.buttonVeryLarge_Box}>
      <TouchableOpacity style={styles.buttonVeryLarge}>
        <Text>Button Style Very Large</Text>
      </TouchableOpacity>
    </View>
  );
};

const buttonLarge = () => {
  return (
    <View style={styles.buttonLarge_Box}>
      <TouchableOpacity style={styles.buttonLarge}>
        <Text>Button Style Large</Text>
      </TouchableOpacity>
    </View>
  );
};

const buttonMiddle = () => {
  return (
    <View style={styles.buttonMiddle_Box}>
      <TouchableOpacity style={styles.buttonMiddle}>
        <Text>Button Style Middle</Text>
      </TouchableOpacity>
    </View>
  );
};

const buttonSmall = () => {
  return (
    <View style={styles.buttonSmall_Box}>
      <TouchableOpacity style={styles.buttonSmall}>
        <Text>Button Style Small</Text>
      </TouchableOpacity>
    </View>
  );
};

const buttonVerySmall = () => {
  return (
    <View style={styles.buttonVerySmall_Box}>
      <TouchableOpacity style={styles.buttonVerySmall}>
        <Text>Button Style Very Small</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonVeryLarge_Box: {},
  buttonLarge_Box: {},
  buttonMiddle_Box: {},
  buttonSmall_Box: {},
  buttonVerySmall_Box: {},
  buttonVeryLarge: {},
  buttonLarge: {},
  buttonMiddle: {},
  buttonSmall: {},
  buttonVerySmall: {},
});

export {
  buttonVeryLarge,
  buttonLarge,
  buttonMiddle,
  buttonSmall,
  buttonVerySmall,
};
