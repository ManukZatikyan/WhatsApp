import React from 'react';
import { View, Image, Text } from 'react-native';
import { styles } from './style';
import { ChatLists } from '../../types/Interface';
import { TouchableOpacity } from 'react-native-gesture-handler';

const ChatList: React.FC<ChatLists> = ({ item, index }: ChatLists) => {

    return <View style={index === 0 ? styles.chatFirstContainer : styles.chatContainer} key={index}>
        <Image source={require('../../assets/men.jpg')} style={styles.image} />
        <View style={styles.chatContent}>
            <View style={styles.chatHeader}>
                <Text style={styles.chatName}>{item?.name}</Text>
                <Text style={styles.chatTime}>{item?.time}</Text>
            </View>
            <View style={styles.message}>
                <Text
                    style={styles.chatMessage}
                    numberOfLines={1}
                >
                    {item?.lastMessage}
                </Text>
                {
                    item?.totalUnread > 0 && (
                        <View style={styles.unreadContainer}>
                            <Text style={styles.totalUnread}>
                                {item?.totalUnread}
                            </Text>
                        </View>
                    )
                }
            </View>
        </View>
        
    </View>
}

export default ChatList;