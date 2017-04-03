import React, { PropTypes } from 'react';
import { StyleSheet, Text, View, ListView, TouchableHighlight } from 'react-native';
import { observer } from 'mobx-react';

import CounterUI from '../components/CounterUI'

@observer
export default class MainScreen extends React.Component {
    static navigationOptions = {
      title: 'Main',
    };

    static propTypes = {
      screenProps: PropTypes.object.isRequired
    }

    render() {
      console.log(this.props)
      const { navigate } = this.props.navigation;
      const { store } = this.props.screenProps

      return (
        <View style={styles.container}>
          <Text>Main Screen {store.counter}</Text>
          <TouchableHighlight onPress={() => navigate('Photos')}>
            <Text>Go to photos </Text>
          </TouchableHighlight>

          <CounterUI store={store} />
        </View>
      );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
