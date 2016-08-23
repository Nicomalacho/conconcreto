'use strict';


import React, { Component } from 'react';
import {
  StyleSheet,
  TouchableHighlight,
  AsyncStorage,
  Text,
  Alert,
  View
} from 'react-native';
import { Container,Content, Header, Title, Button, Icon, Card, CardItem } from 'native-base';

const styles = require('../styles.js');


class Worker extends Component {
  redirect(routeName, worker){
    this.props.navigator.push({
      name: routeName,
      passProps: {
        worker: worker
      }
    });
  }
  render() {
    var worker = this.props.worker;
    console.log(worker["reports"][1]["date_of_report"]);
    return (
      <Container>
          <Header>
              <Button onPress={ () => this.props.navigator.pop() } transparent>
                  <Icon name="ios-arrow-back" />
              </Button>

              <Title>{this.props.worker["full_name"]}</Title>

              <Button onPress={ this.redirect.bind(this,'report',worker) } transparent>
                  <Icon name="md-add" />
              </Button>
          </Header>
          <Content>
            <Text>Cargo: { worker["job_title"] }</Text>
          </Content>
      </Container>
    );
  }
}

export default Worker
