import {View, Touchable, StyleSheet} from 'react-native';
import React from 'react';

const buttonVeryLarge = () => {
  return (
    <View style={styles.buttonVeryLarge}>
      <Touchable></Touchable>
    </View>
  );
};

const buttonLarge = () => {
  return (
    <View style={styles.buttonLarge}>
      <Touchable></Touchable>
    </View>
  );
};

const buttonMiddle = () => {
  return (
    <View style={styles.buttonMiddle}>
      <Touchable></Touchable>
    </View>
  );
};

const buttonSmall = () => {
  return (
    <View style={styles.buttonSmall}>
      <Touchable></Touchable>
    </View>
  );
};

const buttonVerySmall = () => {
  return (
    <View style={styles.buttonVerySmall}>
      <Touchable></Touchable>
    </View>
  );
};

const styles = StyleSheet.create({
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
