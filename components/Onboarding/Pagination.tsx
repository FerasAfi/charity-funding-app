import React from 'react'
import { View, StyleSheet, Animated} from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { Slidesdata } from '@/Constants/data'
import { COLORS } from '@/Constants/constants';

const Pagination = ({ data, scrollX}: { data: Slidesdata[], scrollX: Animated.Value }) => {
  return (
    <View style={styles.container}>
      {data.map((_, index) => {
        const inputRange = [(index - 1)*wp(100), index*wp(100), (index+1)*wp(100)];
        
        const dotWidth = scrollX.interpolate({
            inputRange,
            outputRange:[hp(1.1), hp(2.8), hp(1.1)],
            extrapolate:'clamp',
        });

        const dotColor = scrollX.interpolate({
            inputRange,
            outputRange: [
              COLORS.GreyExtraLight, 
              COLORS.GreenExtralight,  
              COLORS.GreyExtraLight,
            ],
            extrapolate: 'clamp',
          });

        return (
          <Animated.View 
            key={index.toString()} 
            style={[styles.dot, {width:dotWidth, backgroundColor:dotColor}]} 
          />
        );
      })}
    </View>
  );
};

export default Pagination

const styles = StyleSheet.create({
  container: {

    justifyContent:'center',    
    flexDirection:'row',
    alignSelf:'center',
    alignItems:'center',
    marginBottom:hp(4.8)

    

  },
  dot: {
    width: wp(1),
    height: hp(1),
    borderRadius: 6,
    backgroundColor: COLORS.GreyExtraLight,
    marginHorizontal:wp(0.9),
  },
})
