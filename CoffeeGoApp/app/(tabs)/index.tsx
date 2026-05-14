import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';

// SCREENS
import HomeScreen from '../../screens/HomeScreen';
import CartScreen from '../../screens/CartScreen';
import OrdersScreen from '../../screens/TestScreen';


// COMPONENT
import CustomTabBar from '../../components/Header';

export default function Index() {
  const [selectedTab, setSelectedTab] = useState('Меню');

  const renderScreen = () => {
    switch (selectedTab) {
      case 'Меню':
        return <HomeScreen />;

      case 'Кошик':
        return <CartScreen />;


      case 'Профіль':
        return <OrdersScreen />;

      default:
        return <HomeScreen />;
    }
  };

  return (
    <View style={styles.container}>

      {/* SCREEN AREA */}
      <View style={styles.screenContainer}>
        {renderScreen()}
      </View>

      {/* TAB BAR (ALWAYS VISIBLE) */}
      <CustomTabBar
        selected={selectedTab}
        setSelected={setSelectedTab}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fffbf5',
  },

  screenContainer: {
    flex: 1,
  },
});