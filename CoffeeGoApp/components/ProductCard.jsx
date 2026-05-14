import React from 'react';
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

const ProductCard = ({ title, price, imageUrl }) => {

  const handleAddToCart = () => {
    addToCart({ title, price, imageUrl });


    if (Platform.OS === 'web') {
      window.alert(`${title} додано до кошика`);
    } else {
      Alert.alert(
        'Успішно',
        `${title} додано до кошика`
      );
    }
  };

  return (
    <View style={styles.card}>

      <Image source={{ uri: imageUrl }} style={styles.image} />

      <View style={styles.text}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.price}>${price}</Text>
      </View>

      <TouchableOpacity
        style={styles.btn}
        activeOpacity={0.8}
        onPress={handleAddToCart}
      >
        <View style={styles.plusH} />
        <View style={styles.plusV} />
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
    backgroundColor: '#fffbf5',
    borderWidth: 2,
    borderColor: '#4F2F00',
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
    color: '#4F2F00',
  },

  price: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#4F2F00',
    marginTop: 6,
  },

  btn: {
    width: 50,
    height: 50,
    borderWidth: 2,
    borderColor: '#4F2F00',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },

  plusH: {
    position: 'absolute',
    width: 18,
    height: 2,
    backgroundColor: '#4F2F00',
  },

  plusV: {
    position: 'absolute',
    width: 2,
    height: 18,
    backgroundColor: '#4F2F00',
  },
});

export default ProductCard;