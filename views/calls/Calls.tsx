import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
} from "react-native";

import {
  Fontisto,
  MaterialIcons,
  MaterialCommunityIcons,
} from "../../assets/Icons";
import DATA from "../../data/ChatData";
import { styles } from "./styles";
import { Data } from "../../types/Interface";

const Calls: React.FC = () => {
  const [callData, setCallData] = useState<Data[]>(DATA);

  useEffect(() => {
    setCallData(DATA);
  }, []);
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <View style={styles.callContainer}>
          <View style={styles.linkContainer}>
              <Fontisto name='link' size={22} color='white'/>
          </View>
          <View>
            <Text style={styles.callLink}>Create a call link</Text>
            <Text style={styles.callSubtext}>Share a link for your whatsApp call</Text>
          </View>
        </View>
      </TouchableOpacity>
      <Text style={styles.recentText}>Recent</Text>
      <FlatList
          data={callData}
          keyExtractor={(item)=>item.id.toString()}
          renderItem={({item})=>(
            <View style={styles.callContainer}>
              <Image style={styles.image} source={require('../../assets/men.jpg')}/>
              <View style={styles.callIconContainer}>
                  <Text style={styles.callName}>{item.name}</Text>
                  <View style={styles.callDetails}>
                        <MaterialCommunityIcons name='call-received' size={15} color='#075e54'/>
                        <Text style={styles.callTime}>{item.time}</Text>  
                  </View>
              </View>
              <TouchableOpacity>
                <MaterialIcons name='call' size={25} color='#075e54'/>
              </TouchableOpacity>
            </View>
          )}
      />
      <TouchableOpacity
        style={styles.callButton}
        onPress={()=>('#')}
      >
        <MaterialIcons name='add-call' size={22} color='white'/>
      </TouchableOpacity>
    </View>
  );
};

export default Calls;






















// import { View, Text, TouchableOpacity, Image } from 'react-native'
// import React, { useEffect, useState } from 'react'
// import { styles } from './styles'
// import { Camera } from 'expo-camera';

// const Calls = () => {
//   const [hasPermission, setHasPermission] = useState(null);
//   const [cameraRef, setCameraRef] = useState(null);
//   const [capturedImage, setCapturedImage] = useState(null);
//   // @ts-ignore
//   const [type, setType] = useState(Camera.Constants.Type.back);

//   useEffect(() => {
//     (async () => {
//       const x = await Camera.requestPermissionsAsync();
//       // @ts-ignore
//       setHasPermission(x.granted);
//     })();
//   }, []);

//   const takePicture = async () => {
//     if (cameraRef) {
//       // @ts-ignore
//       const photo = await cameraRef.takePictureAsync();
//       setCapturedImage(photo.uri); // You can access the captured image details here
//     }
//   };

//   // Render camera view or a text indicating permission denied

//   if (hasPermission === null) {
//     return <View />;
//   }
//   if (hasPermission === false) {
//     return <Text>No access to camera</Text>;
//   }

//   console.log(capturedImage);

//   return (
//     <View style={{ flex: 1 }}>
//       {capturedImage ? (
//         <View style={{ flex: 1 }}>
//           <Image source={{ uri: capturedImage }} style={{ flex: 1 }} />
//         </View>
//       ) :(
//         //@ts-ignore
//       <Camera ref={(ref) => setCameraRef(ref)} style={{ flex: 1 }} type={type}>
//         <View
//           style={{
//             flex: 1,
//             backgroundColor: 'transparent',
//             flexDirection: 'row',
//           }}>

//             <TouchableOpacity
//             style={{
//               flex: 0.1,
//               alignSelf: 'flex-end',
//               alignItems: 'center',
//             }}
//             onPress={takePicture}>
//               <Text>aaaaaa</Text>
//           </TouchableOpacity>

//           <TouchableOpacity
//             style={{
//               alignSelf: 'flex-end',
//               alignItems: 'center',
//             }}
//             onPress={() => {
//               setType(
//                 // @ts-ignore
//                 type === Camera.Constants.Type.back
//                   // @ts-ignore
//                   ? Camera.Constants.Type.front
//                   // @ts-ignore
//                   : Camera.Constants.Type.back
//               );
//             }}>
//             <Text style={{ fontSize: 18, marginBottom: 10, color: 'white' }}> Flip </Text>
//           </TouchableOpacity>
//         </View>
//       </Camera>
//       )}
//     </View>
//   );
// }

// export default Calls
