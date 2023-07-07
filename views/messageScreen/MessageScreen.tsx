import React from 'react';
import { View } from 'react-native';

import { styles } from './styles';
import ChatFace from '../../components/chatFace/ChatFace';

const MessageScreen: React.FC = ({navigation,route}:any) => {
  const { item  } = route.params
 
  return <ChatFace item={item}/>;
}

export default MessageScreen;