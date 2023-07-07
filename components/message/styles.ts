
import { StyleSheet } from 'react-native'


export const styles = StyleSheet.create({
    message: {
        backgroundColor: "#E5E5E5",
        margin:1
    },
    textRight: {
        alignSelf: "flex-end",
        minHeight: 40,
        maxWidth:'55%',
        backgroundColor: '#E7FFDB',
        borderRadius: 10,
        paddingLeft: 10,
        paddingRight:10,
        paddingBottom: 5,
        paddingTop: 10,
        marginRight:20,

    },
    textLeft: {
        alignSelf: "flex-start",
        minHeight: 40,
        maxWidth:'55%',
        backgroundColor: '#E7FFDB',
        borderRadius: 6,
        paddingLeft: 10,
        paddingRight:10,
        paddingBottom: 5,
        paddingTop: 10,
        marginLeft:20,
    },
    triangleLeft: {
        height:20,
        width:20,
        position: 'absolute',
        top: 0,
        left: 10,
        backgroundColor: "transparent",
        borderStyle: "solid",
        borderLeftWidth: 1,
        borderRightWidth: 40,
        borderBottomWidth: 39,
        borderLeftColor: "transparent",
        borderRightColor: "transparent",
        borderBottomColor: "#E7FFDB",
        transform: [{ rotate: "180deg" }],
    },
    triangleRight: {
        height:20,
        width:20,
        position: 'absolute',
        top: 0,
        right: 10,
        backgroundColor: "transparent",
        borderStyle: "solid",
        borderLeftWidth: 40,
        borderRightWidth: 1,
        borderBottomWidth: 39,
        borderLeftColor: "transparent",
        borderRightColor: "transparent",
        borderBottomColor: "#E7FFDB",
        transform: [{ rotate: "180deg" }],
    }

})