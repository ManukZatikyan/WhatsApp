import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { MaterialCommunityIcons } from 'react-native-vector-icons'


import Chat from '../views/chat/Chat'
import Calls from '../views/calls/Calls'
import Status from '../views/status/Status'
import Community from '../views/community/Community'



const Tab = createMaterialTopTabNavigator()
const Navigation = () => {
    return (
        <Tab.Navigator
            initialRouteName='Chat'
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
            <Tab.Screen
             name='Community'
              component={Community}
              options={{
                tabBarIcon:({color})=>{
                    return <MaterialCommunityIcons name='account-group' size={24} color={color} />
                },
                tabBarLabelStyle:styles.tabBarLabel
              }}
              />
            <Tab.Screen name='Chat' component={Chat} />
            <Tab.Screen name='Status' component={Status} />
            <Tab.Screen name='Calls' component={Calls} />
        </Tab.Navigator>
    )
}

export default Navigation


const styles = StyleSheet.create({
   tabBarLabel:{
    display:'none'
   }

})