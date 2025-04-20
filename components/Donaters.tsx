import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { COLORS } from '@/Constants/constants'

interface PropType {
    amount:number;
    name:string;
    comment:string;
    profilePic:any;
}


const Donaters = ({amount, name, comment, profilePic}: PropType) => {
  return (
    <View style={styles.bg}>
        <View style={styles.left}>
            <Image source={profilePic} style={styles.img}></Image>
            <View style={styles.info}>
                <Text style={{fontFamily:'Zain-Bold', fontSize:hp(1.5), textAlign:'right'}}>{name}</Text>
                <Text style={styles.comment}>{comment}</Text>
            </View>
        </View>

        <View style={styles.tag}>
            <Text style={styles.ammount}>{amount} د.ت</Text>
        </View>
    </View>
  )
}


const styles= StyleSheet.create({
    bg:{
        flexDirection:'row-reverse',
        backgroundColor:COLORS.GreyXXXLight,
        height:hp(6.5),
        borderRadius:50,
        justifyContent:'space-between',
        alignItems:'center',
        paddingHorizontal:12,
        
    },
    left:{
        flexDirection:'row-reverse',
        justifyContent:'flex-start',
        alignItems:'center',
    },

    img:{
        height:40,
        width:40,
        borderRadius:20,

    },

    info:{
        marginTop:hp(1),
        marginRight:wp(1.5)

    },

    tag:{
        backgroundColor:COLORS.GreenShade,
        justifyContent:'center',
        alignItems:'center',
        paddingVertical:hp(0.6),
        borderRadius:6,
        width:wp(12),
        
    },

    ammount:{
        fontFamily:'Zain-Bold',
        fontSize:hp(1.1),
        textAlign:'right',
        color:COLORS.GreenDark,
    },

    
    
    comment:{
        fontFamily:'Zain-Light',
        fontSize:hp(1.5),
        textAlign:'right',
        width:wp(55),
        marginBottom:hp(1)
    },
})

export default Donaters