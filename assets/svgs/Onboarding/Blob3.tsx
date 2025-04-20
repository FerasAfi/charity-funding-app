import { View, Text } from 'react-native'
import React from 'react'
import Svg, { Path } from 'react-native-svg'


interface PropType {
    width?: number | string,
    height?:number | string,
    color: string,

}

const Blob3 = ({width, height, color}:PropType) => {
  return (
    <View>
        <Svg fill={color} width={width} height={height} viewBox="0 0 200 200">
          <Path d="M29.9,-50.6C40.9,-45.5,53.3,-41.7,63.6,-33.5C73.9,-25.3,82.1,-12.6,75.3,-3.9C68.5,4.8,46.7,9.6,38.8,22C31,34.5,37,54.6,32.9,68.6C28.7,82.6,14.4,90.5,0.6,89.5C-13.2,88.5,-26.4,78.6,-32.7,65.8C-38.9,53,-38.2,37.3,-41.3,25.9C-44.4,14.4,-51.4,7.2,-59.4,-4.6C-67.3,-16.4,-76.4,-32.9,-74.2,-45.9C-72,-58.9,-58.5,-68.4,-44.2,-71.6C-30,-74.8,-15,-71.6,-2.8,-66.8C9.5,-62,19,-55.7,29.9,-50.6Z" transform="translate(87 100) rotate(150 0 0)" />
        </Svg>

    </View>
  )
}

export default Blob3