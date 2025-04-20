import React from "react";
import Svg, { Rect, Defs, LinearGradient, Stop } from "react-native-svg";


interface Proptype{
    width:number;
    height:number;
    color:string;
}


const Fade = ({width, height, color}:Proptype) => {
  return (
    <Svg width={396} height={124} viewBox="0 0 396 124" fill="none">
      <Defs>
        <LinearGradient id="paint0_linear_85_142" x1="198" y1="0" x2="198" y2="124" gradientUnits="userSpaceOnUse">
          <Stop stopColor={color} stopOpacity="0" />
          <Stop offset="0.579" stopColor={color} />
        </LinearGradient>
      </Defs>
      <Rect width={width} height={height} fill="url(#paint0_linear_85_142)" />
    </Svg>
  );
};

export default Fade;
