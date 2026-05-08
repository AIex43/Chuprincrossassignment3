import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Header = () => {
  // Updated brown color
  const brandColor = '#4F2F00';

  return (
    <View style={styles.headerContainer}>
      
      {/* BURGER MENU ICON */}
      <TouchableOpacity style={styles.iconButton}>
        <View style={styles.burgerContainer}>
          <View style={[styles.burgerLine, { backgroundColor: brandColor }]} />
          <View style={[styles.burgerLine, { backgroundColor: brandColor }]} />
          <View style={[styles.burgerLine, { backgroundColor: brandColor }]} />
        </View>
      </TouchableOpacity>

      {/* LOGO TEXT */}
      <View style={styles.logoContainer}>
        <Text style={[styles.logoText, { color: brandColor }]}>
          <Text style={styles.boldText}>Coffe</Text>
          <Text style={styles.normalText}>Go!</Text>
        </Text>
      </View>

      {/* CART ICON */}
      <TouchableOpacity style={styles.iconButton}>
        <View style={styles.cartIconContainer}>
          <View style={[styles.cartHandle, { borderColor: brandColor }]} />
          <View style={[styles.cartBasket, { borderColor: brandColor }]} />
          <View style={styles.cartWheels}>
            <View style={[styles.dot, { backgroundColor: brandColor }]} />
            <View style={[styles.dot, { backgroundColor: brandColor }]} />
          </View>
        </View>
      </TouchableOpacity>

    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    width: 375,
    height: 80,
    backgroundColor: '#fffbf5',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    alignSelf: 'center',
  },

  iconButton: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },

  logoContainer: {
    flex: 1,
    alignItems: 'center',
  },

  logoText: {
    fontSize: 28,
    letterSpacing: -1,
  },

  boldText: {
    fontWeight: '900',
  },

  normalText: {
    fontWeight: '400',
  },

  // --- BURGER ICON ---
  burgerContainer: {
    width: 28,
    height: 16,
    justifyContent: 'space-between',
  },

  burgerLine: {
    width: '100%',
    height: 3,
    borderRadius: 2,
  },

  // --- CART ICON ---
  cartIconContainer: {
    width: 35,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },

  cartHandle: {
    width: 8,
    height: 4,
    borderLeftWidth: 2,
    borderTopWidth: 2,
    borderTopLeftRadius: 2,
    position: 'absolute',
    top: 2,
    left: 4,
  },

  cartBasket: {
    width: 24,
    height: 14,
    borderWidth: 2,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4,
    marginTop: 2,
  },

  cartWheels: {
    flexDirection: 'row',
    width: 18,
    justifyContent: 'space-between',
    marginTop: 2,
    marginLeft: 4,
  },

  dot: {
    width: 4,
    height: 4,
    borderRadius: 2,
  },
});

export default Header;