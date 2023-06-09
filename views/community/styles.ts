import { StyleSheet, Platform} from 'react-native'


export const styles = StyleSheet.create({
    container: {
        // ...Platform.select({
        //     ios: {
        //       backgroundColor: 'red',
        //     },
        //     android: {
        //       backgroundColor: 'green',
        //     },
        //     default: {
        //       // other platforms, web for example
        //       backgroundColor: 'blue',
        //     },
        // }),
        top:50,
    }, 
    image:{
        left:90,
    },
    title:{
        top:20,
        fontSize:21,
        fontWeight:'bold',
        left:50,
        letterSpacing:1,
    },
    text:{
        top:40,
        fontSize:16,
        textAlign:'center',
        color:'grey',
        lineHeight:22,
    },
    buttonContainer:{
        top:60,
        width:'100%',
        justifyContent:'center',
        alignItems:'center'
    }
})