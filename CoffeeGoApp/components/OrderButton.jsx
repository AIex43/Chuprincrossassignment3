import React, { useContext } from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
} from 'react-native';

import { ThemeContext } from '../components/themeContext';

const OrderButton = ({ onPress }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <TouchableOpacity
      style={[
        styles.button,
        {
          backgroundColor: theme.colors.primary,
        },
      ]}
      activeOpacity={0.8}
      onPress={onPress}
    >
      <Text
        style={[
          styles.text,
          {
            color: theme.colors.background,
          },
        ]}
      >
        Оформити замовлення
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 334,
    height: 79,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 21,
    marginBottom: 21,
  },

  text: {
    fontSize: 22,
    fontWeight: '700',
  },
});

export default OrderButton;