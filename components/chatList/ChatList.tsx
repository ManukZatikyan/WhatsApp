import { View, Image, Text, TouchableOpacity } from 'react-native';
import { ChatLists } from '../../types/Interface';
import { styles } from './style';
import React from 'react';


const ChatList: React.FC<ChatLists> = ({ item, index, navigation }: ChatLists) => {
    let totalUnread = 0;
    for (let i = item.messages.length - 1; i >= 0; i--) {
        if (item.messages[i].seen === false && item.messages[i].author === item.members[0]._id) {
            totalUnread++
        } else {
            break
        }
    }

    const goToMessage=(item:any)=>{
        navigation.navigate('MessageScreen',{item:item})
    }


    return <TouchableOpacity
        onPress={() => {
            goToMessage(item)
        }}>
        <View style={index === 0 ? styles.chatFirstContainer : styles.chatContainer} key={index}>
            <Image source={require('../../assets/men.jpg')} style={styles.image} />
            <View style={styles.chatContent}>
                <View style={styles.chatHeader}>
                    <Text style={styles.chatName}>{item?.members[0].name}</Text>
                    <Text style={styles.chatTime}>{item?.messages[item?.messages.length - 1].time}</Text>
                </View>
                <View style={styles.message}>
                    <Text
                        style={(item?.messages[item?.messages.length - 1].seen === false && item.messages[item?.messages.length - 1].author === item.members[0]._id) ? styles.chatBoldMessage : styles.chatMessage}
                        numberOfLines={1}
                    >
                        {item.messages[item?.messages.length - 1].author !== item.members[0]._id && <Image source={item?.messages[item?.messages.length - 1].seen === true ? require('../../assets/Icons/seenMark.png') : require('../../assets/Icons/sendMark.png')} style={styles.mark} />}
                        {item?.messages[item?.messages.length - 1].body}
                    </Text>
                    {
                        totalUnread > 0 && (
                            <View style={styles.unreadContainer}>
                                <Text style={styles.totalUnread}>
                                    {totalUnread}
                                </Text>
                            </View>
                        )
                    }
                </View>
            </View>
        </View>
    </TouchableOpacity>
}

export default ChatList;