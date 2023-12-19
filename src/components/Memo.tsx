import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';

function Memo() {
  const [txt, setTxt] = useState<string>('demo');

  return (
    <View style={styles.textBox}>
      <View style={styles.textBox}>
        <TextInput
          style={{backgroundColor: 'skyblue', paddingLeft: 10}}
          onChangeText={(e: string) => {
            setTxt(e);
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  textInput: {},
  textBox: {
    padding: 10,
    borderBottomColor: '#ddd',
    borderBottomWidth: 1,
    flexDirection: 'row',
  },
});

export default Memo;
