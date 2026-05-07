import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const SearchBar = ({ placeholder }) => {
  return (
    <View style={styles.container}>
      <Ionicons name="search" size={20} color="#4F2F00" style={styles.icon} />

      <TextInput
        placeholder={placeholder}
        placeholderTextColor="#4F2F00"
        style={styles.input}
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

    backgroundColor: '#fffbf5',
    borderWidth: 2,
    borderColor: '#4F2F00',
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
    color: '#4F2F00',
  },
});

export default SearchBar;