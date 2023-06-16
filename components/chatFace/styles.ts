import { StyleSheet } from 'react-native'


 export const styles = StyleSheet.create({
    container: {
        paddingTop:20,
        paddingLeft:10,
        borderRadius:20,
        borderColor:'#0f0',
        borderWidth:2,
        height:'100%'
        
    },
    message:{
        width:'100%',
        backgroundColor:"black",
    },
    textRight:{
        height:40,
        alignSelf: "flex-end",
        backgroundColor:'#0f0',
        borderRadius:10,
        borderWidth:2,
        paddingLeft:10,
        paddingBottom:5,
        paddingTop:10,
    },
    textLeft:{
        height:40,
        alignSelf: "flex-start",
        backgroundColor:'#0f0',
        borderRadius:10,
        borderWidth:2,
        paddingLeft:10,
        paddingBottom:5,
        paddingTop:10,
    }
   

})