import { TouchableOpacity, View, Text, Image } from 'react-native'
import React from 'react'

import { COLORS, SIZES, SHADOWS, assets } from '../constants'

export const CircleButton = ({imgUrl, handlePress, ...props}) => {
  return (
    <TouchableOpacity style={{
      width: 35,
      height: 35,
      backgroundColor: COLORS.white,
      position: 'absolute',
      borderRadius: SIZES.extraLarge,
      alignItems: 'center',
      justifyContent: 'center',
      ...SHADOWS.light,
      ...props
    }}
    onPress={handlePress}
    >
      <Image
      style={{
        height: 25,
        width: 25,
      }} 
      source={imgUrl} 
      resizeMode="contain" />
    </TouchableOpacity>
  )
}

export const RectangularButton = () => {
  return (
    <View>
      <Text>RectangularButton</Text>
    </View>
  )
}