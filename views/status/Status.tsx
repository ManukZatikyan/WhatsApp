import { View, Text, Image, FlatList, TouchableOpacity } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { StatusData } from '../../types/Interface'
import { FontAwesome5 } from '../../assets/Icons'
import * as ImagePicker from 'expo-image-picker';
import STATUSDATA from '../../data/StatusData'
import { styles } from './styles'

const Status = () => {
  const [statusData, setStatusData] = useState<StatusData[]>(STATUSDATA)
  const camera = useRef(null)
  useEffect(() => {
    setStatusData(STATUSDATA)
  }, [])
  const combinedStatusData = [
    { 'title': 'recent updates', data: statusData.filter(item => item.viewed === false) },
    { 'title': 'Viewed updates', data: statusData.filter(item => item.viewed === true) },
  ]



  const openCamera = async () => {
    const permission = await ImagePicker.requestCameraPermissionsAsync();
    // if (permission.granted === false)

    console.log(permission,'premisison');
    const result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1,1],
      quality: 0.5,
    });
    console.log(result,'result');
  };

  const openGallery = async () => {
    const permission = await ImagePicker.requestMediaLibraryPermissionsAsync();
    // if (permission.granted === false)
  }
  return (
    <View style={styles.container}>
      <View style={styles.myStatusContainer}>
        <View>
          <Image source={require('../../assets/men.jpg')} style={styles.image} />
        </View>
        <View>
          <Text style={styles.myStatusHeading}>My status</Text>
          <Text style={styles.myStatusSubtext}>Tap to add status update</Text>
        </View>
      </View>
      <FlatList
        data={combinedStatusData}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <>
            <Text style={styles.viewedStatus}>{item.title}</Text>
            <FlatList
              data={item.data}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => (
                <View style={styles.viewedStatusContainer}>
                  <View>
                    {/* @ts-ignore */}
                    <Image source={item.photos} style={styles.image} />
                  </View>
                  <View>
                    <Text style={styles.myStatusHeading}>{item.name}</Text>
                    <Text style={styles.myStatusSubtext}>{item.time}</Text>
                  </View>
                </View>

              )}
            />
          </>
        )}
      />
      <TouchableOpacity
        style={styles.writeButton}
        onPress={openGallery}
      >
        <FontAwesome5 name='pen' size={18} color='grey' />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={openCamera}
        style={styles.cameraButton}
      >
        <FontAwesome5 name='camera' size={20} color='white' />
      </TouchableOpacity>
    </View>
  )
}

export default Status