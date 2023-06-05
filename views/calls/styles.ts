
import { StyleSheet} from 'react-native'


export const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:"#fff",
    }, 
    callContainer:{
        flexDirection:'row',
        alignItems:'center',
        padding:16
    },
    linkContainer:{
        width:50,
        height:50,
        borderRadius:25,
        backgroundColor:'#128c7e',
        alignItems:'center',
        justifyContent:'center',
        marginRight:16
    },
    callLink:{
        fontSize:16,
        fontWeight:'600'
    },
    callSubtext:{
        fontSize:12,
        color:'grey'
    },
    recentText:{
        fontSize:15,
        fontWeight:'600',
        color:'grey',
        marginVertical:10,
        marginLeft:16
    },
    image:{
        width:50,
        height:50,
        borderRadius:25,
        marginRight:16
    },
    callIconContainer:{
        justifyContent:'space-between',
        flex:1
    },
    callDetails:{
        flexDirection:'row',
        alignItems:'center',
    },
    callName:{
        fontSize:16,
        fontWeight:'600'
    },
    callTime:{
        fontSize:14,
        color:'grey',
        marginLeft:5
    },
    callButton: {
        position: 'absolute',
        bottom: 30,
        right: 20,
        backgroundColor: '#0e806a',
        width: 60,
        height: 60,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
    },
})