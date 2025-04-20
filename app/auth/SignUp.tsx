import { View, Text, StyleSheet, StatusBar, Touchable, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { COLORS } from '@/Constants/constants';
import GoogleIcon from '@/assets/svgs/Onboarding/GoogleIcon';
import FacebookIcon from '@/assets/svgs/Onboarding/FacebookIcon';
import AppleIcon from '@/assets/svgs/Onboarding/AppleIcon';
import { customFonts } from '@/Constants/constants'; 
import Bg2 from '@/assets/svgs/Onboarding/Background';


const SignUp = () => {
   const fontsLoaded = customFonts();
  return (
    <SafeAreaView style={styles.safeArea}>
        <StatusBar backgroundColor={COLORS.GreenBg}/>
            
        <View style={styles.topContainer}>
            <View style={{marginBottom:hp(15)}}>
                <Text style={{fontFamily:'Zain-Bold', color:COLORS.White, textAlign:'center', fontSize:hp(6)}}>انضم إلينا</Text>
                <Text style={{fontFamily:'Zain-Light', color:COLORS.White, textAlign:'center', fontSize:hp(3), marginTop:-hp(1.5)}}>وابدأ في صنع الفرق</Text>
            </View>
            <View style={styles.background}>
                <Bg2 color={COLORS.GreyDark } height={hp(30)} width={hp(30)}></Bg2>
            </View>
            <View style={styles.imageContainer}>
                <Image source={require("../../assets/images/illis_4.png")} style={styles.image}></Image>
            </View>
        </View>

        <View style={styles.bottomContainer}>
            <View style={{width:'100%', height:'30%'}}>
                <Text style={styles.title}>لنبدأ رحلة العطاء</Text>
                <Text style={styles.subtitle}>سجل دخولك بسهولة بالطريقة التي تناسبك</Text>
            </View>
            <View style={{width:'100%', height:'70%', marginTop:10}}>
                <TouchableOpacity style={styles.btn}>
                    <GoogleIcon width={hp(3)} height={hp(3)} color={COLORS.White} />
                    <Text style={styles.text}>التسجيل باستخدام Google</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.btn}>
                    <FacebookIcon width={hp(3)} height={hp(3)} color={COLORS.White} />
                    <Text style={styles.text}>التسجيل باستخدام Facebook</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.btn}>
                    <AppleIcon width={hp(3.4)} height={hp(3.4)} color={COLORS.White} />
                    <Text style={styles.text}>التسجيل باستخدام Apple</Text>
                </TouchableOpacity>
            </View>

        </View>
            

    </SafeAreaView>
  )
}

export default SignUp


const styles = StyleSheet.create({
    safeArea:{
        flex: 1,
        backgroundColor: COLORS.GreenBg,
        height:hp(100),
        width:wp(100),
      },
      
      topContainer: {
        flex: 0.4,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
      },
      background: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: -1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        
        
      },
      imageContainer: {
        position: 'absolute',
        bottom: -hp(5.1),
        zIndex: 2,
        justifyContent: 'center',
        alignItems: 'center',
      },
      image: {
        width: hp(25),
        height: hp(25),
        resizeMode: 'contain',
      },
    

    bottomContainer:{
        flex:0.6,
        alignContent:'center',
        alignItems:'center',
        justifyContent:'center',
        backgroundColor: COLORS.White,
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        bottom:0,
        minWidth:wp(100),
        padding:hp(6),
        paddingHorizontal:wp(12)
    },

    btn:{
        flex:1,
        flexDirection:'row',
        backgroundColor:COLORS.GreenLight,
        width:"100%",
        height:'100%',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:15,
        padding:10,
        marginBottom:30,
        minHeight:hp(5),
        maxHeight:hp(6.7),
        
        

        //ios
        shadowOffset: { width: 0, height: 6 },
        shadowOpacity: 0.2,    
        shadowRadius: 17.6,   
        //andorid
        elevation:6,
        shadowColor:COLORS.GreyDark,

    },

    text:{
        fontFamily: "Zain-Bold",
        fontSize:hp(2.4),
        marginLeft:15,
        color:COLORS.White,
    },
    
    title:{
        fontFamily: "Zain-Bold",
        fontSize: hp(4.1),
        textAlign:'center',
        color: COLORS.GreyDark,

    },
    subtitle:{
        fontFamily: "Zain-Bold",
        fontSize:hp(2),
        textAlign:'center',
        color:COLORS.GreyPrimary,
        
    },

})