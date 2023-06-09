import { StyleSheet } from 'react-native'


export const styles = StyleSheet.create({
    loader:{
        position:'absolute',
        width:'100%',
        height:'100%',
        justifyContent:'center',
        alignItems:'center',
        zIndex: 100,
        backgroundColor:'#0009'
    },
    container: {
        justifyContent:'center',
        alignItems:'center',
        position:'relative',
        width: 120,
        height: 120,
        backgroundColor: '#fff',
        borderRadius: 25,
    },
    loading: {
        width: 80,
        height: 80,   
    }

})