import { View} from 'react-native'
import React from 'react'
import Svg, { Path } from 'react-native-svg'

interface Bg2Props {
  color: string;
  height?: number | string;
  width?: number | string;
}


const Bg2 = ({ color, height,width }: Bg2Props) => {
  return (
    <View>
        <Svg width={height} height={width} viewBox="0 0 384 408" fill={color}>
            <Path d="M187.721 406.047C59.1746 413.661 -38.368 406.523 16.0442 175.55C62.1179 -20.0271 171.397 -25.527 297.397 33.973C348.397 58.0565 352.897 90.473 382.397 259.973C391.397 394.973 317.804 410.597 187.721 406.047Z" fill="#2DC653"/>
        </Svg>
    </View>
  )
}

export default Bg2