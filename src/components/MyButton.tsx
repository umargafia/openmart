import React from 'react';
import {
  Pressable,
  StyleSheet,
  Text,
  StyleProp,
  ViewStyle,
} from 'react-native';

import { ColorConstant } from '../utilities/Theme';

interface MyButtonProps {
  text: string;
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
  background?: string;
  color?: string;
  iconButton?: string;
  iconColor?: string;
}

const MyButton: React.FC<MyButtonProps> = ({
  text,
  onPress,
  style,
  background,
  color,
  iconButton,
}) => {
  return (
    <Pressable
      onPress={onPress}
      android_ripple={{ color: ColorConstant.primary }}
      style={({ pressed }) => [
        styles.container,
        { transform: [{ scale: pressed ? 0.9 : 1 }] },
        background !== undefined && { backgroundColor: background },
        style,
      ]}
    >
      {!iconButton && (
        <Text style={[styles.text, color !== undefined && { color }]}>
          {text}
        </Text>
      )}
    </Pressable>
  );
};

export default MyButton;

const styles = StyleSheet.create({
  container: {
    backgroundColor: ColorConstant.primary,
    padding: 10,
    width: '45%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    paddingVertical: 20,
    margin: 10,
    marginHorizontal: 0,
  },
  text: {
    color: '#fff',
    textAlign: 'center',
    textTransform: 'uppercase',
    fontWeight: '600',
    fontSize: 18,
  },
});
