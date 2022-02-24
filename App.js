import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View,Image } from 'react-native';
import Header from './header';
import ImageSlide from './image';

import {  NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Details from './details';
import { NativeRouter, Route, Link } from "react-router-native";


const Tab = createMaterialTopTabNavigator()

export default function App() {
  
 
  return (
    // <View style={{alignItems: 'center',
    // justifyContent: 'center',}} >
     
    //  <ImageSlide/>
    //  <Header/>
    // </View>
    // <NativeBaseProvider>
<NavigationContainer>
<Tab.Navigator>
      <Tab.Screen name="Home" component={Header} />
      {/* <Tab.Screen name="ImageSlide" component={ImageSlide} /> */}
      <Tab.Screen name="Details"  component={Details} />
    </Tab.Navigator>
</NavigationContainer>
    // </NativeBaseProvider>
  

   
    
  );
}


