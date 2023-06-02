import { StyleSheet } from 'react-native'


export const styles = StyleSheet.create({
   
    image: {
        width: 50,
        height: 50,
        backgroundColor: '#128c7e',
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',


    },
    chatFirstContainer:{
        flexDirection: 'row',
        paddingTop:16,
        marginRight: 16,
        marginLeft: 16,
    },
    chatContainer: {
        flexDirection: 'row',
        marginRight: 16,
        marginLeft: 16,
    },
    chatContent: {
        flex: 5,
        borderBottomWidth: 0,
        marginLeft: 16,
        paddingBottom: 16,
        marginBottom: 13,
    },
    chatHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 2,
        marginTop: 4,
    },
    chatName: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    chatTime: {
        fontSize: 12,
        color: '#a0a093'
    },
    message: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    chatMessage: {
        fontSize: 14,
        color:'#a0a09e',
        width:'90%'
    },
    totalUnread: {
        fontSize:10,
        color:'#fff',
        fontWeight:'600' 
    },
    unreadContainer: {
        height:20,
        width:25,
        borderRadius:20,
        backgroundColor:'#25d366',
        alignItems:'center',
        justifyContent:'center'
    },
})