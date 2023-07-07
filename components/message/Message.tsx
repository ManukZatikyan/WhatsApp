import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';

interface Props {
    item: any
    userId: string
    triegle:boolean
}

const Message: React.FC<Props> = ({ item, userId,triegle }) => {
    return <View style={styles.message}>
                 {triegle &&<View style={item.author !== userId ? styles.triangleRight : styles.triangleLeft}/>}
                 <Text style={item.author !== userId ? styles.textRight : styles.textLeft}>{item.body}</Text>
            </View>;
}

export default Message;