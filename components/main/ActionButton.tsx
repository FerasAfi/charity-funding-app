import { View, Text, StyleSheet, TouchableOpacity, ViewStyle } from 'react-native'
import React from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { COLORS } from '@/Constants/constants';


interface PropType {
    title:string;
    onPress: () => void;
    style?: ViewStyle | ViewStyle[];
}


const ActionButton = ({title, onPress, style}: PropType) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.button, style]}>
        <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  )
}


const styles = StyleSheet.create({

    button:{
        
        justifyContent:'center',
        alignContent:'center',
        alignSelf:'center',
        backgroundColor:COLORS.GreenExtralight,
        padding:hp(1.3),
        borderRadius:50,
        width:'90%',
    

        //ios
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,    
        shadowRadius: 17.6,   
        //andorid
        elevation:7,
        shadowColor:COLORS.GreenLight,
    },

    title:{
        textAlign:'center',
        fontFamily:'Zain-Bold',
        fontSize:hp(2.6),
        color:COLORS.GreenDark,
    }

})

export default ActionButton