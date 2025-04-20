import { StatusBar, StyleSheet } from 'react-native'
import React from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { SafeAreaView } from 'react-native-safe-area-context'
import {COLORS} from '../../Constants/constants'
import OnboardingSlider from '@/components/Onboarding/OnboardingSlider'




export default function OnboardingScreen () {
  return (
    <SafeAreaView style={styles.safeArea} >
      <StatusBar backgroundColor={COLORS.GreenBg} />
      <OnboardingSlider/>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safeArea:{
    flex: 1,
    backgroundColor: COLORS.GreenBg,
    height:hp(100),
    width:wp(100),
  },

})