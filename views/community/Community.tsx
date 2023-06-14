import { View, Text, Image} from 'react-native'
import React from 'react'
import { styles } from './styles'
import TextButton from '../../components/textButton/TextButton'
import { useDispatch } from 'react-redux'
import { logOutUser } from '../../redux/auth/authSlice'



const Community = () => {
  const dispatch = useDispatch();
  const handleLogOut = () => {
    dispatch(logOutUser())
} 
  return (
    <>
      <View style={styles.container}>
        <Image source={require('../../assets/Icons/communityIcon.png')} style={styles.image} />
        <Text style={styles.title}>Introducing communites</Text>
        <Text style={styles.text}> Easly organise your related groups and send announcements. Now, your communities, like neighbourhoods or schools, can have their own space</Text>
        <View style={styles.buttonContainer}>
          <TextButton children='Start your community'  onPress={() => { console.log(1) }} width={'80%'} height={30} />
        </View>
      </View>
      <View style={styles.logoutContainer}>
      <TextButton children='Log Out'  onPress={()=>{handleLogOut()} } width={100} height={50} />
      </View>
    </>
  )
}

export default Community