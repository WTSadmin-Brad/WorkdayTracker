import Reactotron from 'reactotron-react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'

Reactotron
  .setAsyncStorageHandler(AsyncStorage)
  .configure({
    name: 'WorkdayTracker',
    host: 'localhost'
  })
  .useReactNative({
    asyncStorage: true,
    networking: true,
    editor: true
  })
  .connect()

// Make Reactotron available globally
declare global {
  interface Console {
    tron: any;
  }
}
