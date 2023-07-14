import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native'
import ChatListScreen from '../../components/chatListScreen/ChatListScreen'
import React, { useEffect, useState } from 'react'
import { Data } from '../../types/Interface'
import DATA from '../../data/ChatData'
import { useAppDispatch, useAppSelector } from '../../redux/hook'
import { getUsderChats, selectChat } from '../../redux/chat/chatSlice'
import { selectUser } from '../../redux/auth/authSlice'
import { useIsFocused } from '@react-navigation/native'
const ChatScreen = ({navigation}) => {
  const auth = useAppSelector(selectUser)
  const dispatch=useAppDispatch()
  const users=useAppSelector(selectChat)
  const isFocused=useIsFocused()
  
  useEffect(() => {
    dispatch(getUsderChats({userId:auth?.userId}))
  }, [isFocused])

  return <>
    {users && <ChatListScreen chatData={users} navigation={navigation}/>}
    </>
  
}

export default ChatScreen