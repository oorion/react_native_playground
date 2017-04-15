  /**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  Image,
  Text,
  TextInput,
} from 'react-native';


class AwesomeProject extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageUrl: 'test.com',
    };
  }

  render() {
    this.getImageData();

    return (
      <View style={{flex: 1}}>
        <Text style={{fontWeight: 'bold', backgroundColor: 'powderblue'}}>{this.state.imageTitle}</Text>
        <Image source={{uri: this.state.imageUrl}} style={{flex: 5}}/>
      </View>
    )
  }

  getImageData() {
    fetch('https://www.reddit.com/r/pics/top/.json?count=20')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState(
          {
            imageUrl: responseJson.data.children[0].data.preview.images[0].source.url,
            imageTitle: responseJson.data.children[0].data.title,
          }
        );
      })
      .catch((error) => {
        console.error(error);
      });
  }
}

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
