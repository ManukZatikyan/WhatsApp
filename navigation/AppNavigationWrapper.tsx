import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { MaterialCommunityIcons } from '../assets/Icons'
import {useSelector} from 'react-redux'
import Chat from '../views/chat/Chat'
import Calls from '../views/calls/Calls'
import Status from '../views/status/Status'
import Community from '../views/community/Community'
import Login from '../views/login/Login'
import Navigation from './Navigation';
import Header from '../components/header/Header'
import { selectData } from '../redux/auth/authSlice';


const Tab = createBottomTabNavigator();
const Root = createNativeStackNavigator();
const Payee = createStackNavigator();



const AppNavigationWrapper: React.FC = () => {
    const auth = useSelector(selectData)
    console.log(auth.id);
    


    function DashboardStack() {
        return (
            <Navigation>
                <Tab.Screen
                    name='Community'
                    component={Community}
                    options={{
                        tabBarIcon: ({ color }) => {
                            return <MaterialCommunityIcons name='account-group' size={24} color={color} />
                        },
                        tabBarLabelStyle: styles.tabBarLabel
                    }}

                />
                <Tab.Screen name='Chat' component={Chat} />
                <Tab.Screen name='Status' component={Status} />
                <Tab.Screen name='Calls' component={Calls} />
            </Navigation>
        );
    }


    return <>
        <Root.Navigator
            screenOptions={{
                header: () => {  return <Header/> ;},
            }}
        >
            {auth.id  ? (
                <>
                    <Root.Screen
                        name={"Dashboard"}
                        component={DashboardStack}
                        options={{ headerShown: false }}
                    />
                    {/* <Root.Screen
                        options={{ headerShown: false }}
                        name='Community'
                        component={Community}
                    />
                    <Root.Screen
                        name="Chat"
                        component={Chat}
                        options={{ headerShown: false }}
                    />
                    <Root.Screen
                        options={{ headerShown: false }}
                        name='Status'
                        component={Status}
                    />
                    <Root.Screen
                        options={{ headerShown: false }}
                        name='Calls'
                        component={Calls}
                    /> */}
                </>
            ) : (
                <>
                    <Root.Screen
                        name={"login"}
                        component={Login}
                        options={{
                            headerShown: false,
                        }}
                    />
                    <Root.Screen
                        name={"Chat1"}
                        component={Chat}
                        options={{
                            headerShown: false,
                        }}
                    />
                </>
            )}
        </Root.Navigator>
    </>;
}
const styles = StyleSheet.create({
    tabBarLabel: {
        display: 'none'
    }

})
export default AppNavigationWrapper;