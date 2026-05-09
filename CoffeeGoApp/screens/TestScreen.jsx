import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';



import ProfileSection from '../components/Profilejpg'; 
import MenuOptions from '../components/MenuOptions';     

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      
      
      <View style={styles.top}>
     
      </View>

      
      <ScrollView
        style={styles.scrollArea}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        
        <ProfileSection />
        
        
        <MenuOptions />
      </ScrollView>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF0E4',
  },
  top: {
    alignItems: 'center',
    paddingTop: 20,
  },
  scrollArea: {
    flex: 1,
  },
  scrollContent: {
    alignItems: 'center',
    paddingBottom: 40,
  },
});