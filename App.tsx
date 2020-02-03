/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  StatusBar,
  Button
} from 'react-native';

import {
  Colors
} from 'react-native/Libraries/NewAppScreen';

declare var global: {HermesInternal: null | {}};

const App = () => {
  // Initial state
  const [count, setCount] = useState(0);

  // ComponentDidMount
  useEffect(() => {
    console.log('Component did mount');
  }, []);

  // componentDidUpdate
  useEffect(() => {
    console.log('Component did update: ' + count);
  }, [count]);

  // componentWillUnmount
  useEffect(() => {
    return () => {
    console.log('Component will unmount');
    }
  }, []);

  // Update state example
  const incrementCount = () => {
    setCount(count + 1);
  }

  const decrementCount = () => {
    setCount(count - 1);
  }

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <View style={styles.body}>
          <Text style={styles.mainContent}>{count}</Text>
          <View style={styles.sectionContainer}>
            <Button onPress={incrementCount} title={"INCREMENT"}></Button>
          </View>
          <View style={styles.sectionContainer}>
            <Button onPress={decrementCount} title={"DECREMENT"}></Button>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  body: {
    backgroundColor: Colors.white,
    padding: 50,
  },
  mainContent: {
    textAlign: "center",
    margin: 45
  },
  sectionContainer: {
    marginTop: 32
  }
});

export default App;
