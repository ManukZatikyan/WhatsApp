import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native'
import ChatListScreen from '../../components/chatListScreen/ChatListScreen'
import React, { useEffect, useState } from 'react'
import { Data } from '../../types/Interface'
import DATA from '../../data/ChatData'

const ChatScreen = () => {
  const [chatData, setChatData] = useState<Data[]>(DATA)
  useEffect(() => {
    setChatData(DATA)
  }, [])

  return (
    <ChatListScreen chatData={chatData} />
  )
}

export default ChatScreen