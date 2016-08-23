/**
 * Sample Firebase & React Native App
 * https://github.com/davideast/firebase-react-native-sample
 */

 import React, { Component } from 'react';
 import {
   AppRegistry,
   StyleSheet,
   Navigator,
   Text,
   View
 } from 'react-native';


 import Main from './components/Main';
 import Worker from './components/Worker';
 import Report from './components/Report';

class conconcreto extends Component {
  renderScene(route,navigator){
    console.log(route);
    if (route.name == "root") {
      return <Main navigator={navigator} />
    }
    if (route.name == "worker") {
      return <Worker navigator={navigator} {...route.passProps} />
    }
    if (route.name == "report") {
      return <Report navigator={navigator} {...route.passProps} />
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <Navigator
          initialRoute={{name: 'root'}}
          renderScene={this.renderScene.bind(this)}
        />
      </View>
    );
  }

}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#F5FCFF',
  },
});
AppRegistry.registerComponent('conconcreto', () => conconcreto);
