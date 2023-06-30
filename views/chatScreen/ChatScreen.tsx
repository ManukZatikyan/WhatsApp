import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native'
import ChatListScreen from '../../components/chatListScreen/ChatListScreen'
import React, { useEffect, useState } from 'react'
import { Data } from '../../types/Interface'
import DATA from '../../data/ChatData'
import { useAppDispatch } from '../../redux/hook'
import { getUsderChats } from '../../redux/chat/chatSlice'

const ChatScreen = () => {
  const dispatch=useAppDispatch()
  const [chatData, setChatData] = useState<Data[]>(DATA)
  useEffect(() => {
    dispatch(getUsderChats({userId:"64944422d1c4c0ce82f47973"})).unwrap();
    setChatData(DATA)
  }, [])

  return (
    <ChatListScreen chatData={chatData} />
  )
}

export default ChatScreen