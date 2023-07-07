import { View, Text, TextInput, Image, TouchableOpacity, Pressable } from 'react-native';
import { styles } from './styles';
import React, { useRef, useEffect, useState } from 'react';
import Message from '../message/Message'
import { ScrollView } from 'react-native';
import { useAppDispatch, useAppSelector } from '../../redux/hook';
import { selectUser } from '../../redux/auth/authSlice';
import { add_Message } from '../../redux/chat/chatSlice';

const ChatFace: React.FC<any> = ({ item }: any) => {
  const scrollViewRef = useRef(null)
  const [newMessage, setNewMessage] = useState('')
  const messages = item?.messages
  const user = useAppSelector(selectUser)
  const chatUser = item?.members[0]
  const dispatch=useAppDispatch()
  const addMessage = () => {
    if (newMessage !== '') {
      const messageBody = {
        chatId: item?._id,
        message: {
          author: user.userId,
          body: newMessage,
          time: new Date().toString(),
          seen: false
        }
      }
      
      console.log(messageBody);
      dispatch(add_Message(messageBody))
      setNewMessage('')
    }
  }
  useEffect(() => {
    scrollViewRef.current.scrollToEnd({ animated: true })
  }, [])
  return <View style={styles.container}>
    <View style={styles.userInfo}>
      <View style={styles.userInfo1}>
        <TouchableOpacity onPress={() => { console.log('back') }}>
          <Image source={require('../../assets/Icons/back.png')} style={styles.back} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => { console.log('image') }}>
          <Image source={require('../../assets/men.jpg')} style={styles.userImage} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => { console.log('name') }}>
          <Text style={styles.userName}>{chatUser?.name}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.userInfo2}>
        <TouchableOpacity onPress={() => { console.log("videoCall") }}>
          <Image source={require('../../assets/Icons/videoCall.png')} style={styles.icons} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => { console.log('audioCall') }}>
          <Image source={require('../../assets/Icons/audioCall.png')} style={styles.icons} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => { console.log('settings') }}>
          <Image source={require('../../assets/Icons/settings.png')} style={styles.icons} />
        </TouchableOpacity>
      </View>
    </View>
    <ScrollView ref={scrollViewRef}>
      {
        messages?.map((item: any, index: number) => {
          return item.author === messages[index - 1]?.author ?
            <Message item={item} userId={chatUser._id} triegle={false} key={item._id} /> :
            <Message item={item} userId={chatUser._id} triegle={true} key={item._id} />
        })
      }
    </ScrollView>
    <View style={styles.inputContainer}>
      <View style={styles.inputs}>
        <TouchableOpacity onPress={() => { console.log("smile") }}>
          <Image source={require('../../assets/Icons/smile.png')} style={styles.smile} />
        </TouchableOpacity>
        <TextInput style={styles.input} placeholder='Message... ' onChangeText={setNewMessage} value={newMessage} />
        <TouchableOpacity onPress={() => { console.log('screpka') }}>
          <Image source={require('../../assets/Icons/screpka.png')} style={styles.screpka} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => { console.log('camera') }}>
          <Image source={require('../../assets/Icons/camera.png')} style={styles.camera} />
        </TouchableOpacity>
      </View>
      <View style={styles.microphoneView}>
        {
          newMessage == '' ?
            <TouchableOpacity onPress={addMessage}>
              <Image source={require('../../assets/Icons/microphone.png')} style={styles.microphone} />
            </TouchableOpacity>
            :
            <TouchableOpacity onPress={addMessage}>
              <Image source={require('../../assets/Icons/sendMessage.png')} style={styles.microphone} />
            </TouchableOpacity>

        }
      </View>
    </View>
  </View>
}

export default ChatFace;