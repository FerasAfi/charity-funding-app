import { SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View, ScrollView } from 'react-native'
import React from 'react'
import { COLORS } from '@/Constants/constants'
import Arrow from '@/assets/svgs/Case/Arrow'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Donaters from '@/components/Donaters';



const DonatersList = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar backgroundColor={COLORS.GreyBg}></StatusBar>
        <View style={styles.top}>
        <TouchableOpacity>
              <View style={{backgroundColor:COLORS.White, width:30, height:30, borderRadius:15, justifyContent:'center', alignItems:'center', marginLeft:wp(5), marginTop:hp(1)}}>
                  <Arrow color={COLORS.GreenPrimary} width={24} height={24}></Arrow>
              </View>
          </TouchableOpacity>
          <Text style={styles.header}>جميع المتبرعين</Text>
        </View>
        <ScrollView
        showsVerticalScrollIndicator={false}
        style={{marginTop:hp(4), marginHorizontal:wp(5)}}>
            <View style={{flexDirection:'column', gap:hp(0.8)}}>
                <Donaters amount={10} name={'فرحة54'} comment={'ارك الله فيك، تبرّعك هو فرحة كبيرة ا!ت'} profilePic={require("../../assets/images/ananymous.jpg")}></Donaters>
                <Donaters amount={25} name={'Sami Ben Amor'} comment={'ربي يحنّن القلوب 💛'} profilePic={require("../../assets/images/ananymous.jpg")}></Donaters>
                <Donaters amount={150} name={'فرحة54'} comment={'من القلب، الله يقدّر الخير'} profilePic={require("../../assets/images/ananymous.jpg")}></Donaters>
                <Donaters amount={10} name={'فرحة54'} comment={'ربي يكون في العون 🤲'} profilePic={require("../../assets/images/ananymous.jpg")}></Donaters>
                <Donaters amount={5} name={'فرحة54'} comment={'ن شاء الله ربي يفرّج'} profilePic={require("../../assets/images/ananymous.jpg")}></Donaters>
                <Donaters amount={60} name={'فرحة54'} comment={'حبيت نعاون حتى بالقليل ❤️'} profilePic={require("../../assets/images/ananymous.jpg")}></Donaters>
                <Donaters amount={75} name={'فرحة54'} comment={'ربي يشفي ويعافي 🙏'} profilePic={require("../../assets/images/ananymous.jpg")}></Donaters>
                <Donaters amount={300} name={'فرحة54'} comment={'أقلّ حاجة نجم نعملها'} profilePic={require("../../assets/images/ananymous.jpg")}></Donaters>
            </View>
        </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    safeArea:{
        flex:1,
        backgroundColor:COLORS.GreyBg,
        alignItems:'stretch',
    
    
    },
    top:{
        flexDirection:'row',
        justifyContent:'flex-start',
        alignItems:'center',
    
    },
    
    
    header:{
        fontFamily:"Zain-Bold",
        fontSize:hp(3.2),
        textAlign:'center',
        marginLeft:wp(20),
        marginTop:hp(0.5)
    
    },

})

export default DonatersList

