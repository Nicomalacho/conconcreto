import React, {Component} from 'react';
import ReactNative from 'react-native';
const firebase = require('firebase');
const StatusBar = require('./StatusBar');
const ActionButton = require('./ActionButton');
const ListItem = require('./ListItem');
const styles = require('../styles.js')

const {
  AppRegistry,
  ListView,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  AlertIOS,
  Modal
} = ReactNative;
import {Header, Title, Button} from 'native-base';
// Initialize Firebase
const firebaseConfig = {
  databaseURL: "https://conconcreto.firebaseio.com",
  storageBucket: "",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

class main extends Component {

  constructor(props) {
    super(props);
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      }),
      modalVisible: false
    };
    this.itemsRef = this.getRef().child("users");
  }
  redirect(routeName, worker){
    this.props.navigator.push({
      name: routeName,
      passProps: {
        worker: worker
      }
    });
  }
  getRef() {
    return firebaseApp.database().ref();
  }

  listenForItems(itemsRef) {
    itemsRef.on('value', (snap) => {

      // get children as an array
      var items = [];
      snap.forEach((child) => {
        items.push(child.val());
        // console.log(child.val()["full_name"]);
      });

      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(items)
      });

    });
  }

  componentDidMount() {
    this.listenForItems(this.itemsRef);
  }
  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }
  render() {
    return (
      <View style={styles.container}>
        <Modal
          animationType={"slide"}
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {alert("Modal has been closed.")}}
          >
            <View style={{marginTop: 22}}>
              <View>
                <Text>Hello World!</Text>

                <TouchableHighlight onPress={() => {
                  this.setModalVisible(!this.state.modalVisible)
                }}>
                  <Text>Hide Modal</Text>
                </TouchableHighlight>
              </View>
            </View>
        </Modal>
        <Header>
            <Title>Operarios</Title>
        </Header>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this._renderItem.bind(this)}
          enableEmptySections={true}
          style={styles.listview}/>

        <ActionButton onPress={() => {
          this.setModalVisible(true)
        }} title="Crear" />

      </View>
    )
  }

  _addItem() {
    AlertIOS.prompt(
      'Agreagar nuevo operario',
      null,
      [
        {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
        {
          text: 'Add',
          onPress: (text) => {
            this.itemsRef.push({ full_name: text })
          }
        },
      ],
      'plain-text'
    );
  }

  _renderItem(item) {
    // console.log(item);
    return (
      <ListItem item={item} onPress={this.redirect.bind(this,'worker',item)} />
    );
  }

}
module.exports = main;
