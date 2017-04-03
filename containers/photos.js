import React from 'react';
import { StyleSheet, Text, View, ListView } from 'react-native';


export default class PhotosScreen extends React.Component {

    static navigationOptions = {
      title: 'Photos',
    };

    render() {
      return (
        <View style={styles.container}>
          <Text>Photos Screen</Text>
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
