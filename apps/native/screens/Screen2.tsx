import { StyleSheet, Text, View } from 'react-native';

export default function Screen2() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Screen 2</Text>
      <Text style={styles.subtitle}>This is a sample blank screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9fafb',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#6B7280',
  },
});
