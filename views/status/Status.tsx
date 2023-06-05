import { View, Text, Image, FlatList, TouchableOpacity } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { styles } from './styles'
import STATUSDATA from '../../data/StatusData'
import { FontAwesome5 } from '../../assets/Icons'
import { StatusData } from '../../types/Interface'
import { Camera } from 'expo-camera';
import * as ImagePicker from 'expo-image-picker';

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
    const x = ImagePicker.requestCameraPermissionsAsync();


    // if (status !== 'granted') {
    //   alert('Permission to access camera was denied');
    //   return;
    // }
  
    // console.log(status);
    
    const result = ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
  console.log(result);
  
    // if (!result.cancelled) {
    //   // Handle the captured photo or video here
    //   console.log(result.uri);
    // }
  };


  const takePicture = async () => {
    
    let x = await Camera.requestPermissionsAsync();
    if (x.granted) {
      const isCameraAvailable = await Camera.isAvailableAsync();
      console.log('====================================');
      console.log(isCameraAvailable);
      console.log('====================================');
      if (isCameraAvailable) {
        // Camera is available, you can start using it
      } else {
        // Camera is not available on the device
      }
    } else {
      // Camera permission not granted
    }

    if (camera) {
      
      const options = { quality: 0.5, base64: true };
      // @ts-ignore
      const data = await camera.current.takePictureAsync(options);
    }

  };

  return (
    <View style={styles.container}>

      {/* <Camera
        ref={camera}
        style={styles.preview}
        // @ts-ignore
        type={Camera.Constants.Type.back}
      />
      <TouchableOpacity onPress={openCamera}>
        <Text>Take Picture</Text>
      </TouchableOpacity> */}

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
        onPress={openCamera}
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