import { StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { COLORS } from '@/Constants/constants'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import EducationIcon from '@/assets/svgs/Categories/EducationIcon';
import NatureIcon from '@/assets/svgs/Categories/NatureIcon';
import HealthIcon from '@/assets/svgs/Categories/HealthIcon';
import DisasterIcon from '@/assets/svgs/Categories/DisasterIcon';
import HungerIcon from '@/assets/svgs/Categories/HungerIcon';
import AnimalIcon from '@/assets/svgs/Categories/AnimalIcon';
import ArrowIcon from '@/assets/svgs/Profile/ArrowIcon';
import Arrow from '@/assets/svgs/Case/Arrow';
import { useRouter } from 'expo-router';



interface Porptype {

  name:string;
  icon:JSX.Element;
  onPress: () => void;

}

const CategoryContainer = ({name, icon, onPress}:Porptype) => {
  return(
    <TouchableOpacity style={styles.categoryContainer}>
        <View style={styles.right}>
          <Text style={styles.name}>{name}</Text>
          {icon}
        </View>
        <ArrowIcon color={COLORS.GreyDark} width={45} height={45}></ArrowIcon>
    </TouchableOpacity>
  )

}



const CategoriesList = () => {

  const router = useRouter()
    
      const navigateToHome = () => {
        router.push('/')
      }
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar backgroundColor={COLORS.GreyBg}></StatusBar>
        <View style={styles.top}>
        <TouchableOpacity onPress={navigateToHome}>
              <View style={{backgroundColor:COLORS.White, width:30, height:30, borderRadius:15, justifyContent:'center', alignItems:'center', marginLeft:wp(5), marginTop:hp(1)}}>
                  <Arrow color={COLORS.GreenPrimary} width={24} height={24}></Arrow>
              </View>
          </TouchableOpacity>
          <Text style={styles.header}>كل التصنيفات</Text>
        </View>
        <View style={{marginTop:hp(4)}}>
          <CategoryContainer name = {'التعليم'} icon={<EducationIcon color={COLORS.GreenPrimary} width={40} height={40}></EducationIcon>} onPress={() => {}}></CategoryContainer>
          <CategoryContainer name = {'حماية البيئة'} icon={<NatureIcon color={COLORS.GreenPrimary} width={40} height={40}></NatureIcon>} onPress={() => {}}></CategoryContainer>
          <CategoryContainer name = {'الرعاية الصحية'} icon={<HealthIcon color={COLORS.GreenPrimary} width={40} height={40}></HealthIcon>} onPress={() => {}}></CategoryContainer>
          <CategoryContainer name = {'إغاثة الكوارث'} icon={<DisasterIcon color={COLORS.GreenPrimary} width={40} height={40}></DisasterIcon>} onPress={() => {}}></CategoryContainer>
          <CategoryContainer name = {'مكافحة الجوع'} icon={<HungerIcon color={COLORS.GreenPrimary} width={40} height={40}></HungerIcon>} onPress={() => {}}></CategoryContainer>
          <CategoryContainer name = {'رعاية الحيوانات'} icon={<AnimalIcon color={COLORS.GreenPrimary} width={40} height={40}></AnimalIcon>} onPress={() => {}}></CategoryContainer>
        </View>
    </SafeAreaView>
  )
}

export default CategoriesList

const styles = StyleSheet.create({
  safeArea:{
    flex:1,
    backgroundColor:COLORS.GreyBg,
    alignItems:'stretch',


  },
  top:{
    flexDirection:'row',
    justifyContent:'flex-start',
    alignItems:'center',

  },


  header:{
    fontFamily:"Zain-Bold",
    fontSize:hp(3.2),
    textAlign:'center',
    marginLeft:wp(20),
    marginTop:hp(0.5)

  },

  categoryContainer:{
    marginBottom:hp(0.7),
    backgroundColor:COLORS.GreenShade,
    borderRadius:15,
    marginHorizontal:wp(5),
    flexDirection:'row-reverse',
    justifyContent:'space-between',
    alignItems:'center',
    paddingVertical:hp(2),
    paddingHorizontal:hp(2)
  },

  right:{
    flexDirection:'row',
    justifyContent:'flex-end',
    alignItems:'center',
  },

  name:{
    fontFamily:"Zain-Bold",
    fontSize:hp(2.5),
    marginRight:12

  }

})