import React, { useState } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';


import Head from '../components/Head';
import SearchBar from '../components/SearchBar';
import CustomButton from '../components/CustomButton';
import ProductCard from '../components/ProductCard';


import { products } from '../components/products';

export default function HomeScreen() {
  const [selectedCategory, setSelectedCategory] = useState('Усі');

  const filteredProducts =
    selectedCategory === 'Усі'
      ? products
      : products.filter(
          (item) => item.category === selectedCategory
        );

  return (
    <View style={styles.container}>

      
      <View style={styles.top}>
        <Head />

        <SearchBar />

        <CustomButton
          onCategoryChange={setSelectedCategory}
        />
      </View>

     
      <ScrollView
        style={styles.scrollArea}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {filteredProducts.map((item) => (
          <ProductCard
            key={item.id}
            title={item.title}
            price={item.price}
            imageUrl={item.imageUrl}
            onAdd={() => console.log('Added:', item.title)}
          />
        ))}
      </ScrollView>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF0E4',
  },

  top: {
    alignItems: 'center',
    paddingTop: 20,
    gap: 15,
  },

  scrollArea: {
    flex: 1,
    marginTop: 10,
  },

  scrollContent: {
    alignItems: 'center',
    paddingBottom: 20,
  },
});