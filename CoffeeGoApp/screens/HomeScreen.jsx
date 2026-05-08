import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';

// COMPONENTS
import Head from '../components/Head';
import SearchBar from '../components/SearchBar';
import CustomButton from '../components/CustomButton';
import ProductCard from '../components/ProductCard';
import Header from '../components/Header';

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>

        {/* 1. HEAD */}
        <Head />

        {/* 2. SEARCH BAR */}
        <SearchBar />

        {/* 3. CUSTOM BUTTON */}
        <CustomButton />

        {/* 4. PRODUCT CARD */}
        <ProductCard />

        {/* 5. HEADER */}
        <Header />

      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fffbf5',
  },

  content: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
    gap: 20,
  },
});