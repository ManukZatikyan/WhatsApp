import { View, FlatList, TouchableOpacity } from 'react-native'
import { MaterialCommunityIcons } from '../../assets/Icons'
import { Data } from '../../types/Interface';
import ChatList from '../chatList/ChatList';
import { styles } from './styles';
import React from 'react';



interface Props {
    chatData: any[],
    navigation:any
}

const ChatListScreen: React.FC<Props> = ({ chatData,navigation }: Props) => {
    return (
        <>
            <View style={styles.container}>
                {
                    chatData?.map((item:any,index:number)=>{
                        return <ChatList navigation={navigation}  item={item} index={index} key={item._id}/>
                    })
                }
            </View>
            <TouchableOpacity
                style={styles.chatButton}
                onPress={() => ('#')}
            >
                <MaterialCommunityIcons name='android-messages' size={24} color='white' />
            </TouchableOpacity>
        </>
        );
}

export default ChatListScreen;