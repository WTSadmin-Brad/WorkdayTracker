import React from 'react';
import { Platform, StyleSheet, ViewProps } from 'react-native';
import Animated, { useAnimatedStyle } from 'react-native-reanimated';
import { colors } from '../../constants/theme';

interface GlassContainerProps extends ViewProps {
  intensity?: number; // 0-1, controls the transparency
  tint?: string; // Optional tint color
  blur?: number; // Blur intensity
}

export const GlassContainer: React.FC<GlassContainerProps> = ({
  children,
  intensity = 0.1,
  tint = colors.card.background,
  blur = 10,
  style,
  ...props
}) => {
  const animatedStyle = useAnimatedStyle(() => {
    const backgroundColor = tint || `rgba(255, 255, 255, ${intensity})`;
    
    return {
      backgroundColor,
      borderColor: colors.card.border,
      borderWidth: StyleSheet.hairlineWidth,
      ...Platform.select({
        web: {
          backdropFilter: `blur(${blur}px)`,
          WebkitBackdropFilter: `blur(${blur}px)`,
        },
        default: {
          // Native platforms use backgroundColor for the glass effect
        },
      }),
    };
  });

  return (
    <Animated.View
      style={[styles.container, animatedStyle, style]}
      {...props}
    >
      {children}
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 20,
    overflow: 'hidden',
  },
});
