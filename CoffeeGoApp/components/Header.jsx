import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const CustomTabBar = ({ selected, setSelected }) => {
  const brandColor = '#4F2F00';
  const lightColor = '#fffbf5';

  return (
    <View style={styles.navBar}>

      
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
                selected === 'Меню' ? brandColor : 'transparent',
            },
          ]}
        >

          <View style={styles.iconContainer}>

            <View
              style={[
                styles.homeRoof,
                {
                  borderColor:
                    selected === 'Меню' ? lightColor : brandColor,
                },
              ]}
            />

            <View
              style={[
                styles.homeBody,
                {
                  borderColor:
                    selected === 'Меню' ? lightColor : brandColor,
                  backgroundColor:
                    selected === 'Меню' ? brandColor : lightColor,
                },
              ]}
            >
              <View
                style={[
                  styles.homeDoor,
                  {
                    borderColor:
                      selected === 'Меню' ? lightColor : brandColor,
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
                  selected === 'Меню' ? lightColor : brandColor,
              },
            ]}
          >
            Меню
          </Text>
        </View>
      </TouchableOpacity>

      
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
                selected === 'Кошик' ? brandColor : 'transparent',
            },
          ]}
        >

          <View style={styles.iconContainer}>

            <View
              style={[
                styles.cartHandle,
                {
                  borderColor:
                    selected === 'Кошик' ? lightColor : brandColor,
                },
              ]}
            />

            <View
              style={[
                styles.cartBasket,
                {
                  borderColor:
                    selected === 'Кошик' ? lightColor : brandColor,
                },
              ]}
            />

            <View style={styles.cartWheels}>
              <View
                style={[
                  styles.dot,
                  {
                    backgroundColor:
                      selected === 'Кошик' ? lightColor : brandColor,
                  },
                ]}
              />
              <View
                style={[
                  styles.dot,
                  {
                    backgroundColor:
                      selected === 'Кошик' ? lightColor : brandColor,
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
                  selected === 'Кошик' ? lightColor : brandColor,
              },
            ]}
          >
            Кошик
          </Text>
        </View>
      </TouchableOpacity>

      
      <TouchableOpacity
        style={styles.tabItem}
        activeOpacity={0.8}
        onPress={() => setSelected('Замовлення')}
      >
        <View
          style={[
            styles.activeArea,
            {
              backgroundColor:
                selected === 'Замовлення' ? brandColor : 'transparent',
            },
          ]}
        >

          <View style={styles.iconContainer}>

            <View
              style={[
                styles.docFrame,
                {
                  borderColor:
                    selected === 'Замовлення' ? lightColor : brandColor,
                },
              ]}
            >
              <View
                style={[
                  styles.docFold,
                  {
                    borderColor:
                      selected === 'Замовлення' ? lightColor : brandColor,
                    backgroundColor:
                      selected === 'Замовлення' ? brandColor : lightColor,
                  },
                ]}
              />

              <View
                style={[
                  styles.docLineLong,
                  {
                    backgroundColor:
                      selected === 'Замовлення' ? lightColor : brandColor,
                  },
                ]}
              />

              <View
                style={[
                  styles.docLineShort,
                  {
                    backgroundColor:
                      selected === 'Замовлення' ? lightColor : brandColor,
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
                  selected === 'Замовлення' ? lightColor : brandColor,
              },
            ]}
          >
            Замовлення
          </Text>
        </View>
      </TouchableOpacity>

      
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
                selected === 'Профіль' ? brandColor : 'transparent',
            },
          ]}
        >

          <View style={styles.iconContainer}>

            <View
              style={[
                styles.profileHead,
                {
                  borderColor:
                    selected === 'Профіль' ? lightColor : brandColor,
                },
              ]}
            />

            <View
              style={[
                styles.profileShoulders,
                {
                  borderColor:
                    selected === 'Профіль' ? lightColor : brandColor,
                },
              ]}
            />

          </View>

          <Text
            style={[
              styles.label,
              {
                color:
                  selected === 'Профіль' ? lightColor : brandColor,
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
    flex: 1,
    alignItems: 'center',
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

  
  docFrame: {
    width: 26,
    height: 32,
    borderWidth: 3,
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
    borderBottomLeftRadius: 4,
  },

  docLineLong: {
    width: 12,
    height: 3,
    borderRadius: 2,
    marginVertical: 2,
  },

  docLineShort: {
    width: 8,
    height: 3,
    borderRadius: 2,
  },


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