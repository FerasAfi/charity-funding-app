import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native'
import React, { useState } from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { COLORS } from '@/Constants/constants'
import Animated, { useSharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated';

import ActionButton from './ActionButton';

interface PropType {
  amount:number;
  onPress: () => void;
  isSelected: boolean;
}

const Buttons = ({amount, onPress, isSelected}:PropType) => {
  return(
      <TouchableOpacity onPress={onPress}>
                <View style={[styles.button, isSelected && styles.selectedButton]}>
                          <Text style={[styles.amount, isSelected && styles.selectedAmount ]}>{amount}</Text>
                  </View>
              </TouchableOpacity>
  )
}



const DrawerPay = () => {

  const bottomPosition = useSharedValue(-hp(55));

  const animatedContainerStyle = useAnimatedStyle(() => {
    return {
      bottom:0
    }
  });

  const openDrawer = () => {
    bottomPosition.value = withTiming(-hp(55), {duration:300});

  };

  const closeDrawer = () => {
    bottomPosition.value = withTiming(0, {duration:300});
  }

  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
 
  return (
    <Animated.View style={[styles.container, animatedContainerStyle]}>
        <View style={styles.bar}></View>
        <View style={styles.buttonsContainer}>
            <View style={styles.row}>
              <Buttons amount={5} onPress={()=>{setSelectedAmount(5)}} isSelected = {selectedAmount ===5 }></Buttons>
              <Buttons amount={10} onPress={()=>{setSelectedAmount(10)}} isSelected = {selectedAmount ===10 }></Buttons>
              <Buttons amount={30} onPress={()=>{setSelectedAmount(30)}} isSelected = {selectedAmount ===30}></Buttons>
            </View>

            <View style={styles.row}>
              <Buttons amount={50} onPress={()=>{setSelectedAmount(50)}} isSelected = {selectedAmount ===50 }></Buttons>
              <Buttons amount={100} onPress={()=>{setSelectedAmount(100)}} isSelected = {selectedAmount ===100 }></Buttons>
              <Buttons amount={500} onPress={()=>{setSelectedAmount(500)}} isSelected = {selectedAmount ===500 }></Buttons>
            </View>
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            placeholder='أدخل مبلغًا هنا'
            style={{fontFamily:"Zain-Regular", color:COLORS.GreyDark ,textAlign:'right' , fontSize:hp(3), width:wp(90)}}
            value={selectedAmount !== null ?   selectedAmount.toString(): ''}
          >
          </TextInput>
        </View>

        <ActionButton title={'الانتقال إلى الدفع'} onPress={() => {}}
          style={{ height:hp(6.5), marginTop:hp(2) }}>
          </ActionButton>

    </Animated.View>

  )
}


const styles = StyleSheet.create({
  container:{
    zIndex:2,
    position:'absolute',
    
    backgroundColor:COLORS.White,
    height:hp(55),
    width:wp(100),
    bottom:-hp(0),
    borderTopLeftRadius:25,
    borderTopRightRadius:25,
    alignItems:'center',

  },

  bar:{
    marginTop:hp(1.2),
    height:hp(0.6),
    width:wp(25),
    backgroundColor:COLORS.GreyAccent,
    borderRadius:15,
  },

  buttonsContainer:{
    marginTop:hp(6.5),
    width:'100%',
    paddingHorizontal:wp(5),
    flexDirection:'column',
    justifyContent:'space-between',
    gap:hp(1),

  },

  row:{
    width:'100%',
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    
  },

  button:{
    backgroundColor:COLORS.GreyExtraLight,
    height:hp(11),
    
    justifyContent:'center',
    alignItems:'center',
    borderRadius:20,
    width:wp(100)/3.5,

    //ios
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.6,    
    shadowRadius: 17.6,   
    //andorid
    elevation:15,
    shadowColor:COLORS.GreyLight,
    
  },
  selectedButton:{
    backgroundColor:COLORS.GreenExtralight,
    shadowColor:COLORS.GreenLight,
  },

  amount:{
    textAlign:'center',
    fontFamily:"Zain-Bold",
    fontSize:hp(5),
    color:COLORS.GreyPrimary
  },

  selectedAmount:{
    color:COLORS.GreenDark
  },

  inputContainer:{
    marginTop:hp(3),
    paddingHorizontal:wp(2),
    backgroundColor:COLORS.GreyXXLight,
    borderRadius:10,
    height:hp(7),
    width:wp(90),
    justifyContent:'center',
    alignItems:'center',
    
    
 }
    

})
export default DrawerPay