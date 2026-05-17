import React, { useContext } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';

import ProfileSection from '../components/Profilejpg';
import MenuOptions from '../components/MenuOptions';
import { ThemeContext } from '../components/themeContext';

export default function TestScreen({ onNavigate }) {
  const { theme } = useContext(ThemeContext);

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: theme.colors.background },
      ]}
    >
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <ProfileSection />

        <MenuOptions onSelect={onNavigate} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  scrollContent: {
    alignItems: 'center',
    paddingBottom: 40,
  },
});