import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';

import HomeScreen from '../../screens/HomeScreen';
import CartScreen from '../../screens/CartScreen';
import TestScreen from '../../screens/TestScreen';
import ProductScreen from '../../screens/ProductScreen';
import NotificationsScreen from '../../screens/NotificationsScreen';

import CustomTabBar from '../../components/Header';
import { ThemeProvider } from '../../components/themeContext';

export default function Index() {
  const [selectedTab, setSelectedTab] = useState('Меню');

  return (
    <ThemeProvider>
      <IndexContent
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
      />
    </ThemeProvider>
  );
}

function IndexContent({ selectedTab, setSelectedTab }) {
  const renderScreen = () => {
    switch (selectedTab) {
      case 'Меню':
        return <HomeScreen />;

      case 'Кошик':
        return <CartScreen />;

      case 'Профіль':
        return <TestScreen onNavigate={setSelectedTab} />;

      case 'Історія':
        return <ProductScreen />;

      case 'Сповіщення':   
        return <NotificationsScreen />;

      default:
        return <HomeScreen />;
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.screenContainer}>
        {renderScreen()}
      </View>

      <CustomTabBar
        selected={selectedTab}
        setSelected={setSelectedTab}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  screenContainer: { flex: 1 },
});