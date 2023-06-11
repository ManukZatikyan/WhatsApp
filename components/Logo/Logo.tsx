import React from 'react';
import { Image, Text, View } from 'react-native';
import { styles } from './styles';

interface Props{
    text:boolean
}

const Logo: React.FC<Props> = ({text}) => {
    return <View style={styles.container}>
        {text && <Text style={styles.text}>From</Text>}
        <Image source={require('../../assets/zatikyan-logo.png')}  style={styles.image}></Image>
    </View>;
}

export default Logo;