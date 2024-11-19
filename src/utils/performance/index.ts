import { Performance } from '@react-native-firebase/perf';

export const startTrace = async (traceName: string) => {
  try {
    return await Performance.startTrace(traceName);
  } catch (error) {
    console.error('Failed to start performance trace:', error);
    return null;
  }
};

export const measureAppStart = async () => {
  const trace = await startTrace('app_start');
  if (trace) {
    // Add custom metrics if needed
    await trace.putMetric('startup_time', performance.now());
    await trace.stop();
  }
};
