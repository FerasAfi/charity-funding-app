import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { COLORS } from '@/Constants/constants';
import HeartIcon from '@/assets/svgs/HeartIcon';
import DonatersIcon from '@/assets/svgs/Case/DonatersIcon';
import MoneyIcon from '@/assets/svgs/Case/MoneyIcon';
import CalendarIcon from '@/assets/svgs/Case/CalendarIcon';
import MapPointIcon from '@/assets/svgs/Case/MapPointIcon';
import Donaters from '@/components/Donaters';
import Arrow from '@/assets/svgs/Case/Arrow';
import MenuDots from '@/assets/svgs/Case/MenuDots';
import HeartLikedIcon from '@/assets/svgs/HeartLikedIcon';
import ActionButton from '@/components/main/ActionButton';
import ActionButtonDisabled from '@/components/main/ActionButtonDisabled';
import DrawerPay from '@/components/main/DrawerPay';



interface PropType {
  icon:JSX.Element;
  title:string;
  value:string;
}

const StatContainer = ({icon, title, value}: PropType ) => {
    const styles = StyleSheet.create({
      statContainer:{
        backgroundColor:COLORS.White,
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'flex-end',
        paddingHorizontal:wp(2),
        paddingVertical:hp(3),
        width:wp(43),
        height:hp(15),
        gap:hp(1),
        borderRadius:20,

        //ios
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.1,    
        shadowRadius: 12,   
        //andorid
        elevation:5,
        shadowColor:COLORS.GreyDark,

      }
    })
    return(
      <View style={styles.statContainer}>
        <View style={{backgroundColor:COLORS.GreyXXXLight, width:hp(5), height:hp(5), borderRadius:50, justifyContent:'center', alignItems:'center'}}>
          {icon}
        </View>
        <View style={{marginTop:hp(1)}}>
          <Text style={{fontFamily:'Zain-Light', fontSize:hp(2), textAlign:'right'}}>{title}</Text>
          <Text style={{fontFamily:'Zain-Bold', fontSize:hp(3.1), textAlign:'right', color:COLORS.GreyDark}}>{value}</Text>
        </View>

      </View>
    )
}



const Case = () => {
  const status = 1;

  

  const [liked, setLiked] = useState(false);
  const handleLike = () => {
     setLiked(prev => !prev);
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={{marginBottom:0, zIndex:-2}} showsVerticalScrollIndicator={false}>


        <View style={styles.topButtons}>
          <TouchableOpacity>
              <View style={{backgroundColor:COLORS.White, width:30, height:30, borderRadius:15, justifyContent:'center', alignItems:'center'}}>
                  <Arrow color={COLORS.GreenPrimary} width={24} height={24}></Arrow>
              </View>
          </TouchableOpacity>

          <TouchableOpacity>
              <View style={{backgroundColor:COLORS.White, width:30, height:30, borderRadius:15, justifyContent:'center', alignItems:'center'}}>
                  <MenuDots color={COLORS.GreenPrimary} width={19} height={20}></MenuDots>
              </View>
          </TouchableOpacity>
        </View>

        <View style={styles.gallery}>

        </View>

        <View style={styles.main}>


          <View style={styles.top}>
            <TouchableOpacity onPress={handleLike}>
              {
                liked? (
                      <HeartLikedIcon color={COLORS.Red} height={25} width={25}></HeartLikedIcon>
                ) : (
                  <HeartIcon color={COLORS.GreyPrimary} height={25} width={25}></HeartIcon>
                )
              }
            </TouchableOpacity>
            <View style={styles.tag}>
              {
                status? (
                  <Text style={styles.tagText}>مفتوح</Text>
                ) : (
                  <Text style={[styles.tagText, {color:COLORS.Red}]}>مغلق</Text>
                )
              }
            </View>
          </View>

          <View style={{marginTop:hp(0.8)}}>
            <Text style={styles.title}>مدرسة فائع الابتدائية</Text>
          </View>

          <View style={styles.stats}>
            
          <View style={styles.stats}>
                <Text style={styles.statPercent}>33%</Text>
                <View style={{flexDirection:'row-reverse', gap:hp(0.3), justifyContent:'center', alignItems:'center'}}>
                    <Text style={styles.statCurrent}>500</Text>
                    <Text style={styles.statCurrent}>د.ت</Text>
                    <Text style={styles.statRest}>من</Text>
                    <Text style={styles.statGoal}>1500</Text>
                    <Text style={styles.statRest}>جُمعت</Text>
                </View>
            </View>
          </View>
          <View>
            <View style={styles.progressBar}>
                <View style={styles.progressBarBg}></View>
                <View style={styles.progressBarMain}></View>
            </View>
          </View>
          
          <View style={styles.statcontainers}>
              <View style={{flexDirection:'row', gap:wp(4) }}>
                        <StatContainer
                        icon={<DonatersIcon color={COLORS.GreenPrimary} width={26} height={26} ></DonatersIcon>} 
                        title={'المتبرعون'}
                        value={'36'}
                      ></StatContainer>

                      <StatContainer
                        icon={<MoneyIcon color={COLORS.GreenPrimary} width={26} height={26} ></MoneyIcon>} 
                        title={'المبلغ المستهدف'}
                        value={'د.ت 1500'}
                      ></StatContainer>
              </View>

              <View style={{flexDirection:'row', gap:wp(4)}}>
                      <StatContainer
                      icon={<CalendarIcon color={COLORS.GreenPrimary} width={26} height={26} ></CalendarIcon>} 
                      title={'نُشر في'}
                      value={'19 ماي، 2025'}
                    ></StatContainer>

                    <StatContainer
                      icon={<HeartIcon color={COLORS.GreenPrimary} width={26} height={26} ></HeartIcon>} 
                      title={'إعجابات'}
                      value={'45'}
                    ></StatContainer>
                  </View>

              </View>

          <View style={styles.desc}>
            <Text style={{fontFamily:'Zain-ExtraBold', fontSize:hp(3), textAlign:'right', }}>نظرة عامة</Text>
            <Text style={{fontFamily:'Zain-Light', fontSize:hp(1.5), textAlign:'right', color:COLORS.GreyDark}}>

ساعد في ترميم مدرستنا وتمكين الأجيال القادمة!

مدرستنا العزيزة، مدرسة الفائز الابتدائية، كانت وما زالت حجر الزاوية في التعليم والمجتمع لسنوات عديدة. لكنها الآن بحاجة ماسة إلى الترميم لتوفير بيئة تعليمية أكثر أمانًا وملاءمة لطلابنا.

لقد تعرض مبنى المدرسة، الذي كان في يوم من الأيام مساحة حيوية للتعلم، للتآكل على مر السنين. من الجدران المتصدعة إلى الأسطح المتهالكة، لم يعد الوضع الحالي للمدرسة ملائمًا للمستقبل المشرق الذي نطمح له لأطفالنا.</Text>
          </View>


          <View style={styles.mapContainer}>
            <Text style={{fontFamily:'Zain-ExtraBold', fontSize:hp(3), textAlign:'right', }}>الخريطة</Text>
            <View style={styles.mapStats}>
              <MapPointIcon color={COLORS.GreenPrimary} width={15} height={15}></MapPointIcon>
              <Text style={{fontFamily:'Zain-Light', fontSize:hp(1.5), color:COLORS.GreyDark}}>سيدي بوزيد، فايض، 9112</Text>
            </View>
          </View>


          <View style={styles.titleWrapper}>
            <Text style={styles.header}>أعلى المتبرعين</Text>
            <TouchableOpacity>
                <Text style={styles.seeMore}>عرض المزيد</Text>
             </TouchableOpacity>
          </View>       


          <View style={styles.donaters}>
            <Donaters amount={100} name={'فرحة54'} comment={'ارك الله فيك، تبرّعك هو فرحة كبيرة ا!ت'} profilePic={require("../../assets/images/ananymous.jpg")}></Donaters>
          </View>



          



          <View style={{height:hp(10)}}></View>

        </View>
        
      </ScrollView>
      
      {status?(
          <ActionButton title={"تبرع"} onPress={()=>{}} style={{position:'absolute', bottom:hp(2.5)}}></ActionButton>
        ) : (
          <ActionButtonDisabled title={"تبرع"}></ActionButtonDisabled>
        )
      }
     
     <Image source={require("../../assets/images/fade.png")}
     style = {{
      position:'absolute',
      resizeMode:'cover',
      bottom:0,
      zIndex:-1,
      height:hp(30),
      alignSelf:'center',
      width:wp(100)
     }}
     ></Image>
      

      
      
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  topButtons:{
    position:'absolute',
    width:'100%',
    justifyContent:'space-between',
    alignItems:'center',
    flexDirection:'row',
    zIndex:10,
    marginTop:20,
    paddingHorizontal:wp(5)

  },

  safeArea:{
    flex:1,
    height:hp(100),
    width:wp(100),
  },

  gallery:{
    height:hp(28),
    backgroundColor:'grey',
    position:'absolute',
    width:wp(100),
    top:0,
    zIndex:-1,
    
  },

  main:{
    marginTop:hp(25),
    justifyContent:'center',
    backgroundColor:COLORS.White,
    borderTopLeftRadius:30,
    borderTopRightRadius:30,
    paddingHorizontal:wp(5),
    paddingVertical:hp(1.5),
    
    
  },

  top:{
    flexDirection:'row-reverse',
    justifyContent:'space-between',
    alignItems:'center',
    marginTop:hp(1),
  },

  tag:{
    backgroundColor:COLORS.GreyXXLight,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:8,
    paddingHorizontal:wp(2.8),
    paddingVertical:hp(0.5)
  },

  tagText:{
    fontFamily:'Zain-Bold',
    fontSize:hp(1.5),
    color:COLORS.GreenPrimary
  },

  title:{
    fontFamily:'Zain-Bold',
    fontSize:hp(4.2),
    textAlign:'right',
    marginTop:hp(1),
  },

  stats:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'flex-start',
    width:'100%',
    marginTop:hp(0.8)
  },

  statGoal:{
      fontFamily:'Zain-Bold',
      color:COLORS.GreyPrimary,
      fontSize:hp(2.5)
  },

  statCurrent:{
      fontFamily:'Zain-Bold',
      color:COLORS.GreenPrimary,
      fontSize:hp(2.5)
  },
  statRest:{
      fontFamily:'Zain-Regular',
      color:COLORS.GreyPrimary,
      fontSize:hp(1.8)
  },

  statPercent:{
    fontFamily:'Zain-Bold',
    fontSize:hp(2.5)
  },

  progressBar:{
    justifyContent:'center',
    alignItems:'center',
    width:'100%',
    height:hp(1.3),
    borderRadius:100,
    overflow:'hidden',  
  },

  progressBarBg:{
    backgroundColor:COLORS.GreyExtraLight,
    width:'100%',
    height:hp(1.3)
  },

  progressBarMain:{
    backgroundColor:COLORS.GreenPrimary,
    width:'75%',
    height:hp(1.3),
    position:'absolute',
    borderRadius:100,
    top:0,
    left:0
  },

  statcontainers:{
    marginTop:hp(5),
  
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
    width:'100%',
    gap:hp(1.8),
    paddingHorizontal:wp(5)
  },

  desc:{
    marginTop:hp(5)
  },

  mapContainer:{
    marginTop:hp(5)
  },

  mapStats:{
    marginTop:hp(0.2),
    flexDirection:'row-reverse',
    justifyContent:'flex-start',
    alignItems:'center',
    gap:wp(1.2)
  },

  titleWrapper:{
    marginTop:hp(2),
    flexDirection:'row-reverse',
    alignItems:'center',
    justifyContent:'space-between',
  },

  header:{
    fontFamily:'Zain-ExtraBold',
    fontSize:hp(3)

  },
  
  seeMore:{
    fontFamily:'Zain-Regular',
    color:COLORS.GreyPrimary,
    paddingTop:hp(1.2),
  },

  donaters:{
    marginTop:hp(1.5)
  }
  




})

export default Case


/*

        

*/