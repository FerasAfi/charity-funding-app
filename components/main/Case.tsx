import HeartIcon from '@/assets/svgs/HeartIcon';
import { COLORS } from '@/Constants/constants';
import { View, Text, TouchableOpacity, StyleSheet, Image, Pressable } from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { useState } from 'react';
import { BlurView } from 'expo-blur';
import EducationIcon from '@/assets/svgs/Categories/EducationIcon';
import ClockIcon from '@/assets/svgs/ClockIcon';
import HeartLikedIcon from '@/assets/svgs/HeartLikedIcon';

interface Porptype {
    title:string;
    category:string;
    liked:boolean;
    goal:number;
    current:number;
    supporters:number;
    date:number;
}

const Case = ({title, category, goal,current, supporters, date} : Porptype) => {
    const percentage=  Math.floor((current/goal)*100)

    const [liked, setLiked] = useState(false);

    const handleLike = () => {
    setLiked(prev => !prev);
  };
  return (
    <Pressable>
      <View style={styles.container}>
        <View style={styles.imgContainer}>
            <Image source={require("../../assets/images/case.png")} style={styles.img} resizeMode='cover'></Image>
            <View style={styles.top}>
                <TouchableOpacity style={styles.heartContainer} onPress={handleLike}>
                    {
                        liked?(  <HeartLikedIcon color={COLORS.Red} width={19} height={19}></HeartLikedIcon>
                        ) : (
                            <HeartIcon color={COLORS.GreyPrimary} width={19} height={19}></HeartIcon>

                        )
                    }
                </TouchableOpacity>

                <BlurView intensity={50} style={styles.category}>
                    <Text style={{fontFamily:'Zain-Regular', color:COLORS.White}}>{category}</Text>
                    <EducationIcon color={COLORS.White} width={21} height={21}></EducationIcon>
                </BlurView>
            </View>
        </View>

        <View style={styles.titleContainer}>
             <Text style={styles.title}>{title}</Text>
        </View>

        <View style={styles.bottom}>
            <View style={styles.stats}>
                <Text style={styles.statPercent}>%{percentage}</Text>
                <View style={{flexDirection:'row-reverse', gap:hp(0.3), justifyContent:'center', alignItems:'center'}}>
                    <Text style={styles.statCurrent}>{current}</Text>
                    <Text style={styles.statCurrent}>د.ت</Text>
                    <Text style={styles.statRest}>من</Text>
                    <Text style={styles.statGoal}>{goal}</Text>
                    <Text style={styles.statRest}>جُمعت</Text>
                </View>
            </View>

            <View style={styles.progressBar}>
                <View style={styles.progressBarBg}></View>
                <View style={[styles.progressBarMain, {width:`${percentage}%`}]}></View>
            </View>

            <View style={styles.stats}>
                <View style={styles.backers}>
                    <Text style={styles.statRest}>داعمون</Text>
                    <Text style={styles.statPercent}>{supporters}</Text>
                </View>
                <View style={styles.date}>
                    <Text style={styles.statRest}>منذ 5 أيام</Text>
                    <ClockIcon color={COLORS.GreenPrimary} width={13} height={13}></ClockIcon>
                </View>
            </View>
        </View>
      </View>
    </Pressable>
  )
}

export default Case


const styles = StyleSheet.create({
    container:{
        marginHorizontal:wp(5),
        backgroundColor:COLORS.White,
        flexDirection:'column',
        alignItems:'center',
        minHeight:hp(28),
        borderRadius:24,
        padding:wp(2.8),

        //ios
        shadowOffset: { width: 0, height: 6 },
        shadowOpacity: 0.2,    
        shadowRadius: 17.6,   
        //andorid
        elevation:5,
        shadowColor:COLORS.GreyDark,
    },

    imgContainer:{
        borderRadius:24,
        width: '100%', 
        height: hp(18),
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden', 
        
    },

    img:{
        width: '100%',
        height: '100%',
    },
    
    top:{       
        flexDirection:'row-reverse',
        justifyContent:'space-between',
        alignItems:'center',
        width:'100%',
        height:hp(5),
        position:'absolute',
        top:0,
        right:0,
        marginTop:hp(0.4 )
        
    },

    heartContainer:{
        backgroundColor:COLORS.White,
        height:28,
        width:28,
        marginRight:hp(1),
        borderRadius:'50%',
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row',
        zIndex:2
    },

    category:{
        flexDirection:'row-reverse',
        justifyContent:'center',
        alignItems:'center',
        marginLeft:hp(1),
        paddingVertical:hp(0.8),
        paddingHorizontal:hp(1.7),
        borderRadius:10,
        gap:hp(1),
        zIndex:2,
    },

    titleContainer:{
        justifyContent:'flex-end',
        alignItems:'center',
        flexDirection:'row', width:'100%', 
        marginBottom:hp(1)
    },

    title:{
        fontFamily:'Zain-Bold',
        fontSize:hp(3)
    },

    bottom:{
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        width:'100%',
    },

    stats:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        width:'100%'
    },

    statPercent:{
        fontFamily:'Zain-Bold',
        fontSize:hp(2.5)
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

    progressBar:{
        justifyContent:'center',
        alignItems:'center',
        
        width:'100%',
        height:hp(1.3),
        borderRadius:100,
        overflow:'hidden',  
    },

    progressBarBg:{
        flex:1,
        backgroundColor:COLORS.GreyExtraLight,
        width:'100%',
        height:hp(1.3),
        alignSelf:'flex-start',
    },

    progressBarMain:{
        backgroundColor:COLORS.GreenPrimary,
        height:hp(1.3),
        position:'absolute',
        borderRadius:100,
        top:0,
        right:0,
    },
    
    backers:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        gap:hp(0.6)
    },

    date:{
        flexDirection:'row-reverse',
        justifyContent:'center',
        alignItems:'center',
        gap:hp(0.6)
    },

    
})