import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
class Login extends Component {
  render() {
    return (
      <View>
        <Text style={styles.contenedorLogin}> Login </Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  contenedorLogin: {
    textAlign: 'center',
  },
});
export default Login;
