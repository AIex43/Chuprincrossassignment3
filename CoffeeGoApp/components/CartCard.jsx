import React, { useContext } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import {
  increaseCount,
  decreaseCount,
} from './cartStore';

import { ThemeContext } from '../components/themeContext';

const CartCard = ({
  title,
  price,
  imageUrl,
  count,
}) => {
  const { theme } = useContext(ThemeContext);

  return (
    <View
      style={[
        styles.card,
        {
          backgroundColor: theme.colors.card,
          borderColor: theme.colors.primary,
        },
      ]}
    >

      <Image
        source={{ uri: imageUrl }}
        style={styles.image}
      />

      <View style={styles.info}>
        <Text
          style={[
            styles.title,
            {
              color: theme.colors.text,
            },
          ]}
        >
          {title}
        </Text>

        <Text
          style={[
            styles.price,
            {
              color: theme.colors.primary,
            },
          ]}
        >
          ${price}
        </Text>
      </View>

      <View style={styles.counter}>

        {/* PLUS */}
        <TouchableOpacity
          style={[
            styles.btn,
            {
              borderColor: theme.colors.primary,
            },
          ]}
          onPress={() => increaseCount(title)}
        >
          <View
            style={[
              styles.plusH,
              {
                backgroundColor: theme.colors.primary,
              },
            ]}
          />

          <View
            style={[
              styles.plusV,
              {
                backgroundColor: theme.colors.primary,
              },
            ]}
          />
        </TouchableOpacity>

        {/* COUNT */}
        <Text
          style={[
            styles.count,
            {
              color: theme.colors.text,
            },
          ]}
        >
          {count}
        </Text>

        {/* MINUS */}
        <TouchableOpacity
          style={[
            styles.btn,
            {
              borderColor: theme.colors.primary,
            },
          ]}
          onPress={() => decreaseCount(title)}
        >
          <View
            style={[
              styles.minus,
              {
                backgroundColor: theme.colors.primary,
              },
            ]}
          />
        </TouchableOpacity>

      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 334,
    height: 110,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 2,
    borderRadius: 12,
    padding: 10,
    marginVertical: 6,
    alignSelf: 'center',
  },

  image: {
    width: 70,
    height: 70,
    borderRadius: 10,
  },

  info: {
    flex: 1,
    marginLeft: 15,
  },

  title: {
    fontSize: 16,
    fontWeight: '600',
  },

  price: {
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 4,
  },

  counter: {
    width: 60,
    alignItems: 'center',
  },

  count: {
    fontSize: 18,
    fontWeight: '700',
    marginVertical: 6,
  },

  btn: {
    width: 32,
    height: 32,
    borderWidth: 2,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },

  plusH: {
    position: 'absolute',
    width: 14,
    height: 2,
  },

  plusV: {
    position: 'absolute',
    width: 2,
    height: 14,
  },

  minus: {
    width: 14,
    height: 2,
  },
});

export default CartCard;