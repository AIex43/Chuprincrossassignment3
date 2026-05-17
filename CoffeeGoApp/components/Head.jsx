import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ThemeContext } from './themeContext';

const Header = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <View
      style={[
        styles.headerContainer,
        { backgroundColor: theme.colors.background },
      ]}
    >
      {/* LOGO */}
      <View style={styles.logoContainer}>
        <Text
          style={[
            styles.logoText,
            { color: theme.colors.primary },
          ]}
        >
          <Text style={styles.boldText}>Coffe</Text>
          <Text style={styles.normalText}>Go!</Text>
        </Text>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerContainer: {
    width: 375,
    height: 80,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 15,
    alignSelf: 'center',
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
});