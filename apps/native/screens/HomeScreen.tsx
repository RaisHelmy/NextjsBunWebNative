import { StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';
import { Button } from '@my-monorepo/ui';
import { greet, capitalize, formatDate } from '@my-monorepo/utils';

export default function HomeScreen() {
  const [count, setCount] = useState(0);
  const [greeting, setGreeting] = useState('');

  const handleGreet = () => {
    const message = greet('Mobile Developer');
    setGreeting(message);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>
          {capitalize('welcome to the')}
        </Text>
        <Text style={styles.titleAccent}>Bun Monorepo</Text>
        <Text style={styles.subtitle}>
          React Native + Shared Packages
        </Text>
        <Text style={styles.date}>
          Today: {formatDate(new Date())}
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>
          Shared Components Demo
        </Text>

        <View style={styles.section}>
          <Text style={styles.sectionLabel}>
            Cross-platform Button from @my-monorepo/ui:
          </Text>

          <View style={styles.buttonRow}>
            <Button
              title="Primary"
              onPress={() => setCount(count + 1)}
              variant="primary"
            />
          </View>

          <View style={styles.buttonRow}>
            <Button
              title="Secondary"
              onPress={() => setCount(count - 1)}
              variant="secondary"
            />
          </View>

          <View style={styles.counterBox}>
            <Text style={styles.counterText}>
              Counter: {count}
            </Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionLabel}>
            Shared utilities from @my-monorepo/utils:
          </Text>

          <Button
            title="Greet Me!"
            onPress={handleGreet}
            variant="primary"
          />

          {greeting ? (
            <View style={styles.greetingBox}>
              <Text style={styles.greetingText}>
                {greeting}
              </Text>
            </View>
          ) : null}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9fafb',
    padding: 20,
  },
  header: {
    marginBottom: 24,
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#111827',
    textAlign: 'center',
  },
  titleAccent: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#3B82F6',
    textAlign: 'center',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 18,
    color: '#6B7280',
    textAlign: 'center',
  },
  date: {
    fontSize: 14,
    color: '#9CA3AF',
    marginTop: 4,
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 20,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 16,
  },
  section: {
    marginBottom: 24,
  },
  sectionLabel: {
    fontSize: 14,
    fontWeight: '500',
    color: '#374151',
    marginBottom: 12,
  },
  buttonRow: {
    marginBottom: 12,
  },
  counterBox: {
    backgroundColor: '#EFF6FF',
    borderRadius: 8,
    padding: 16,
    marginTop: 8,
  },
  counterText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1E40AF',
    textAlign: 'center',
  },
  greetingBox: {
    backgroundColor: '#F0FDF4',
    borderRadius: 8,
    padding: 16,
    marginTop: 12,
  },
  greetingText: {
    fontSize: 16,
    color: '#166534',
    textAlign: 'center',
  },
});
