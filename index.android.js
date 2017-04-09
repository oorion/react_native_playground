/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  View,
  Image,
} from 'react-native';

export default class AwesomeProject extends Component {
  render() {
    let pic = {
      uri: 'http://www.developermemes.com/wp-content/uploads/2013/03/helloWorld-199x300.jpg'
    };
    return (
      <Image source={pic} style={{flex: 1}}/>
    );
  }
}

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
