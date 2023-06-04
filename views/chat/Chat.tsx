import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import DATA from '../../data/ChatData'
import { Data } from '../../types/Interface'
import ChatScreen from '../../components/chatScreen/ChatScreen'

const Chat = () => {
  const [chatData, setChatData] = useState<Data[]>(DATA)
  useEffect(() => {
    setChatData(DATA)
  })
  return (
    <ChatScreen chatData={chatData}/>
  )
}

export default Chat