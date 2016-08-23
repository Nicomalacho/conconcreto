import React, {Component} from 'react';
import ReactNative from 'react-native';
const styles = require('../styles.js');
const { View, TouchableHighlight, Text } = ReactNative;
import { Container, Content, Button, Icon, Card, CardItem } from 'native-base';
class ListItem extends Component {
  render() {
    return (
      <TouchableHighlight onPress={this.props.onPress}>
        <View style={styles.li}>
          <Text style={styles.liText}>{this.props.item["full_name"]}</Text>
          <Text style={styles.liText}>{this.props.item["job_title"]}</Text>
        </View>
      </TouchableHighlight>
    );
  }
}


module.exports = ListItem;

// ei-plus
