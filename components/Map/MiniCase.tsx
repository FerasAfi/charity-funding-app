import { View, Text, Image, TouchableOpacity, StyleSheet, Pressable } from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import React from 'react'
import { BlurView } from 'expo-blur';
import EducationIcon from '@/assets/svgs/Categories/EducationIcon';
import { COLORS } from '@/Constants/constants';
import ClockIcon from '@/assets/svgs/ClockIcon';


interface Porptype {
    title:string;
    category:string;
    liked:boolean;
    goal:number;
    current:number;
    supporters:number;
    date:number;
}


const MiniCase = ({title, category, goal, current, supporters, date} : Porptype) => {
    const percentage=  Math.floor((current/goal)*100)
  return (
    <TouchableOpacity style={styles.container}>
        <View style={styles.imgContainer}>
            <Image source={require("../../assets/images/case.png")} style={styles.img} resizeMode='contain'></Image>
        </View>

        

        

        <View style={styles.side}>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>{title}</Text>
                </View>
               
                    
                <View style={{flex:1, alignItems:'flex-end', justifyContent:'space-between', height:'100%'}}>
                        <View style={{flexDirection:'row-reverse', gap:hp(0.3), justifyContent:'flex-start', alignItems:'center', width:'100%'}}>
                                <Text style={styles.statCurrent}>{current}</Text>
                                <Text style={styles.statCurrent}>د.ت</Text>
                                <Text style={styles.statRest}>من</Text>
                                <Text style={styles.statGoal}>{goal}</Text>
                                <Text style={styles.statRest}>جُمعت</Text>
                        </View>
                        
                        <View style={{flexDirection:'row', gap:hp(0.3), justifyContent:'flex-end', alignItems:'center', width:'100%'}}>
                            <Text style={styles.statPercent}>%{percentage}</Text>
                            <View style={styles.progressBar}>
                                    <View style={styles.progressBarBg}></View>
                                    <View style={[styles.progressBarMain, {width:`${percentage}%`}]}></View>
                            </View>
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
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        position:'absolute',
        overflow:'hidden',
        marginHorizontal:wp(5),
        backgroundColor:COLORS.White,
        flexDirection:'row-reverse',
        alignSelf:'center',
        alignItems:'center',
        justifyContent:'space-between',
        gap:wp(3),
        height:hp(16),
        width:wp(90),
        borderRadius:20,
        padding:wp(3.5),
        bottom:hp(10.5),
        

        //ios
        shadowOffset: { width: 0, height: 6 },
        shadowOpacity: 0.2,    
        shadowRadius: 17.6,   
        //andorid
        elevation:5,
        shadowColor:COLORS.GreyDark,
    },

    imgContainer:{
        borderRadius:20,
        width: '38%', 
        height: 'auto',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden', 
        
    },

    img:{

        height: hp(13),
    },


    titleContainer:{
        justifyContent:'flex-end',
        alignItems:'flex-start',
        flexDirection:'row',
        width:'100%', 
        marginBottom:hp(1.8),
        flex:0.75,
    },

    title:{
        marginTop:hp(0.7),
        fontFamily:'Zain-Bold',
        fontSize:hp(2.5)
    },

    side:{
        flex:1,
        flexDirection:'column',
        justifyContent:'space-between',
       
    },

    
    statPercent:{
        fontFamily:'Zain-Bold',
        fontSize:hp(1.8 )
    },

    statGoal:{
        fontFamily:'Zain-Bold',
        color:COLORS.GreyPrimary,
        fontSize:hp(1.8)
    },

    statCurrent:{
        fontFamily:'Zain-Bold',
        color:COLORS.GreenPrimary,
        fontSize:hp(1.8)
    },
    statRest:{
        fontFamily:'Zain-Regular',
        color:COLORS.GreyPrimary,
        fontSize:hp(1.4)
    },

    progressBar:{
        justifyContent:'center',
        alignItems:'center',
        width:wp(35),
        height:hp(1.2),
        borderRadius:100,
        overflow:'hidden',
        flex:1,
    },

    progressBarBg:{
        backgroundColor:COLORS.GreyExtraLight,
        width:'100%',
        height:hp(1.2),
        flex:1,
    },

    progressBarMain:{
        backgroundColor:COLORS.GreenPrimary,
        height:hp(1.2),
        position:'absolute',
        borderRadius:100,
        alignSelf:'flex-end',
        justifyContent:'flex-end',
        flex:1,
    },
    
    stats:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        width:'100%',
 
        
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

export default MiniCase



