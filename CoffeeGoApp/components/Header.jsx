import React, { useContext } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import { ThemeContext } from './themeContext';

const CustomTabBar = ({ selected, setSelected }) => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  // ✅ THEME COLORS
  const primaryColor = theme.colors.primary;
  const backgroundColor = theme.colors.background;
  const textColor = theme.colors.text;

  return (
    <View
      style={[
        styles.navBar,
        {
          backgroundColor: backgroundColor,
          borderColor: primaryColor,
        },
      ]}
    >

      {/* THEME BUTTON */}
      <TouchableOpacity
        style={styles.themeButton}
        activeOpacity={0.8}
        onPress={toggleTheme}
      >
        <Text style={styles.themeIcon}>
          {theme.darkMode ? '🌙' : '☀️'}
        </Text>
      </TouchableOpacity>

      {/* MENU */}
      <TouchableOpacity
        style={styles.tabItem}
        activeOpacity={0.8}
        onPress={() => setSelected('Меню')}
      >
        <View
          style={[
            styles.activeArea,
            {
              backgroundColor:
                selected === 'Меню'
                  ? primaryColor
                  : 'transparent',
            },
          ]}
        >
          <View style={styles.iconContainer}>

            <View
              style={[
                styles.homeRoof,
                {
                  borderColor:
                    selected === 'Меню'
                      ? backgroundColor
                      : primaryColor,
                },
              ]}
            />

            <View
              style={[
                styles.homeBody,
                {
                  borderColor:
                    selected === 'Меню'
                      ? backgroundColor
                      : primaryColor,

                  backgroundColor:
                    selected === 'Меню'
                      ? primaryColor
                      : backgroundColor,
                },
              ]}
            >
              <View
                style={[
                  styles.homeDoor,
                  {
                    borderColor:
                      selected === 'Меню'
                        ? backgroundColor
                        : primaryColor,
                  },
                ]}
              />
            </View>

          </View>

          <Text
            style={[
              styles.label,
              {
                color:
                  selected === 'Меню'
                    ? backgroundColor
                    : textColor,
              },
            ]}
          >
            Меню
          </Text>
        </View>
      </TouchableOpacity>

      {/* CART */}
      <TouchableOpacity
        style={styles.tabItem}
        activeOpacity={0.8}
        onPress={() => setSelected('Кошик')}
      >
        <View
          style={[
            styles.activeArea,
            {
              backgroundColor:
                selected === 'Кошик'
                  ? primaryColor
                  : 'transparent',
            },
          ]}
        >
          <View style={styles.iconContainer}>

            <View
              style={[
                styles.cartHandle,
                {
                  borderColor:
                    selected === 'Кошик'
                      ? backgroundColor
                      : primaryColor,
                },
              ]}
            />

            <View
              style={[
                styles.cartBasket,
                {
                  borderColor:
                    selected === 'Кошик'
                      ? backgroundColor
                      : primaryColor,
                },
              ]}
            />

            <View style={styles.cartWheels}>
              <View
                style={[
                  styles.dot,
                  {
                    backgroundColor:
                      selected === 'Кошик'
                        ? backgroundColor
                        : primaryColor,
                  },
                ]}
              />

              <View
                style={[
                  styles.dot,
                  {
                    backgroundColor:
                      selected === 'Кошик'
                        ? backgroundColor
                        : primaryColor,
                  },
                ]}
              />
            </View>

          </View>

          <Text
            style={[
              styles.label,
              {
                color:
                  selected === 'Кошик'
                    ? backgroundColor
                    : textColor,
              },
            ]}
          >
            Кошик
          </Text>
        </View>
      </TouchableOpacity>

      {/* PROFILE */}
      <TouchableOpacity
        style={styles.tabItem}
        activeOpacity={0.8}
        onPress={() => setSelected('Профіль')}
      >
        <View
          style={[
            styles.activeArea,
            {
              backgroundColor:
                selected === 'Профіль'
                  ? primaryColor
                  : 'transparent',
            },
          ]}
        >
          <View style={styles.iconContainer}>

            <View
              style={[
                styles.profileHead,
                {
                  borderColor:
                    selected === 'Профіль'
                      ? backgroundColor
                      : primaryColor,
                },
              ]}
            />

            <View
              style={[
                styles.profileShoulders,
                {
                  borderColor:
                    selected === 'Профіль'
                      ? backgroundColor
                      : primaryColor,
                },
              ]}
            />

          </View>

          <Text
            style={[
              styles.label,
              {
                color:
                  selected === 'Профіль'
                    ? backgroundColor
                    : textColor,
              },
            ]}
          >
            Профіль
          </Text>
        </View>
      </TouchableOpacity>

    </View>
  );
};

const styles = StyleSheet.create({
  navBar: {
    width: '100%',
    height: 120,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    borderTopWidth: 2,
    paddingBottom: 10,
    paddingHorizontal: 10,
    position: 'relative',
  },

  themeButton: {
    position: 'absolute',
    right: 12,
    bottom: 12,
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },

  themeIcon: {
    fontSize: 18,
  },

  tabItem: {
    width: 90,
    alignItems: 'center',
    justifyContent: 'center',
  },

  activeArea: {
    width: 80,
    height: 80,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },

  iconContainer: {
    width: 44,
    height: 44,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 4,
  },

  label: {
    fontSize: 14,
    fontWeight: '500',
  },

  
  homeRoof: {
    width: 28,
    height: 28,
    borderLeftWidth: 3,
    borderTopWidth: 3,
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
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    position: 'absolute',
    bottom: 4,
    alignItems: 'center',
  },

  homeDoor: {
    width: 10,
    height: 8,
    borderWidth: 3,
    borderBottomWidth: 0,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    position: 'absolute',
    bottom: 0,
  },

  /* CART ICON */
  cartHandle: {
    width: 10,
    height: 5,
    borderLeftWidth: 3,
    borderTopWidth: 3,
    borderTopLeftRadius: 3,
    position: 'absolute',
    top: 8,
    left: 2,
  },

  cartBasket: {
    width: 28,
    height: 18,
    borderWidth: 3,
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
  },

  /* PROFILE ICON */
  profileHead: {
    width: 14,
    height: 14,
    borderRadius: 7,
    borderWidth: 3,
    marginBottom: 4,
  },

  profileShoulders: {
    width: 32,
    height: 16,
    borderWidth: 3,
    borderBottomWidth: 0,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
});

export default CustomTabBar;