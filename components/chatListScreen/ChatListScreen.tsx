import { View, FlatList, TouchableOpacity } from 'react-native'
import { MaterialCommunityIcons } from '../../assets/Icons'
import { Data } from '../../types/Interface';
import ChatList from '../chatList/ChatList';
import { styles } from './styles';
import React from 'react';


interface Props {
    chatData: Data[],
}

const ChatListScreen: React.FC<Props> = ({ chatData }: Props) => {
    return (
        <View style={styles.container}>
            <FlatList
                data={chatData}
                keyExtractor={(item) => item.id.toString()}
                renderItem={ChatList}
            // style={}
            />
            <TouchableOpacity
                style={styles.chatButton}
                onPress={() => ('#')}
            >
                <MaterialCommunityIcons name='android-messages' size={24} color='white' />
            </TouchableOpacity>
        </View>
    );
}

export default ChatListScreen;