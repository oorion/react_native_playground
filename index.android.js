import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  Image,
  Text,
  TextInput,
  Button,
} from 'react-native';


class AwesomeProject extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageUrl: 'test.com',
      imageIndex: 0
    };
  }

  render() {
    this.getImageData();

    return (
      <View style={{flex: 1}}>
        <Text style={{fontWeight: 'bold', backgroundColor: 'powderblue'}}>{this.state.imageTitle}</Text>
        <Image source={{uri: this.state.imageUrl}} style={{flex: 5}}/>
        <Button
          onPress={this.goToNextPage.bind(this)}
          title="Next"
          color="green"
        />
      </View>
    )
  }

  getImageData() {
    fetch('https://www.reddit.com/r/pics/top/.json?count=20')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState(
          {
            imageUrl: responseJson.data.children[this.state.imageIndex].data.preview.images[0].source.url,
            imageTitle: responseJson.data.children[this.state.imageIndex].data.title,
          }
        );
      })
      .catch((error) => {
        console.error(error);
      });
  }

  goToNextPage = function() {
    this.setState({imageIndex: this.state.imageIndex + 1});
  }
}

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
