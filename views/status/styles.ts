import { StyleSheet } from 'react-native'


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    myStatusContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 16
    },
    image: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 16

    },
    myStatusHeading: {
        fontSize: 16,
        fontWeight: '600',
    },
    myStatusSubtext: {
        fontSize: 14,
        color: 'grey'
    },
    viewedStatus: {
        fontSize: 14,
        fontWeight: '600',
        color: 'grey',
        marginTop: 5,
        marginBottom: 5,
        marginLeft: 16,

    },
    viewedStatusContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 12,
    },
    writeButton: {
        position: 'absolute',
        bottom: 100,
        right: 28,
        backgroundColor: '#e8e8e8',
        width: 50,
        height: 50,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center'
    },
    cameraButton: {
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
    camera:{
        flex:1
    },

    preview:{
        height:400,
        width:"100%",
    }
})