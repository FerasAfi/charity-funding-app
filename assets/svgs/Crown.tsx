import { View } from 'react-native'
import React from 'react'
import Svg, { Path } from 'react-native-svg'

interface PropType {
    width?: number | string,
    height?:number | string,
    color: string,
  
  }


const Crown = ({width, height, color}:PropType) => {
  return (
    <View>
       <Svg fill={color} width={width} height={height} viewBox="0 0 24 24">
        <Path  d="M16.7702 18.98H7.23024C6.81024 18.98 6.43024 18.71 6.29024 18.32L2.13024 6.67004C1.80024 5.74004 2.86024 4.95004 3.65024 5.52004L7.65024 8.38004C8.18024 8.76004 8.94024 8.53004 9.17024 7.92004L11.0602 2.88004C11.3802 2.01004 12.6102 2.01004 12.9302 2.88004L14.8202 7.92004C15.0502 8.54004 15.8002 8.76004 16.3402 8.38004L20.3402 5.52004C21.1402 4.95004 22.1902 5.75004 21.8602 6.67004L17.7002 18.32C17.5702 18.71 17.1902 18.98 16.7702 18.98Z" fill={color}/>
        <Path d="M17 22H7C6.59 22 6.25 21.66 6.25 21.25C6.25 20.84 6.59 20.5 7 20.5H17C17.41 20.5 17.75 20.84 17.75 21.25C17.75 21.66 17.41 22 17 22Z" fill="#a67c00"/>
        <Path d="M14.5 14.75H9.5C9.09 14.75 8.75 14.41 8.75 14C8.75 13.59 9.09 13.25 9.5 13.25H14.5C14.91 13.25 15.25 13.59 15.25 14C15.25 14.41 14.91 14.75 14.5 14.75Z" fill="#a67c00"/>
        </Svg>
    </View>
  )
}

export default Crown