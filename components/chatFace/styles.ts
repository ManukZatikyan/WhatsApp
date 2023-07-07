import { StyleSheet } from 'react-native'
import Constants from 'expo-constants'
export const styles = StyleSheet.create({
    container: {
        height: '100%',
        backgroundColor: "#E5E5E5",
    },
    userInfo: {
        height: 70,
        width: '100%',
        backgroundColor: "#0e806a",
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: Constants?.statusBarHeight
    },
    userInfo1: {
        paddingLeft: 10,
        alignItems: 'center',
        flexDirection: 'row',
        gap: 15
    },
    userInfo2: {
        paddingRight: 20,
        alignItems: 'center',
        flexDirection: 'row',
        gap: 30
    },
    message: {
        width: '100%',
    },
    back: {
        width: 30,
        height: 26,

    },
    icons: {

    },
    userImage: {
        width: 44,
        height: 44,
        borderRadius: 22,

    },
    userName: {
        fontSize: 18,
        color: '#fff',
    },
    userPosition: {

    },
    videoCall: {

    },
    audioCall: {

    },
    settings: {

    },
    textRight: {
        height: 40,
        alignSelf: "flex-end",
        backgroundColor: '#0f0',
        borderRadius: 10,
        borderWidth: 2,
        paddingLeft: 10,
        paddingBottom: 5,
        paddingTop: 10,
    },
    textLeft: {
        height: 40,
        alignSelf: "flex-start",
        backgroundColor: '#0f0',
        borderRadius: 10,
        borderWidth: 2,
        paddingLeft: 10,
        paddingBottom: 5,
        paddingTop: 10,
    },
    inputContainer: {
        width: '100%',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        gap: 10
    },
    inputs: {
        height: 50,
        width: '80%',
        marginTop: 20,
        marginBottom: 10,
        borderRadius: 25,
        backgroundColor: '#fff',
        marginLeft: 15,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        gap:7,
        paddingLeft:20
    },
    input: {
        width: '65%',
        height: 50,
        
    },
    smile: {
        height: 20,
        width: 20,
      
    },
    screpka: {
     
    },
    camera: {
        
    },
    microphoneView: {
        height: 50,
        width: 50,
        borderRadius: 25,
        backgroundColor: "#0e806a",
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
        marginBottom: 10,

    },
    microphone: {

    }



})