import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import Header from '../components/header/Header'
import React from 'react'
const Tab = createMaterialTopTabNavigator()

const Navigation = ({ children }: any) => {
    return (
        <>
        <Header/>
        <Tab.Navigator
            initialRouteName='Community'
            screenOptions={{
                tabBarActiveTintColor: 'white',
                tabBarIndicatorStyle: {
                    backgroundColor: 'white',
                },
                tabBarLabelStyle: {
                    fontWeight: 'bold'
                },
                tabBarStyle: {
                    backgroundColor: '#0e806a',
                },
            }}
        >
            {children}
        </Tab.Navigator>
        </>
    )
}

export default Navigation


