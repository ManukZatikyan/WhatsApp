import React, { useState } from 'react';
import { Text, TextInput, View } from 'react-native';
import { styles } from './styles';
import TextButton from '../textButton/TextButton';
import { useDispatch } from "react-redux";
import { loginUser } from '../../redux/auth/authSlice';

interface User {
    email: string
    password: string
}


const LoginScreens: React.FC = () => {
    const [errorMessage, setErrorMessage] = useState<boolean>(false)
    const [user, setUser] = useState<User>({ email: 'Manuk@gmail.com', password: 'Manuk0123' })
    const dispatch = useDispatch();
    const handleLogin = async (LoginUser: User) => {
        // if () {
        //     setErrorMessage(false)
        // } else {
        //     setErrorMessage(true)
        // }
        dispatch(loginUser(LoginUser))
    }

    return (<View style={styles.container}>
        <View style={styles.titleContainer}>
            <Text style={styles.title}>Կարաս մտնես друг мой</Text>
        </View>
        <Text style={styles.inputLabel}>Email</Text>
        <TextInput style={styles.input} selectionColor={'#0e806a'} onChangeText={(email) => setUser({ ...user, email: email })} value={user.email} />
        <Text style={styles.inputLabel}>Password</Text>
        <TextInput style={styles.input} selectionColor={'#0e806a'} onChangeText={(password) => setUser({ ...user, password: password })} secureTextEntry={true} value={user.password} />
        <View style={styles.buttonContainer}>
            <TextButton children="Login" onPress={() => { handleLogin(user) }} width={150} height={50} />
        </View>
        {
            errorMessage && <View style={styles.errorMessageContainer}> 
                <Text style={{color:'#f00'}}>Հնչի սխալ կհավքես, հն?</Text>  
            </View>
        }

        <View style={styles.signupTextContainer}>
            <Text style={styles.signupText}>Եթե չունես հաշիվ, խնդիր չկա, կարող ես դուրս գալ ծրագրից։Մենք չունենք Գրանցման հնարավորություն։</Text>
        </View>
    </View>
    );
}



export default LoginScreens
