import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';

const ButtonVeryLarge = () => {
  return (
    <TouchableOpacity>
      <View style={styles.buttonVeryLarge_Box}>
        <Text style={styles.buttonVeryLarge}>Button Style Very Large</Text>
      </View>
    </TouchableOpacity>
  );
};

const ButtonLarge = () => {
  return (
    <TouchableOpacity>
      <View style={styles.buttonLarge_Box}>
        <Text style={styles.buttonLarge}>Button Style Large</Text>
      </View>
    </TouchableOpacity>
  );
};

const ButtonMiddle = () => {
  return (
    <TouchableOpacity>
      <View style={styles.buttonMiddle_Box}>
        <Text style={styles.buttonMiddle}>Button Style Middle</Text>
      </View>
    </TouchableOpacity>
  );
};

const ButtonSmall = () => {
  return (
    <TouchableOpacity>
      <View style={styles.buttonSmall_Box}>
        <Text style={styles.buttonSmall}>Button Style Small</Text>
      </View>
    </TouchableOpacity>
  );
};

const ButtonVerySmall = () => {
  return (
    <TouchableOpacity>
      <View style={styles.buttonVerySmall_Box}>
        <Text style={styles.buttonVerySmall}>Button Style Very Small</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonVeryLarge_Box: {
    backgroundColor: '#0064FF',
    padding: 30,
    margin: 'auto',
    borderRadius: 40,
  },
  buttonLarge_Box: {
    backgroundColor: '#0064FF',
    padding: 25,
    marginLeft: 50,
    marginRight: 50,
    margin: 'auto',
    borderRadius: 40,
  },
  buttonMiddle_Box: {
    backgroundColor: '#0064FF',
    padding: 20,
    marginLeft: 110,
    marginRight: 110,
    margin: 'auto',
    borderRadius: 40,
  },
  buttonSmall_Box: {},
  buttonVerySmall_Box: {},
  buttonVeryLarge: {
    textAlign: 'center',
    fontSize: 30,
    fontFamily: '',
  },
  buttonLarge: {
    textAlign: 'center',
    fontSize: 25,
    fontFamily: '',
  },
  buttonMiddle: {
    textAlign: 'center',
    fontSize: 15,
    fontFamily: '',
  },
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
