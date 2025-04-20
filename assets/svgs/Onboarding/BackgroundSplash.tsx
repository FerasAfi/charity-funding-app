import Svg, { Path } from "react-native-svg";
import React from "react";
import { View, StyleSheet } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const Bg1 = ({ color }: { color: string }) => {
  return (
    <View style={styles.container}>
      <Svg
        style={styles.svg}
        width='100%'
        height= '100%'
        viewBox="0 0 430 429"
        fill="none"
        >
      <Path d="m650.2 9.3c654.4-39.3 697.4 48.4 600.4 279.2-62 147.5-304 164.2-657.8 114.2-394.3-55.7-603.3-36.2-591.8-245.2 14.2-182.9 322.5-128.6 649.2-148.2z"
      fill={color}/>
      </Svg>
    </View>
  );
};

export default Bg1;


const styles = StyleSheet.create({
  container:{
    display:'flex',
    width: "100%",
    height: "100%", 
    zIndex: -1, 

  },
  svg:{
    
  },
})