import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { MaterialCommunityIcons } from '../assets/Icons';
import { selectData } from '../redux/auth/authSlice';
import Community from '../views/community/Community';
import Status from '../views/status/Status';
import { StyleSheet } from 'react-native';
import Calls from '../views/calls/Calls';
import Login from '../views/login/Login';
import {useSelector} from 'react-redux';
import Navigation from './Navigation';
import ChatScreen from '../views/chatScreen/ChatScreen';
import React from 'react';
import TestView from '../views/testView/TestView';
import ChatFace from '../components/chatFace/ChatFace';

const Tab = createMaterialTopTabNavigator();
const Root = createNativeStackNavigator();

const AppNavigationWrapper: React.FC = () => {
    const auth = useSelector(selectData)
    function DashboardStack() {
        return (
            <Navigation>
                <Tab.Screen
                    name='Community'
                    component={ChatFace}
                    options={{
                        tabBarIcon: ({ color }) => {
                            return <MaterialCommunityIcons name='account-group' size={24} color={color} />
                        },
                        tabBarLabelStyle: styles.tabBarLabel
                    }}
                />
                <Tab.Screen name='Chat' component={ChatScreen} />
                <Tab.Screen name='Status' component={Status} />
                <Tab.Screen name='Calls' component={Calls} />
            </Navigation>
        );
    }

    return <>
        <Root.Navigator>
            {auth.id  ? (
                <>
                    <Root.Screen
                        name={"Dashboard"}
                        component={DashboardStack}
                        options={{ headerShown: false }}
                    />
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
                </>
            )}
        </Root.Navigator>
    </>;
}

export default AppNavigationWrapper;



const styles = StyleSheet.create({
    tabBarLabel: {
        display: 'none'
    }
})