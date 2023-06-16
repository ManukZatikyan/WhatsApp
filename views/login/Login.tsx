import LoginScreens from '../../components/loginScreen/LoginScreen';
import Logo from '../../components/Logo/Logo';
import {  View } from 'react-native';
import { styles } from './styles';
import React from 'react';

const Login: React.FC = () => {

  return (
    <View style={styles.container}>
      <LoginScreens/>
      <View style={styles.logo}>
        <Logo text={true} />
      </View>
    </View>
  )
}

export default Login;