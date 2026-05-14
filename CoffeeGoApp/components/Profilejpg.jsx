import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ProfileSection = () => {
  
  const brandColor = '#4F2F00';


  return (
    <View style={styles.profileContainer}>
      
      <Text style={[styles.sectionTitle, { color: brandColor }]}>Профіль</Text>

     
      <View style={styles.avatarWrapper}>
        <View style={[styles.headCircle, { borderColor: brandColor }]} />
        <View style={[styles.bodyArch, { borderColor: brandColor }]} />
      </View>

      
      <View style={styles.infoContainer}>
        <Text style={[styles.userName, { color: brandColor }]}>Іван Петренко</Text>
        <Text style={styles.userEmail}>ivan@example.com</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  profileContainer: {
    alignItems: 'center',
    paddingVertical: 30,
    backgroundColor: '#FFF0E4', 
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
    color: '#7D7D7D',
    marginTop: 4,
  },
});

export default ProfileSection;