import React, {Component} from 'react';
import ReactNative from 'react-native';

import { Container, Content, Button, Icon,Header, Title, } from 'native-base';

const styles = require('../styles.js');
const { View, TouchableHighlight, Text } = ReactNative;

class Report extends Component {
  render() {
    return (
      <Container>
          <Header>
              <Button onPress={ () => this.props.navigator.pop() } transparent>
                  <Icon name="ios-arrow-back" />
              </Button>
              <Title>Nuevo reporte</Title>
          </Header>
          <Content>
            <Text>Esto es un nuevo reporte</Text>
          </Content>
      </Container>
    );
  }
}

module.exports = Report;

// ei-plus
