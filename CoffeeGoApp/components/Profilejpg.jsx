import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ThemeContext } from '../components/themeContext';

const ProfileSection = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <View
      style={[
        styles.profileContainer,
        {
          backgroundColor: theme.colors.background,
        },
      ]}
    >
      <Text
        style={[
          styles.sectionTitle,
          {
            color: theme.colors.primary,
          },
        ]}
      >
        Профіль
      </Text>

      <View style={styles.avatarWrapper}>
        <View
          style={[
            styles.headCircle,
            { borderColor: theme.colors.primary },
          ]}
        />
        <View
          style={[
            styles.bodyArch,
            { borderColor: theme.colors.primary },
          ]}
        />
      </View>

      <View style={styles.infoContainer}>
        <Text
          style={[
            styles.userName,
            { color: theme.colors.primary },
          ]}
        >
          Іван Петренко
        </Text>

        <Text style={[styles.userEmail, { color: theme.colors.text }]}>
          ivan@example.com
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  profileContainer: {
    alignItems: 'center',
    paddingVertical: 30,
  },

  sectionTitle: {
    fontSize: 24,
    fontWeight: '500',
    marginBottom: 20,
  },

  avatarWrapper: {
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },

  headCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 4,
    marginBottom: 5,
  },

  bodyArch: {
    width: 70,
    height: 35,
    borderWidth: 4,
    borderBottomWidth: 0,
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
  },

  infoContainer: {
    alignItems: 'center',
  },

  userName: {
    fontSize: 28,
    fontWeight: '600',
    letterSpacing: 0.5,
  },

  userEmail: {
    fontSize: 16,
    marginTop: 4,
  },
});

export default ProfileSection;