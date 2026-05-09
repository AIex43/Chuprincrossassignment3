import React from 'react';

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import { clearCart } from './cartStore';

const CartHeader = () => {
  return (
    <View style={styles.headerContainer}>

      <Text style={styles.headerText}>
        Ваш кошик
      </Text>

      <TouchableOpacity onPress={clearCart}>
        <Text style={styles.clearText}>
          Очистити
        </Text>
      </TouchableOpacity>

    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    width: '100%',
    height: 80,

    backgroundColor: '#FFF0E4',

    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

    paddingHorizontal: 15,
  },

  headerText: {
    color: '#4F2F00',
    fontSize: 24,
    fontWeight: '500',
  },

  clearText: {
    color: '#4F2F00',
    fontSize: 14,
    fontWeight: '600',
  },
});

export default CartHeader;