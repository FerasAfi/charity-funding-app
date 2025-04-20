import { View, Text, StyleSheet, Touchable, TouchableOpacity } from 'react-native'
import React from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { COLORS } from '@/Constants/constants'
import ArrowIcon from '@/assets/svgs/Profile/ArrowIcon'
import { customFonts } from '@/Constants/constants'; 


interface PropItem {
    title: string;
    icon: JSX.Element;
    bg:string;
    onPress: () => void;
}

const ListItem = ({title, icon, bg, onPress}: PropItem) => {
  return (
    <TouchableOpacity style={styles.list} onPress={onPress}>
        <View style={styles.item}>
            <View style={styles.icon}>
                <View style={{ backgroundColor: bg, width:33, height: 33, position:'absolute', borderRadius:100 }}></View>
                {icon}
            </View>
            <Text style={styles.title}>{title}</Text>
        </View>
        <View style={{justifyContent:'center', alignItems:'center', alignSelf:'center'}}>
            <ArrowIcon color={COLORS.GreyDark} width={55} height={30}></ArrowIcon>
        </View>
    </TouchableOpacity>
  )
}

export default ListItem


const styles = StyleSheet.create({
    list:{
        flexDirection:'row-reverse',
        justifyContent:'space-between',
        alignItems:'center',
       
    },

    item:{
        flexDirection:'row-reverse',
        justifyContent:'center',
        alignItems:'center'

    },

    icon:{
        justifyContent:'center',
        alignItems:'center'
    },

    title:{
        marginRight:wp(5),
        fontFamily:'Zain-Bold',
        fontSize:hp(2.2),
        color:COLORS.GreyDark,
        width:wp(40),
        right:0,
        textAlign:'right'

    },

})