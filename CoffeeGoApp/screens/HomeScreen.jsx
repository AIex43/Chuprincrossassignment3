import React from 'react';
import { View, FlatList } from 'react-native';
import ProductCard from '../components/ProductCard';

const data = [
  { id: '1', title: 'Latte', price: 4, imageUrl: 'https://via.placeholder.com/150' },
];

const HomeScreen = () => {
  return (
    <View>
      <FlatList
        data={data}
        renderItem={({ item }) => <ProductCard {...item} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default HomeScreen;