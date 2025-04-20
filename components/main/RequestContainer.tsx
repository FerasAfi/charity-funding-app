import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import React from 'react'
import { COLORS } from '@/Constants/constants'

const RequestContainer = () => {
  return (
    <View>
      <View style={styles.request}>
                <View style={{flexDirection:'column', alignItems:'flex-end', justifyContent:'center'}}>
                  <Text style={{fontFamily:'Zain-Black', fontSize:hp(4.2), color:COLORS.White, }}>عندك حالة؟</Text>
                  <Text style={{fontFamily:'Zain-Regular', fontSize:hp(2.7), color:COLORS.White, marginTop:-hp(1.2)}}>إبْعَثْ لَنَا طَلَب</Text>
                </View>
                <View style={{flexDirection:'column', alignItems:'center', justifyContent:'space-around'}}>
                  <Image source={require("../../assets/images/action.png")} style={styles.imgAction}></Image>
                  <TouchableOpacity style={styles.btn}>
                    <Text style={{fontFamily:'Zain-Black', fontSize:hp(2.7), color:COLORS.GreenPrimary}}>أرسل طلبك</Text>
                  </TouchableOpacity>
                </View>
        </View>
    </View>
  )
}

export default RequestContainer


const styles = StyleSheet.create({
    request:{   
        marginHorizontal:wp(5), 
        backgroundColor:COLORS.GreenPrimary,
        height:hp(11),
        borderRadius:29,
        marginTop:hp(4),
        paddingHorizontal:wp(4),
        flexDirection:'row-reverse',
        justifyContent:'space-between',
        alignItems:'center'
    
      },
      
      btn:{
        backgroundColor:COLORS.White,
        height:hp(5),
        borderRadius:12,
        paddingHorizontal:wp(3),
        justifyContent:'center',
        alignItems:'center',
        marginTop:hp(2)
        
    
      },
    
      imgAction:{
        resizeMode:'contain',
        height:hp(9),
        width:hp(9),
        position:'absolute',
        bottom:39
    
      },
})