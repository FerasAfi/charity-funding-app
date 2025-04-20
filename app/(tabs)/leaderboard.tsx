import { View, Text, StyleSheet, StatusBar } from 'react-native'
import React from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { COLORS } from '@/Constants/constants';

const leaderboard = () => {
  return (
    <View style={styles.main}>
      <StatusBar backgroundColor={COLORS.GreenShade}></StatusBar>
      <View style={styles.content}>
            <View style={styles.pelares}>
              <View style={styles.pelare2}></View>
              <View style={styles.pelare1}></View>
              <View style={styles.pelare3}></View>
            </View> 

            <View style={styles.container}>

            </View>
      </View>


    </View>
  )
}



const styles = StyleSheet.create({
  main:{
    flex:1,
    alignItems:'center',
    backgroundColor:COLORS.GreenShade,
  },

  content:{
    position:'absolute',
    bottom:0,

  },

  container:{
    justifyContent:'center',
    backgroundColor:COLORS.GreyBg,
    borderTopRightRadius:33,
    borderTopLeftRadius:33,
    width:wp(100),
    height:hp(60), 
  },


  pelares:{
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'baseline',
    gap:5,
    

  },

  pelare1:{
    width:wp(20),
    height:hp(18),
    backgroundColor:COLORS.GreenPrimary,
    borderTopRightRadius:14,
    borderTopLeftRadius:14,
  },

  pelare2:{
    width:wp(20),
    height:hp(14),
    backgroundColor:COLORS.GreenExtralight,
    borderTopRightRadius:14,
    borderTopLeftRadius:14,
  },

  pelare3:{
    width:wp(20),
    height:hp(9),
    backgroundColor:COLORS.GreenExtralight,
    borderTopRightRadius:14,
    borderTopLeftRadius:14,
  }



})



export default leaderboard