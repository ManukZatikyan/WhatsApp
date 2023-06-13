import React, { useEffect } from 'react';
import {  View } from 'react-native';
import { styles } from './styles';
import Logo from '../../components/Logo/Logo';
import { Appearance, useColorScheme } from 'react-native'
import LoginScreens from '../../components/loginScreen/LoginScreen';

const Login: React.FC = () => {
  // let colorScheme = useColorScheme();
  // useEffect(()=>{
  //   console.log(1);
    
  //   console.log(colorScheme);
  //   console.log(1)
  // },[])



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