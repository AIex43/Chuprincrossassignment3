import React, { useState, useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { ThemeContext } from './themeContext';

const CustomButton = ({ onCategoryChange }) => {
  const [selected, setSelected] = useState('Усі');
  const { theme } = useContext(ThemeContext);

  const categories = ['Усі', 'Кава', 'Чай', 'Інше'];

  const handlePress = (cat) => {
    setSelected(cat);

    if (onCategoryChange) {
      onCategoryChange(cat);
    }
  };

  return (
    <View style={styles.container}>
      {categories.map((cat) => {
        const isActive = selected === cat;

        return (
          <TouchableOpacity
            key={cat}
            onPress={() => handlePress(cat)}
            activeOpacity={0.8}
            style={styles.buttonBase}
          >
            {isActive ? (
              <View
                style={[
                  styles.activeButton,
                  { backgroundColor: theme.colors.primary },
                ]}
              >
                <Text
                  style={[
                    styles.activeText,
                    { color: theme.colors.background },
                  ]}
                >
                  {cat}
                </Text>
              </View>
            ) : (
              <View style={styles.inactiveButton}>
                <Text
                  style={[
                    styles.inactiveText,
                    { color: theme.colors.primary },
                  ]}
                >
                  {cat}
                </Text>
              </View>
            )}
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: 334,
    height: 60,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 12,
    alignSelf: 'center',
  },

  buttonBase: {
    width: 65,
    height: 39,
    borderRadius: 10,
    overflow: 'hidden',
  },

  activeButton: {
    flex: 1,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },

  inactiveButton: {
    flex: 1,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },

  activeText: {
    fontSize: 18,
    fontWeight: '600',
  },

  inactiveText: {
    fontSize: 18,
    fontWeight: '500',
  },
});

export default CustomButton;