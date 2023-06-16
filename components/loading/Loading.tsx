import { Image, View, Animated, Easing } from 'react-native';
import React, { useEffect, useRef } from 'react';
import { styles } from './styles';

const Loading: React.FC = () => {

  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1000,
      duration: 1000000,
      easing: Easing.linear,
      useNativeDriver: true
    }).start();
  }, [fadeAnim]);
  const spin = fadeAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg']
  })

  return <View style={styles.loader}>
    <View style={styles.container}>
      <Animated.Image style={{ width: 80, height: 80, transform: [{ rotate: spin }] }} source={require('../../assets/Loading.png')} />
    </View>
  </View>
}

export default Loading;