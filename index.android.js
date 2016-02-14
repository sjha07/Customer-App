/**
 * 
 * Developer - Satish Jha
 * Customer App
*/

'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  Navigator
} from 'react-native';

const Home = require('./Home'),
      CustomerList = require('./CustomerList'),
      CustomerListView = require('./CustomerListView'),
      CreateCustomer = require('./CreateCustomer');


class CustomerApp extends Component {
  render() {
    return (
      <Navigator
        initialRoute={{id: 1}}
        renderScene={ this.renderScene } />
    );
  }

  renderScene(route, navigator) {
    if(route.id === 1) {
      return (<Home route={route} navigator={navigator} />);
    }
    else if(route.id === 2) {
      return (<CustomerListView route={route} navigator={navigator} />);
    }
    else if(route.id === 3) {
      return (<CreateCustomer route={route} navigator={navigator} />);
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('CustomerApp', () => CustomerApp);
