import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Arrow from '@/assets/svgs/Case/Arrow';
import { COLORS } from '@/Constants/constants';
import { SearchBar } from 'react-native-screens';
import Search from '@/components/main/Search';


const CasesList = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar backgroundColor={COLORS.GreyBg}></StatusBar>
        <View style={styles.top}>
        <TouchableOpacity>
              <View style={{backgroundColor:COLORS.White, width:30, height:30, borderRadius:15, justifyContent:'center', alignItems:'center', marginLeft:wp(5), marginTop:hp(1)}}>
                  <Arrow color={COLORS.GreenPrimary} width={24} height={24}></Arrow>
              </View>
          </TouchableOpacity>
          <Text style={styles.header}>جميع الحالات</Text>
        </View>
          <Search></Search>
        <View style={{marginTop:hp(4)}}>
        <ScrollView
        showsVerticalScrollIndicator={false}
        style={{marginTop:hp(4), marginHorizontal:wp(5)}}>
            <View style={{flexDirection:'column', gap:hp(1.5)}}>
                
            </View>
        </ScrollView>
        </View>
    </SafeAreaView>
  )
}

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

})

export default CasesList

