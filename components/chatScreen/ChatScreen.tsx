import React from 'react';
import { View, FlatList, TouchableOpacity } from 'react-native'
import { MaterialCommunityIcons } from 'react-native-vector-icons'
import ChatList from '../chatList/ChatList';
import { Data } from '../../types/Interface';
import { styles } from './styles';


interface Props {
    chatData: Data[],
}

const ChatScreen: React.FC<Props> = ({ chatData }: Props) => {
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

export default ChatScreen;