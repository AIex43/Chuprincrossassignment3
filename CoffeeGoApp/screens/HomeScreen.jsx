import React, { useEffect, useMemo, useState, useContext } from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  Text,
  TextInput,
  ActivityIndicator,
} from 'react-native';

import Head from '../components/Head';
import CustomButton from '../components/CustomButton';
import ProductCard from '../components/ProductCard';
import { getProducts } from '../components/products';

import { ThemeContext } from '../components/themeContext';

export default function HomeScreen() {
  const { theme } = useContext(ThemeContext);

  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('Усі');
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const loadProducts = async () => {
      try {
        setLoading(true);
        const apiProducts = await getProducts();
        setProducts(apiProducts);
        setError('');
      } catch (err) {
        setError(err.message || 'Помилка завантаження');
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, []);

  const filteredProducts = useMemo(() => {
    return products.filter((item) => {
      const matchesCategory =
        selectedCategory === 'Усі' || item.category === selectedCategory;

      const matchesSearch = item.title
        .toLowerCase()
        .includes(searchQuery.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [products, selectedCategory, searchQuery]);

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: theme.colors.background },
      ]}
    >
      <View style={styles.top}>
        <Head />

        <TextInput
          style={[
            styles.search,
            {
              backgroundColor: theme.darkMode ? '#3a3a3a' : '#FFFBF5',
              color: theme.colors.text,
              borderColor: theme.darkMode ? '#FFFBF5' : '#4F2F00',
            },
          ]}
          value={searchQuery}
          onChangeText={setSearchQuery}
          placeholder="Пошук..."
          placeholderTextColor={theme.darkMode ? '#FFFBF5' : '#4F2F00'}
        />

        <CustomButton onCategoryChange={setSelectedCategory} />
      </View>

      {loading ? (
        <View style={styles.center}>
          <ActivityIndicator size="large" color="#6B3E26" />
        </View>
      ) : error ? (
        <View style={styles.center}>
          <Text style={{ color: 'red', fontSize: 16 }}>
            {error}
          </Text>
        </View>
      ) : (
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
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  top: {
    alignItems: 'center',
    paddingTop: 20,
    gap: 15,
  },

  search: {
    width: '88%',
    height: 48,
    borderRadius: 16,
    paddingHorizontal: 16,
    borderWidth: 1,
  },

  scrollArea: {
    flex: 1,
    marginTop: 10,
  },

  scrollContent: {
    alignItems: 'center',
    paddingBottom: 20,
  },

  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});