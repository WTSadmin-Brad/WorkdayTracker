import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { colors } from './src/constants/theme';
import { AnimationTest } from './src/components/test/AnimationTest';
import { ErrorBoundary } from 'react-error-boundary';

// Configure Reactotron in development
if (__DEV__) {
  import('./src/config/ReactotronConfig').then(() => console.log('Reactotron Configured'));
}

// Error Fallback component
const ErrorFallback = ({ error, resetErrorBoundary }) => {
  return (
    <View style={styles.errorContainer}>
      <Text style={styles.errorTitle}>Something went wrong!</Text>
      <Text style={styles.errorMessage}>{error.message}</Text>
      <Button onPress={resetErrorBoundary} title="Try again" />
    </View>
  );
};

export default function App() {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <GestureHandlerRootView style={styles.container}>
        <View style={styles.container}>
          <StatusBar style="light" />
          <AnimationTest />
        </View>
      </GestureHandlerRootView>
    </ErrorBoundary>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  errorTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  errorMessage: {
    marginBottom: 20,
    textAlign: 'center',
  },
});
