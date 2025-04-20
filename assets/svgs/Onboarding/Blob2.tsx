import { View, Text } from 'react-native'
import React from 'react'
import Svg, { Path } from 'react-native-svg'


interface PropType {
    width?: number | string,
    height?:number | string,
    color: string,

}

const Blob2 = ({width, height, color}:PropType) => {
  return (
    <View>
        <Svg fill={color} width={width} height={height} viewBox="0 0 200 200">
        <Path d="M35,-56.3C43.4,-49.1,46.9,-36,48.5,-24.5C50.1,-13,49.8,-2.9,49,7.5C48.2,17.9,46.9,28.7,42.9,41.9C38.8,55,32,70.5,20.2,78.2C8.4,85.9,-8.4,86,-19.5,77.6C-30.6,69.2,-36,52.5,-41.5,39.6C-47,26.7,-52.7,17.5,-59.2,5.5C-65.7,-6.6,-72.9,-21.6,-70.8,-35C-68.8,-48.3,-57.5,-60.1,-44.1,-65.1C-30.8,-70.1,-15.4,-68.3,-1,-66.6C13.3,-65,26.6,-63.5,35,-56.3Z" transform="translate(108 110) rotate(80 0 0)" />
        </Svg>
    </View>
  )
}

export default Blob2