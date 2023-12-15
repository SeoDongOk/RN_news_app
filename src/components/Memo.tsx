import {StyleSheet, TextInput, View} from 'react-native';
import React, {Component} from 'react';

export class Memo extends Component {
  render() {
    return (
      <View style={styles.textBox}>
        <TextInput
          style={styles.textInput}
          onChange={(e: string) => {
            console.log(e);
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textInput: {},
  textBox: {
    margin: 'auto',
    backgroundColor: '#ff00ff',
    // marginTop: 100,
    padding: 10,
    marginBottom: 'auto',
  },
});

export default Memo;
