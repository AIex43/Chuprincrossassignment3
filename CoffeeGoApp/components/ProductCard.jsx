import React, { useContext } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Alert,
  Platform,
} from 'react-native';

import { addToCart } from './cartStore';
import { ThemeContext } from './themeContext';

const ProductCard = ({ title, price, imageUrl }) => {
  const { theme } = useContext(ThemeContext);

  const handleAddToCart = () => {
    addToCart({ title, price, imageUrl });

    if (Platform.OS === 'web') {
      window.alert(`${title} додано до кошика`);
    } else {
      Alert.alert('Успішно', `${title} додано до кошика`);
    }
  };

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
      <Image source={{ uri: imageUrl }} style={styles.image} />

      <View style={styles.text}>
        <Text style={[styles.title, { color: theme.colors.text }]}>
          {title}
        </Text>

        <Text style={[styles.price, { color: theme.colors.primary }]}>
          ${price}
        </Text>
      </View>

      <TouchableOpacity
        style={[
          styles.btn,
          { borderColor: theme.colors.primary },
        ]}
        activeOpacity={0.8}
        onPress={handleAddToCart}
      >
        <View
          style={[
            styles.plusH,
            { backgroundColor: theme.colors.primary },
          ]}
        />
        <View
          style={[
            styles.plusV,
            { backgroundColor: theme.colors.primary },
          ]}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 334,
    height: 128,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 2,
    borderRadius: 12,
    padding: 12,
    marginVertical: 8,
    alignSelf: 'center',
  },

  image: {
    width: 90,
    height: 90,
    borderRadius: 10,
  },

  text: {
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
    marginTop: 6,
  },

  btn: {
    width: 50,
    height: 50,
    borderWidth: 2,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },

  plusH: {
    position: 'absolute',
    width: 18,
    height: 2,
  },

  plusV: {
    position: 'absolute',
    width: 2,
    height: 18,
  },
});

export default ProductCard;