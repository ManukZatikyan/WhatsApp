import React, { useState } from 'react';
import { Text, TextInput, View } from 'react-native';
import { styles } from './styles';
import TextButton from '../textButton/TextButton';
import { Login } from '../../types/Interface';
import { loginUser } from '../../redux/auth/authSlice';
import { useAppDispatch } from '../../redux/hook';


const LoginScreens: React.FC = () => {
    const [errorMessage, setErrorMessage] = useState<boolean>(false)
    const [user, setUser] = useState<Login>({ emailOrPhoneNumber: 'zatikyanmanch@gmail.com', password: 'manuk777' })
    // const [user, setUser] = useState<Login>({ emailOrPhoneNumber: 'yuraalaverdyan@gmail.com', password: 'yura777' })
    const dispatch=useAppDispatch()
    const handleLogin = async (LoginUser: Login) => {
        // if () {
        //     setErrorMessage(false)
        // } else {
        //     setErrorMessage(true)
        // }
        dispatch(loginUser(LoginUser)).unwrap()
    }
    function data(){
        
    }
    return (<View style={styles.container}>
        <View style={styles.titleContainer}>
            <Text style={styles.title}>Կարաս մտնես друг мой</Text>
        </View>
        <Text style={styles.inputLabel}>Email Or Phone Number</Text>
        <TextInput style={styles.input} selectionColor={'#0e806a'} onChangeText={(emailOrPhoneNumber) => setUser({ ...user, emailOrPhoneNumber: emailOrPhoneNumber })} value={user.emailOrPhoneNumber} />
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
