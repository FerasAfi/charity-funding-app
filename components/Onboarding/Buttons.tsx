import { View, Text, TouchableOpacity, StyleSheet,Animated } from 'react-native'
import React, { useEffect, useState } from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { COLORS } from '@/Constants/constants';
import { Slidesdata } from '@/Constants/data';
import { Link } from 'expo-router';

type ButtonsProps = {
  next: () => void;
  skip: () => void;
  index: number;
  slides: Slidesdata[];
};

const Buttons: React.FC<ButtonsProps> = ({ next, skip, index, slides }) => {
  const [skipPressed, setSkipPressed] = useState(false);
  const [isLastSlide, setIsLastSlide] = useState(false);

  useEffect(() => {
    
    if (index === slides.length - 1) {
      setIsLastSlide(true);
    } else {
      setIsLastSlide(false);
    }
  }, [index, slides.length]);

  const handleSkip = () => {
    setSkipPressed(true);
    skip();
  };

  if (!slides || slides.length === 0) return null;
  return (
    <Animated.View style={styles.container}>
      {index === slides.length - 1 ? (
        <Link href="../app/auth/_layout">
          <TouchableOpacity style={styles.startBtn} onPress={next}>
         
            <Text style={{ fontFamily: 'Zain-ExtraBold', color: COLORS.White, fontSize: hp(2.5) }}>
              ابدأ الآن
            </Text>
         
           </TouchableOpacity>
      </Link>
      ) : (
        <>
          <TouchableOpacity style={styles.nextBtn} onPress={next}>
            <Text style={{ fontFamily: 'Zain-ExtraBold', color: COLORS.White, fontSize: hp(2.5) }}>
              التالي
            </Text>
          </TouchableOpacity>

          <View style={{ width: wp(6) }} />

          <TouchableOpacity style={styles.skipBtn} onPress={skip}>
            <Text style={{ fontFamily: 'Zain-ExtraBold', color: COLORS.GreyPrimary, fontSize: hp(2.5) }}>
              تخطي
            </Text>
          </TouchableOpacity>
        </>
      )}
    </Animated.View>
  );
};



export default Buttons;

const styles = StyleSheet.create({
    container:{
      flexDirection:'row-reverse',
      justifyContent:'center',
      alignItems:'center', display:'flex',
      marginHorizontal:0,
      marginBottom: hp(5)
    },

    nextBtn:{
      backgroundColor:COLORS.GreenLight,
      width:wp(43),
      alignItems:'center',
      paddingVertical:hp(1.2),
      borderRadius:15,

      //ios
      shadowOffset: { width: 0, height: 6 },
      shadowOpacity: 0.2,    
      shadowRadius: 17.6,   
      //andorid
      elevation:6,
      shadowColor:COLORS.GreyDark,

    },

    skipBtn:{
      
      backgroundColor:COLORS.GreyXXLight,
      width:wp(27),
      alignItems:'center',
      paddingVertical:hp(1.2),
      borderRadius:15,

      //ios
      shadowOffset: { width: 0, height: 6 },
      shadowOpacity: 0.2,    
      shadowRadius: 17.6,   
      //andorid
      elevation:6,
      shadowColor:COLORS.GreyDark,       
    },

    startBtn:{
      backgroundColor:COLORS.GreenLight,
      width:wp(75),
      alignItems:'center',
      paddingVertical:hp(1.2),
      borderRadius:15,

      //ios
      shadowOffset: { width: 0, height: 6 },
      shadowOpacity: 0.2,    
      shadowRadius: 17.6,   
      //andorid
      elevation:6,
      shadowColor:COLORS.GreyDark,
    }


})