import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { COLORS } from '@/Constants/constants'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { customFonts } from '@/Constants/constants'; 

interface PropType {
    title: string;
    subtitle: string,
    onPress: () => void;
  }
  


const Stats = ({title, subtitle, onPress}: PropType) => {
  const fontsLoaded = customFonts();
  return (
    <TouchableOpacity onPress={onPress} style={{marginHorizontal:wp(0)}}>
      <View style={styles.container}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.subtitle}>{subtitle}</Text>
        </View>
    </TouchableOpacity>
  )
}

export default Stats


const styles  = StyleSheet.create({
    container:{
        display:'flex',
        backgroundColor:COLORS.GreenLight,
        height:hp(10),
        borderRadius:20,
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'column',
        width:'100%',
        paddingHorizontal:wp(5),
        
        //ios
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2,    
        shadowRadius: 13.6,   
        //andorid
        elevation:2,
        shadowColor:COLORS.GreenBg,
          
      },
    title:{
        fontFamily:'Zain-Bold',
        color:COLORS.White,
        fontSize:hp(2.5),
        textAlign:'center',
        marginBottom:-hp(0.4),
    },

    subtitle:{
        fontFamily:'Zain-Bold',
        color:COLORS.White,
        fontSize:hp(1.4),
        textAlign:'center'

    }
})