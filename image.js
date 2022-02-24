import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View,Image } from 'react-native';
import Header from './header';

export default function ImageSlide() {
  
  let [no,setNo]=useState(0);
  let [images,setImages]=useState([
    require(`./assets/1.jpg`),
    require(`./assets/2.jpg`),
    require(`./assets/3.jpg`)
  ])
  const nextPhoto=()=>{
    if(no<2)setNo(++no)
  }
  const backPhoto=()=>{
    if(no>0)setNo(--no)
  }
  return (
   <View>
     
      <Image source={images[no]} style={{width:100,height:200,marginTop:100}}/>
      <View style={{width:100,height:100,margin:1}}>
      <Button title='next' onPress={()=>{
        nextPhoto()
      }}/>
      </View>
      <View style={{width:100,height:100,margin:1}}>
      <Button title='back' onPress={()=>{
        backPhoto()
      }}/>
     
      </View>
    </View>
    
  );
}


