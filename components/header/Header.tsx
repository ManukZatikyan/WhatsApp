import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { Feather, Fontisto, MaterialCommunityIcons } from '../../assets/Icons'
const Header = () => {
    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Text style={styles.headerText}>WhatsApp</Text>
                <View style={styles.iconContainer}>
                    <TouchableOpacity>
                        <Feather name='camera' size={20} color='white' style={styles.icon} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Fontisto name='search' size={20} color='white' style={styles.icon} />\
                    </TouchableOpacity>
                    <MaterialCommunityIcons name='dots-vertical' size={21} color='white' style={styles.icon} />
                </View>
            </View>
        </View>
    )
}

export default Header


const styles = StyleSheet.create({
    container: {
        backgroundColor: "#0e806a",
        paddingTop: 50,
        paddingBottom: 8,
    },
    headerContainer: {
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: "space-between",
        marginHorizontal: 16,
    },
    headerText: {
        fontSize: 20,
        color: 'white',
        fontWeight: '500',
    },
    iconContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    icon: {
        marginLeft: 20
    },

})