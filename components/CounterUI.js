/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, { PropTypes } from 'react';
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import { observer } from 'mobx-react';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  heading: {
    fontSize: 30,
    textAlign: 'center',
    margin: 10
  }
});


@observer class CounterUI extends React.Component {
  static propTypes = {
    store: PropTypes.object.isRequired
  }

  render() {
    let { store } = this.props
    console.log("CounterUI store is ", store)

    return (
      <View style={styles.container}>
        <Text style={styles.heading}>Mobx Counter</Text>
        <TouchableHighlight onPress={() => this.props.store.increment()}>
          <Text style={styles.text}>|   +   | </Text>
        </TouchableHighlight>

        <Text style={styles.text}>Clicked: {store.counter} times</Text>

        <TouchableHighlight onPress={() => store.decrement()}>
          <Text style={styles.text}>|   -   | </Text>
        </TouchableHighlight>

        <TouchableHighlight onPress={() => store.incrementAsync()}>
          <Text style={styles.text}>|   + Async   | </Text>
        </TouchableHighlight>
      </View>
    );
  }
}

export default CounterUI;
