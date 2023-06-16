import { View, TouchableOpacity, Text } from 'react-native';
import React, { useState } from 'react';
import { styles } from './styles';
interface Props {
  children: string
  onPress: VoidFunction
  disabled?: boolean
  width: number | string
  height: number | string
}

const TextButton: React.FC<Props> = ({ children, onPress, disabled, width, height }) => {

  return <TouchableOpacity onPress={onPress} disabled={disabled ? disabled : false} style={[styles.button, { width: width, height: height }]} activeOpacity={0.5} >
    <View >
      <Text style={{ color: '#fff' }}>{children}</Text>
    </View>
  </TouchableOpacity>;
}

export default TextButton;