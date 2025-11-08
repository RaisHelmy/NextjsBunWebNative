/**
 * Cross-platform Button component
 * Works with both React Native and React (web)
 */

import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ViewStyle,
  TextStyle,
  Platform,
} from 'react-native';

export interface ButtonProps {
  /**
   * Button label text
   */
  title: string;
  /**
   * Callback function when button is pressed
   */
  onPress: () => void;
  /**
   * Button variant/style
   */
  variant?: 'primary' | 'secondary' | 'outline';
  /**
   * Whether the button is disabled
   */
  disabled?: boolean;
  /**
   * Custom style for the button container
   */
  style?: ViewStyle;
}

/**
 * A reusable button component that works across web and native platforms
 */
export function Button({
  title,
  onPress,
  variant = 'primary',
  disabled = false,
  style,
}: ButtonProps) {
  const buttonStyle = [
    styles.button,
    variant === 'primary' && styles.primary,
    variant === 'secondary' && styles.secondary,
    variant === 'outline' && styles.outline,
    disabled && styles.disabled,
    style,
  ].filter(Boolean);

  const textStyle = [
    styles.text,
    variant === 'primary' && styles.primaryText,
    variant === 'secondary' && styles.secondaryText,
    variant === 'outline' && styles.outlineText,
    disabled && styles.disabledText,
  ].filter(Boolean);

  return (
    <TouchableOpacity
      style={buttonStyle}
      onPress={onPress}
      disabled={disabled}
      activeOpacity={0.7}
    >
      <Text style={textStyle}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 120,
    ...Platform.select({
      web: {
        cursor: 'pointer',
        userSelect: 'none',
      } as any,
    }),
  },
  primary: {
    backgroundColor: '#3B82F6',
  },
  secondary: {
    backgroundColor: '#6B7280',
  },
  outline: {
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: '#3B82F6',
  },
  disabled: {
    backgroundColor: '#D1D5DB',
    opacity: 0.6,
  },
  text: {
    fontSize: 16,
    fontWeight: '600',
  },
  primaryText: {
    color: '#FFFFFF',
  },
  secondaryText: {
    color: '#FFFFFF',
  },
  outlineText: {
    color: '#3B82F6',
  },
  disabledText: {
    color: '#9CA3AF',
  },
});
