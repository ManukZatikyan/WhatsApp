import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'






const Tab = createMaterialTopTabNavigator()
const Navigation = ({ children }: any) => {
    return (
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
                }
            }}
        >
            {children}
        </Tab.Navigator>
    )
}

export default Navigation


