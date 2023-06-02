import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { styles } from './styles'
import DATA from '../../data/ChatData'
import { Data } from '../../types/Interface'
import ChatList from '../../components/chatList/ChatList'

const Chat = () => {
  const [chatData, setChatData] = useState<Data[]>(DATA)

  useEffect(() => {
    setChatData(DATA)
  })
  

  
  return (
    <View style={styles.container}>
      <FlatList
        data={chatData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={ChatList}
        // style={}
      />
    </View>
  )
}

export default Chat