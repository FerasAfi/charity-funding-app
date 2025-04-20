import { View, Text } from 'react-native'
import React from 'react'
import Svg, { Path } from 'react-native-svg'


interface PropType {
    width?: number | string,
    height?:number | string,
    color: string,

}

const Blob1 = ({width, height, color}:PropType) => {
  return (
    <View>
        <Svg fill={color} width={width} height={height} viewBox="0 0 200 200">
        <Path d="M46.8,-66.6C59.7,-64.5,68.6,-50,69.9,-35.4C71.1,-20.8,64.7,-6.2,59.2,6.1C53.7,18.4,49,28.4,43.7,42C38.3,55.5,32.3,72.6,22.7,73.8C13.1,74.9,-0.1,60.1,-14.2,53.6C-28.4,47.1,-43.5,48.9,-50.1,42.6C-56.7,36.4,-54.9,22,-52.7,10.1C-50.6,-1.9,-48.1,-11.3,-45.9,-23C-43.8,-34.7,-41.9,-48.5,-34.3,-53C-26.7,-57.5,-13.3,-52.8,1.8,-55.6C16.9,-58.4,33.9,-68.7,46.8,-66.6Z"  transform="translate(93 105) rotate(70 0 0)" />
        </Svg>
    </View>
  )
}

export default Blob1