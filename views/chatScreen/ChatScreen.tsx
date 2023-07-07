import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native'
import ChatListScreen from '../../components/chatListScreen/ChatListScreen'
import React, { useEffect, useState } from 'react'
import { Data } from '../../types/Interface'
import DATA from '../../data/ChatData'
import { useAppDispatch, useAppSelector } from '../../redux/hook'
import { getUsderChats, selectChat } from '../../redux/chat/chatSlice'
import { selectUser } from '../../redux/auth/authSlice'

const ChatScreen = ({navigation}) => {
  const auth = useAppSelector(selectUser)
  const dispatch=useAppDispatch()
  const [chatData, setChatData] = useState<Data[]>(DATA)
  const users=useAppSelector(selectChat)

  useEffect(() => {
    dispatch(getUsderChats({userId:auth?.userId}))
    setChatData(DATA)
  }, [])

  return <>
    {users && <ChatListScreen chatData={users} navigation={navigation}/>}
    </>
  
}

export default ChatScreen