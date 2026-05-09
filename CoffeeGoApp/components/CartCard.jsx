import React from 'react';
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

const CartCard = ({
  title,
  price,
  imageUrl,
  count,
}) => {
  return (
    <View style={styles.card}>

      <Image source={{ uri: imageUrl }} style={styles.image} />

      <View style={styles.info}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.price}>${price}</Text>
      </View>

      <View style={styles.counter}>

        
        <TouchableOpacity
          style={styles.btn}
          onPress={() => increaseCount(title)}
        >
          <View style={styles.plusH} />
          <View style={styles.plusV} />
        </TouchableOpacity>

       
        <Text style={styles.count}>{count}</Text>

      
        <TouchableOpacity
          style={styles.btn}
          onPress={() => decreaseCount(title)}
        >
          <View style={styles.minus} />
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
    backgroundColor: '#fffbf5',
    borderWidth: 2,
    borderColor: '#4F2F00',
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
    color: '#4F2F00',
  },

  price: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#4F2F00',
    marginTop: 4,
  },

  counter: {
    width: 60,
    alignItems: 'center',
  },

  count: {
    fontSize: 18,
    fontWeight: '700',
    color: '#4F2F00',
    marginVertical: 6,
  },

  btn: {
    width: 32,
    height: 32,
    borderWidth: 2,
    borderColor: '#4F2F00',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },

  plusH: {
    position: 'absolute',
    width: 14,
    height: 2,
    backgroundColor: '#4F2F00',
  },

  plusV: {
    position: 'absolute',
    width: 2,
    height: 14,
    backgroundColor: '#4F2F00',
  },

  minus: {
    width: 14,
    height: 2,
    backgroundColor: '#4F2F00',
  },
});

export default CartCard;