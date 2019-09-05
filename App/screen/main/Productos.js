import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
class Productos extends Component {
  render() {
    return (
      <View>
        <Text style={styles.contenedorProductos}> Productos </Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  contenedorProductos: {
    textAlign: 'center',
  },
});
export default Productos;
