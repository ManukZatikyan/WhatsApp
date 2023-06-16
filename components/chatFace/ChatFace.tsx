import  Chat  from '../../data/Chat';
import { View,Text,FlatList } from 'react-native';
import { styles } from './styles';
import React, { useState } from 'react';
import { Chats } from '../../types/Interface';

const ChatFace: React.FC = () => {

  const [chat,setChat]=useState(Chat)
  const userId=1
  // console.log(chat);
  

  return <View style={styles.container}>
    <FlatList
        data={chat}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.message}>
            <Text style={item.fromId!==userId?styles.textRight:styles.textLeft}>{item.message}</Text>
          </View>
          )}
            />
  </View>
}

export default ChatFace;