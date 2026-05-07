import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const CustomTabBar = () => {
  return (
    <View style={styles.navBar}>
      {/* MENU / HOME */}
      <TouchableOpacity style={styles.tabItem}>
        <View style={styles.iconContainer}>
          <View style={styles.homeRoof} />
          <View style={styles.homeBody}>
            <View style={styles.homeDoor} />
          </View>
        </View>
        <Text style={styles.label}>Меню</Text>
      </TouchableOpacity>

      {/* CART */}
      <TouchableOpacity style={styles.tabItem}>
        <View style={styles.iconContainer}>
          <View style={styles.cartHandle} />
          <View style={styles.cartBasket} />
          <View style={styles.cartWheels}>
            <View style={styles.dot} />
            <View style={styles.dot} />
          </View>
        </View>
        <Text style={styles.label}>Кошик</Text>
      </TouchableOpacity>

      {/* ORDERS */}
      <TouchableOpacity style={styles.tabItem}>
        <View style={styles.iconContainer}>
          <View style={styles.docFrame}>
            <View style={styles.docFold} />
            <View style={styles.docLineLong} />
            <View style={styles.docLineShort} />
          </View>
        </View>
        <Text style={styles.label}>Замовлення</Text>
      </TouchableOpacity>

      {/* PROFILE */}
      <TouchableOpacity style={styles.tabItem}>
        <View style={styles.iconContainer}>
          <View style={styles.profileHead} />
          <View style={styles.profileShoulders} />
        </View>
        <Text style={styles.label}>Профіль</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  navBar: {
    width: 375,
    height: 120,
    backgroundColor: '#fffbf5',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderTopWidth: 2,
    borderColor: '#4F2F00',
    alignSelf: 'center',
    paddingBottom: 10,
  },

  tabItem: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },

  iconContainer: {
    width: 44,
    height: 44,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 4,
  },

  label: {
    color: '#4F2F00',
    fontSize: 14,
    fontWeight: '500',
  },

  // HOME
  homeRoof: {
    width: 28,
    height: 28,
    borderLeftWidth: 3,
    borderTopWidth: 3,
    borderColor: '#4F2F00',
    borderRadius: 4,
    transform: [{ rotate: '45deg' }],
    position: 'absolute',
    top: 6,
  },

  homeBody: {
    width: 32,
    height: 20,
    borderWidth: 3,
    borderTopWidth: 0,
    borderColor: '#4F2F00',
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    backgroundColor: '#fffbf5',
    position: 'absolute',
    bottom: 4,
    alignItems: 'center',
  },

  homeDoor: {
    width: 10,
    height: 8,
    borderWidth: 3,
    borderBottomWidth: 0,
    borderColor: '#4F2F00',
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    position: 'absolute',
    bottom: 0,
  },

  // CART
  cartHandle: {
    width: 10,
    height: 5,
    borderLeftWidth: 3,
    borderTopWidth: 3,
    borderColor: '#4F2F00',
    borderTopLeftRadius: 3,
    position: 'absolute',
    top: 8,
    left: 2,
  },

  cartBasket: {
    width: 28,
    height: 18,
    borderWidth: 3,
    borderColor: '#4F2F00',
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    top: 2,
    left: 4,
  },

  cartWheels: {
    flexDirection: 'row',
    width: 22,
    justifyContent: 'space-between',
    marginTop: 4,
  },

  dot: {
    width: 5,
    height: 5,
    borderRadius: 3,
    backgroundColor: '#4F2F00',
  },

  // DOCUMENT
  docFrame: {
    width: 26,
    height: 32,
    borderWidth: 3,
    borderColor: '#4F2F00',
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },

  docFold: {
    position: 'absolute',
    top: -2,
    right: -2,
    width: 10,
    height: 10,
    borderBottomWidth: 3,
    borderLeftWidth: 3,
    borderColor: '#4F2F00',
    backgroundColor: '#fffbf5',
    borderBottomLeftRadius: 4,
  },

  docLineLong: {
    width: 12,
    height: 3,
    backgroundColor: '#4F2F00',
    borderRadius: 2,
    marginVertical: 2,
  },

  docLineShort: {
    width: 8,
    height: 3,
    backgroundColor: '#4F2F00',
    borderRadius: 2,
  },

  // PROFILE
  profileHead: {
    width: 14,
    height: 14,
    borderRadius: 7,
    borderWidth: 3,
    borderColor: '#4F2F00',
    marginBottom: 4,
  },

  profileShoulders: {
    width: 32,
    height: 16,
    borderWidth: 3,
    borderBottomWidth: 0,
    borderColor: '#4F2F00',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
});

export default CustomTabBar;