import React, { useContext } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { ThemeContext } from './themeContext';

const SearchBar = ({ placeholder }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: theme.colors.card,
          borderColor: theme.colors.primary,
        },
      ]}
    >
      <Ionicons
        name="search"
        size={20}
        color={theme.colors.primary}
        style={styles.icon}
      />

      <TextInput
        placeholder={placeholder}
        placeholderTextColor={theme.colors.placeholder}
        style={[
          styles.input,
          {
            color: theme.colors.text,
          },
        ]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 334,
    height: 46,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 2,
    borderRadius: 8,
    paddingHorizontal: 10,
  },

  icon: {
    marginRight: 8,
  },

  input: {
    flex: 1,
    height: '100%',
    textAlignVertical: 'center',
    borderWidth: 0,
    backgroundColor: 'transparent',
    fontSize: 14,
  },
});

export default SearchBar;