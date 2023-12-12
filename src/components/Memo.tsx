import {StyleSheet, TextInput, View} from 'react-native';
import React, {Component} from 'react';

export class Memo extends Component {
  render() {
    return (
      <View style={styles.textBox}>
        <TextInput style={styles.textInput} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textInput: {},
  textBox: {
    margin: 'auto',
    backgroundColor: '#ff00ff',
    marginTop: 100,
    marginBottom: 'auto',
  },
});

export default Memo;
