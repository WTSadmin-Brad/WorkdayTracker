export default {
  name: 'WorkdayTracker',
  extra: {
    enableDevTools: true,
    enableLiveReload: true,
    enableHotReload: true
  },
  updates: {
    fallbackToCacheTimeout: 0
  },
  android: {
    softwareKeyboardLayoutMode: "pan"
  },
  ios: {
    supportsTablet: true
  },
  web: {
    bundler: "metro"
  }
}
