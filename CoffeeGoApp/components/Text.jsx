import React, { useContext } from 'react';

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import { clearCart } from './cartStore';
import { ThemeContext } from '../components/themeContext';

const CartHeader = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <View
      style={[
        styles.headerContainer,
        {
          backgroundColor: theme.colors.background,
        },
      ]}
    >

      <Text
        style={[
          styles.headerText,
          {
            color: theme.colors.primary,
          },
        ]}
      >
        Ваш кошик
      </Text>

      <TouchableOpacity onPress={clearCart}>
        <Text
          style={[
            styles.clearText,
            {
              color: theme.colors.primary,
            },
          ]}
        >
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

    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

    paddingHorizontal: 15,
  },

  headerText: {
    fontSize: 24,
    fontWeight: '500',
  },

  clearText: {
    fontSize: 14,
    fontWeight: '600',
  },
});

export default CartHeader;