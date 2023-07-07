import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { MaterialCommunityIcons } from '../assets/Icons';
import { selectUser } from '../redux/auth/authSlice';
import Status from '../views/status/Status';
import { StyleSheet } from 'react-native';
import Calls from '../views/calls/Calls';
import Login from '../views/login/Login';
import Navigation from './Navigation';
import ChatScreen from '../views/chatScreen/ChatScreen';
import React from 'react';
import ChatFace from '../components/chatFace/ChatFace';
import { useAppSelector } from '../redux/hook';
import MessageScreen from '../views/messageScreen/MessageScreen';
import Community from '../views/community/Community';

const Tab = createMaterialTopTabNavigator();
const Root = createNativeStackNavigator();

const AppNavigationWrapper: React.FC = () => {
    const auth = useAppSelector(selectUser)
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
                <Tab.Screen name='Chat' component={ChatScreen} />
                <Tab.Screen name='Status' component={Status} />
                <Tab.Screen name='Calls' component={Calls} />
            </Navigation>
        );
    }
    return <>
        <Root.Navigator>
            { auth.userId ? (
                <>
                    <Root.Screen
                        name={"Dashboard"}
                        component={DashboardStack}
                        options={{ headerShown: false }}
                    />
                    <Root.Screen
                        name={"MessageScreen"}
                        component={MessageScreen}
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