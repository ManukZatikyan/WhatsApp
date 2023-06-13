import { View, Text, Image, Dimensions,TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import { styles } from './styles'
import Carousel from 'react-native-reanimated-carousel';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'
import TextButton from '../../components/textButton/TextButton'
const Community = () => {
  const { width } = Dimensions.get('window');



  const data = [
     'red',
     'purple',
     'blue',
     'yellow',
     'green',
     'pink',
     'white',
  ];

  return (
    <>
      <View style={styles.container}>
        {/* <Image source={require('../../assets/Icons/communityIcon.png')} style={styles.image} />
        <Text style={styles.title}>Introducing communites</Text>
        <Text style={styles.text}> Easly organise your related groups and send announcements. Now, your communities, like neighbourhoods or schools, can have their own space</Text>
        <View style={styles.buttonContainer}>
          <TextButton children='Start your community'  onPress={() => { console.log(1) }} width={'80%'} height={30} />
        </View> */}


        <Carousel
          data={data}
          width={300}
          height={400}
          windowSize={10}
          loop={true}
          renderItem={({item}) => {
            return (
              <View
                style={{
                  backgroundColor: item,
                  flex: 1,
                  zIndex:200000000
                }}>
                <TouchableOpacity
                  style={{ flex: 1 }}
                  // containerStyle={{ flex: 1 }}
                  onPress={() => {
                    console.log(item);
                  }}>
                  <View
                    style={{
                      flex: 1,
                      backgroundColor: item,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Text style={{ fontSize: 80 }}>{1}</Text>
                  </View>
                </TouchableOpacity>
              </View>
            );
          }}

        />
      </View>
    </>
  )
}

export default Community