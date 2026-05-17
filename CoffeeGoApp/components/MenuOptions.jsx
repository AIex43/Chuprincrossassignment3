import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { ThemeContext } from '../components/themeContext';

const CustomIcon = ({ type, color }) => {
  switch (type) {
    case 'profile':
      return (
        <View style={styles.iconBase}>
          <View style={[styles.head, { borderColor: color }]} />
          <View style={[styles.body, { borderColor: color }]} />
        </View>
      );

    case 'card':
      return (
        <View style={[styles.iconBase, styles.cardBase, { borderColor: color }]}>
          <View style={[styles.cardLine, { backgroundColor: color }]} />
          <View style={[styles.cardChip, { backgroundColor: color }]} />
        </View>
      );

    case 'history':
      return (
        <View style={[styles.iconBase, styles.clockBase, { borderColor: color }]}>
          <View
            style={[
              styles.clockHand,
              { backgroundColor: color, height: 6, top: 4 },
            ]}
          />
          <View
            style={[
              styles.clockHand,
              { backgroundColor: color, width: 6, height: 2, top: 10, left: 10 },
            ]}
          />
        </View>
      );

    case 'bell':
      return (
        <View style={styles.iconBase}>
          <View style={[styles.bellTop, { borderColor: color }]} />
          <View style={[styles.bellClapper, { backgroundColor: color }]} />
        </View>
      );

    default:
      return null;
  }
};

const MenuOptions = ({ onSelect }) => {
  const { theme } = useContext(ThemeContext);

  const color = theme.colors.primary;
  const textColor = theme.colors.text;
  const separatorColor = theme.darkMode ? '#333' : '#E0E0E0';

  const options = [
    { id: 1, title: 'Мої дані', icon: 'profile' },
    { id: 2, title: 'Способи оплати', icon: 'card' },
    { id: 3, title: 'Історія', icon: 'history' },
    { id: 4, title: 'Сповіщення', icon: 'bell' },
  ];

  return (
    <View style={styles.menuContainer}>
      {options.map((option, index) => (
        <React.Fragment key={option.id}>
          <TouchableOpacity
            style={styles.itemWrapper}
            onPress={() => onSelect && onSelect(option.title)}
          >
            <View style={styles.contentLeft}>
              <CustomIcon type={option.icon} color={color} />
              <Text style={[styles.itemText, { color: textColor }]}>
                {option.title}
              </Text>
            </View>

            <View style={[styles.chevron, { borderColor: color }]} />
          </TouchableOpacity>

          {index !== options.length - 1 && (
            <View style={[styles.separator, { backgroundColor: separatorColor }]} />
          )}
        </React.Fragment>
      ))}
    </View>
  );
};

export default MenuOptions;

const styles = StyleSheet.create({
  menuContainer: {
    width: '100%',
    paddingHorizontal: 25,
    marginTop: 10,
  },

  itemWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 18,
  },

  contentLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  itemText: {
    fontSize: 18,
    fontWeight: '500',
    marginLeft: 15,
  },

  separator: {
    height: 1,
  },

  chevron: {
    width: 10,
    height: 10,
    borderRightWidth: 2,
    borderTopWidth: 2,
    transform: [{ rotate: '45deg' }],
  },

  iconBase: {
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },

  head: {
    width: 10,
    height: 10,
    borderRadius: 5,
    borderWidth: 2,
    marginBottom: 2,
  },

  body: {
    width: 18,
    height: 8,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderWidth: 2,
    borderBottomWidth: 0,
  },

  cardBase: {
    borderWidth: 2,
    borderRadius: 4,
    height: 20,
  },

  cardLine: {
    width: '100%',
    height: 3,
    position: 'absolute',
    top: 3,
  },

  cardChip: {
    width: 4,
    height: 3,
    position: 'absolute',
    bottom: 3,
    left: 3,
  },

  clockBase: {
    width: 22,
    height: 22,
    borderRadius: 11,
    borderWidth: 2,
  },

  clockHand: {
    width: 2,
    position: 'absolute',
    left: 9,
  },

  bellTop: {
    width: 16,
    height: 14,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderWidth: 2,
    borderBottomWidth: 2,
  },

  bellClapper: {
    width: 4,
    height: 3,
    borderBottomLeftRadius: 2,
    borderBottomRightRadius: 2,
    marginTop: -1,
  },
});