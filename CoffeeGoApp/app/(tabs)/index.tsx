import React from 'react';
import { View, StyleSheet } from 'react-native';

import ProductCard from '../../screens/HomeScreen';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <ProductCard
        title="Cappuccino"
        price="$4.99"
        imageUrl="https://images.unsplash.com/photo-1509042239860-f550ce710b93"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fffbf5',
    justifyContent: 'center',
    alignItems: 'center',
  },
});