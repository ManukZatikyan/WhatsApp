import React from 'react';
import { Text, View } from 'react-native';
import { styles } from './styles';
import Logo from '../../components/Logo/Logo';

const Login: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Logo text={true} />
      </View>
    </View>
  )
}

export default Login;