import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { COLORS } from '@/Constants/constants';


interface PropType {
    title:string;
    
}


const ActionButton = ({title}: PropType) => {
  return (
    <View style={styles.button}>
        <Text style={styles.title}>{title}</Text>
    </View>
  )
}


const styles = StyleSheet.create({

    button:{
        position:'absolute',
        bottom:23,
        justifyContent:'center',
        alignContent:'center',
        alignSelf:'center',
        backgroundColor:COLORS.GreyLight,
        padding:hp(1.3),
        borderRadius:50,
        width:'90%',
        flex:1,

        //ios
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,    
        shadowRadius: 17.6,   
        //andorid
        elevation:7,
        shadowColor:COLORS.GreyDark,
    },

    title:{
        textAlign:'center',
        fontFamily:'Zain-Bold',
        fontSize:hp(2.6),
        color:COLORS.GreyDark,
    }

})

export default ActionButton