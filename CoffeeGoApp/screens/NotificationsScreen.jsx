import React, { useContext, useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { ThemeContext } from '../components/themeContext';

const mockNotifications = [
  {
    id: 1,
    title: 'Ваше замовлення прийнято',
    message: 'Ми почали готувати вашу каву ☕',
    time: '10:30',
  },
  {
    id: 2,
    title: 'Замовлення готове',
    message: 'Можете забрати замовлення',
    time: '09:15',
  },
  {
    id: 3,
    title: 'Знижка 10%',
    message: 'Тільки сьогодні на всі напої',
    time: 'Вчора',
  },
];

export default function NotificationsScreen() {
  const { theme } = useContext(ThemeContext);
  const [notifications] = useState(mockNotifications);

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: theme.colors.background },
      ]}
    >
      <Text style={[styles.title, { color: theme.colors.primary }]}>
        Сповіщення
      </Text>

      {notifications.length === 0 ? (
        <View style={styles.empty}>
          <Text style={{ color: theme.colors.text }}>
            Немає нових сповіщень
          </Text>
        </View>
      ) : (
        <ScrollView contentContainerStyle={styles.list}>
          {notifications.map((item) => (
            <View
              key={item.id}
              style={[
                styles.card,
                {
                  backgroundColor: theme.colors.card,
                  borderColor: theme.colors.primary,
                },
              ]}
            >
              <Text style={[styles.cardTitle, { color: theme.colors.text }]}>
                {item.title}
              </Text>

              <Text style={[styles.message, { color: theme.colors.text }]}>
                {item.message}
              </Text>

              <Text style={[styles.time, { color: theme.colors.primary }]}>
                {item.time}
              </Text>
            </View>
          ))}
        </ScrollView>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    alignItems: 'center',
  },

  title: {
    fontSize: 26,
    fontWeight: '700',
    marginBottom: 15,
  },

  list: {
    paddingBottom: 30,
    alignItems: 'center',
  },

  card: {
    width: 334,
    padding: 15,
    borderWidth: 2,
    borderRadius: 14,
    marginBottom: 12,
  },

  cardTitle: {
    fontSize: 16,
    fontWeight: '600',
  },

  message: {
    marginTop: 5,
    fontSize: 14,
    opacity: 0.9,
  },

  time: {
    marginTop: 8,
    fontSize: 12,
  },

  empty: {
    marginTop: 40,
  },
});