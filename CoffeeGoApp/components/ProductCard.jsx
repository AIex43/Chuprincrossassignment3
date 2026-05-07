import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const ProductCard = ({ title, price, imageUrl, onAdd }) => {
  return (
    <View style={styles.card}>
      
      {/* LEFT IMAGE */}
      <Image source={{ uri: imageUrl }} style={styles.image} />

      {/* MIDDLE TEXT */}
      <View style={styles.textContainer}>
        <Text style={styles.title} numberOfLines={1}>
          {title}
        </Text>

        <Text style={styles.price}>
          ${price}
        </Text>
      </View>

      {/* BIG PLUS BUTTON */}
      <TouchableOpacity style={styles.addButton} onPress={onAdd}>
        
        {/* HORIZONTAL LINE */}
        <View style={styles.horizontal} />

        {/* VERTICAL LINE */}
        <View style={styles.vertical} />

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

  textContainer: {
    flex: 1,
    marginLeft: 20,
    justifyContent: 'center',
  },

  title: {
    fontSize: 16,
    fontWeight: '600',
    color: '#4F2F00',
    marginBottom: 6,
  },

  price: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#4F2F00',
  },

  addButton: {
    width: 58,
    height: 58,

    borderWidth: 2,
    borderColor: '#4F2F00',
    borderRadius: 12,

    justifyContent: 'center',
    alignItems: 'center',

    position: 'relative',
  },


  horizontal: {
    position: 'absolute',
    width: 24,
    height: 3,
    backgroundColor: '#4F2F00',
    borderRadius: 2,
  },


  vertical: {
    position: 'absolute',
    width: 3,
    height: 24,
    backgroundColor: '#4F2F00',
    borderRadius: 2,
  },
});

export default ProductCard;