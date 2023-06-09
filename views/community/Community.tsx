import { View, Text, Image } from 'react-native'
import React, { useEffect } from 'react'
import { styles } from './styles'
import TextButton from '../../components/textButton/TextButton'
const Community = () => {

  return (
    <>
      <View style={styles.container}>
        <Image source={require('../../assets/Icons/communityIcon.png')} style={styles.image} />
        <Text style={styles.title}>Introducing communites</Text>
        <Text style={styles.text}> Easly organise your related groups and send announcements. Now, your communities, like neighbourhoods or schools, can have their own space</Text>
        <View style={styles.buttonContainer}>
          <TextButton children='Start your community' disabled={false} onPress={() => { console.log(1) }} />
        </View>
      </View>
    </>
  )
}

export default Community