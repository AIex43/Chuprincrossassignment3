import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';

import ProductCard from '../../components/ProductCard';
import { products } from '../../components/products.js';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        numColumns={2}
        renderItem={({ item }) => (
          <ProductCard
            title={item.title}
            price={item.price}
            imageUrl={item.imageUrl}
          />
        )}
        contentContainerStyle={styles.list}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fffbf5',
  },
  list: {
    padding: 10,
  },
});