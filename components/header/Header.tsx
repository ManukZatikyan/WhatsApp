import { Feather, Fontisto, MaterialCommunityIcons } from '../../assets/Icons'
import { View, Text, TouchableOpacity } from 'react-native'
import { styles } from './styles'
import React from 'react'

import { useNavigationState } from '@react-navigation/native';

const Header = () => {

    const navigationState = useNavigationState(state => state);
    const currentRoute = navigationState?.routes[navigationState.index];
    const tabScreenName = currentRoute?.name;

    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Text style={styles.headerText}>WhatsApp</Text>
                <View style={styles.iconContainer}>
                    <TouchableOpacity
                        onPress={() => { console.log(1) }}
                    >
                        <Feather name='camera' size={20} color='white' style={styles.icon} />
                    </TouchableOpacity>
                    {tabScreenName !== "Community" && <TouchableOpacity
                        onPress={() => { console.log(2) }}
                    >
                        <Fontisto name='search' size={20} color='white' style={styles.icon} />
                    </TouchableOpacity>}
                    <TouchableOpacity
                        onPress={() => { console.log(3) }}
                    >
                        <MaterialCommunityIcons name='dots-vertical' size={20} color='white' style={styles.icon} />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default Header


