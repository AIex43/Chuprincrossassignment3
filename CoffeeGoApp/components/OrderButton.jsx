import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const OrderButton = ({ onPress }) => {
  return (
    <TouchableOpacity
      style={styles.button}
      activeOpacity={0.8}
      onPress={onPress}
    >
      <Text style={styles.text}>Оформити замовлення</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 334,
    height: 79,
    backgroundColor: '#4F2F00',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',

    marginTop: 21,
    marginBottom: 21,
  },

  text: {
    color: '#FFF0E4',
    fontSize: 22,
    fontWeight: '700',
  },
});

export default OrderButton;