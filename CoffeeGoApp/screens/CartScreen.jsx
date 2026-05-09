import React, { useEffect, useState } from 'react';
import { View, ScrollView, StyleSheet, Alert } from 'react-native';

import CartCard from '../components/CartCard';
import CartHeader from '../components/Text';
import OrderButton from '../components/OrderButton';

import { getCart, subscribe, clearCart } from '../components/cartStore';

export default function CartScreen() {
  const [cartItems, setCartItems] = useState(getCart());

  useEffect(() => {
    const unsub = subscribe((data) => {
      setCartItems([...data]);
    });

    return unsub;
  }, []);

  const handleOrder = () => {
    if (cartItems.length === 0) {
      Alert.alert('Кошик порожній');
      return;
    }

    Alert.alert('Замовлення оформлено!');
    clearCart();
  };

  return (
    <View style={styles.container}>

      <CartHeader />

      <ScrollView contentContainerStyle={styles.list}>

        
        {cartItems.map((item, index) => (
          <CartCard
            key={index}
            title={item.title}
            price={item.price}
            imageUrl={item.imageUrl}
            count={item.count}
          />
        ))}

        
        <OrderButton onPress={handleOrder} />

      </ScrollView>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF0E4',
  },

  list: {
    paddingBottom: 30,
    alignItems: 'center',
  },
});