import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
class Facturas extends Component {
  render() {
    return (
      <View>
        <Text style={styles.contenedorFacturas}> Facturas </Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  contenedorFacturas: {
    textAlign: 'center',
  },
});
export default Facturas;
