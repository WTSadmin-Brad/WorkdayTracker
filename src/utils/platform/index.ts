import { Platform, Dimensions, StatusBar } from 'react-native';

export const isIOS = Platform.OS === 'ios';
export const isAndroid = Platform.OS === 'android';
export const isWeb = Platform.OS === 'web';

export const { width: WINDOW_WIDTH, height: WINDOW_HEIGHT } = Dimensions.get('window');

export const getStatusBarHeight = (): number => {
  if (isIOS) {
    return 44; // Default iOS status bar height
  }
  if (isAndroid) {
    return StatusBar.currentHeight || 0;
  }
  return 0; // Web
};

export const getSafeAreaInsets = () => {
  if (isIOS) {
    return {
      top: 44,
      bottom: 34,
      left: 0,
      right: 0,
    };
  }
  return {
    top: getStatusBarHeight(),
    bottom: 0,
    left: 0,
    right: 0,
  };
};

export const getDeviceType = () => {
  const { width, height } = Dimensions.get('window');
  const aspectRatio = height / width;

  if (isWeb) {
    return width > 768 ? 'tablet' : 'phone';
  }

  if (aspectRatio > 1.6) {
    return 'phone';
  }
  return 'tablet';
};

export const getPlatformElevation = (elevation: number) => {
  if (isIOS) {
    return {
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: elevation,
      },
      shadowOpacity: 0.25,
      shadowRadius: elevation,
    };
  }
  return {
    elevation,
  };
};
