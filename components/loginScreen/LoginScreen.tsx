import React, { useState } from 'react';
import { Text, TextInput, View } from 'react-native';
import { styles } from './styles';
import TextButton from '../textButton/TextButton';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Users from '../../data/Users';
import { useNavigation } from '@react-navigation/native';
interface User {
    email: string
    password: string
}


const LoginScreens: React.FC = () => {
    const [message, setMessage] = useState('')
    const [user, setUser] = useState<User>({ email: 'Manuk@gmail.com', password: 'Manuk0123' })
    const navigation:any = useNavigation();

    const storeData = async (data: User[]) => {
        const value = data[0]
        try {
            const jsonValue = JSON.stringify(value)
            await AsyncStorage.setItem('user', jsonValue)
        } catch (e) {
            console.log(e);
        }
    }
    const getData = async () => {
        try {
            const value = await AsyncStorage.getItem('user')
            if (value !== null) {
                console.log(value, 'store');

            }
        } catch (e) {
            console.log(e);
        }
    }
    const handleLogin = (loginUser: User) => {
        let login = Users.filter(elem => elem.email === loginUser.email && elem.password === loginUser.password)
        if (login.length) {
            // storeData(login)
            navigation.navigate("Chat1")
            // getData()
        }
    }

    return (<View style={styles.container}>
        <View style={styles.titleContainer}>
            <Text style={styles.title}>Կարաս մտնես друг мой</Text>
        </View>
        <Text style={styles.inputLabel}>email</Text>
        <TextInput style={styles.input} selectionColor={'#0e806a'} onChangeText={(email) => setUser({ ...user, email: email })} value={user.email} />
        <Text style={styles.inputLabel}>password</Text>
        <TextInput style={styles.input} selectionColor={'#0e806a'} onChangeText={(password) => setUser({ ...user, password: password })} secureTextEntry={true} value={user.password} />
        <View style={styles.buttonContainer}>
            <TextButton children="Login" onPress={() => { handleLogin(user) }} width={150} height={50} />
        </View>
        <View style={styles.signupTextContainer}>
            <Text style={styles.signupText}>Եթե չունես հաշիվ, խնդիր չկա, կարող ես դուրս գալ ծրագրից։Մենք չունենք Գրանցման տեղ</Text>
        </View>
    </View>
    );
}



export default LoginScreens
