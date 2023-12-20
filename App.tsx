/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  useColorScheme,
} from 'react-native';
import Home from './src/Home';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import Buttom from './src/components/Buttom';
import Memo from './src/components/Memo';
import {
  ButtonLarge,
  ButtonMiddle,
  ButtonVeryLarge,
} from './src/style/button_styles';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  console.log('backgroundStyle: ', isDarkMode);

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <View style={styles.sectionContainer}>
        <Home />
        <View>
          <Text>current mode </Text>
          <Text>Todo List</Text>
          <Memo />
          <Text style={styles.sectionTitle}>Button Here</Text>
          <ButtonVeryLarge />
          <Text> Blink </Text>
          <ButtonLarge />
          <Text> Blink </Text>
          <ButtonMiddle />

          <Buttom />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
