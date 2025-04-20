import { View, Text, StatusBar, StyleSheet, Image, TouchableOpacity } from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { SafeAreaView } from 'react-native-safe-area-context'
import { COLORS } from '@/Constants/constants'
import { customFonts } from '@/Constants/constants'; 
import EditIcon from '@/assets/svgs/Profile/EditIcon';
import Stats from '@/components/Profile/Stats';
import ListItem from '@/components/Profile/ListItem';
import ProfileIcon from '@/assets/svgs/Profile/ProfileIcon';
import BellIcon from '@/assets/svgs/BellIcon';
import HeartIcon from '@/assets/svgs/HeartIcon';
import HistoryIcon from '@/assets/svgs/Profile/HistoryIcon';
import InviteIcon from '@/assets/svgs/Profile/InviteIcon';
import LougoutIcon from '@/assets/svgs/Profile/LougoutIcon';


const profile = () => {
  const fontsLoaded = customFonts();
  return (
    <SafeAreaView style={styles.safearea}>
      <StatusBar backgroundColor={COLORS.White}/>
      <View style={styles.top}>
        <View style={styles.topElement}>
          <View style={styles.imageContainer}>
            <Image source={require("../../assets/images/profile.jpg")} style={styles.img}></Image>            

              <TouchableOpacity style={styles.editBtn}>
                <EditIcon color={COLORS.White} width={16} height={16}></EditIcon>
                <View style={{borderRadius:15, backgroundColor:COLORS.GreenLight, height:30, width:30, position:'absolute', zIndex:-1}}></View>
              </TouchableOpacity>

          </View>
          <Text style={styles.name}>فراس</Text>
        </View>

      </View>

      <View style={styles.stats}>
        <Stats title={'دينار 100'} subtitle={'إجمالي التبرعات'} onPress={() => {}}></Stats>

        <View style={{width:wp(3)}}></View>

        <Stats title={'دينار 100'} subtitle={'إجمالي التبرعات'} onPress={() => {}}></Stats>

        <View style={{width:wp(3)}}></View>
      
        <Stats title={'دينار 100'} subtitle={'إجمالي التبرعات'} onPress={() => {}}></Stats>
      </View>

      <View style={styles.options}>
        <ListItem title={'تعديل الحساب'} icon={<ProfileIcon color={COLORS.White} width={25} height={25}></ProfileIcon>} bg={COLORS.GreenLight} onPress={() => {}}></ListItem>
        <View style={{height:hp(2)}}></View>
        <ListItem title={'إشعارات'} icon={<BellIcon color={COLORS.White} width={25} height={25}></BellIcon>} bg={COLORS.GreenLight} onPress={() => {}}></ListItem>
        <View style={{height:hp(2)}}></View>
        <ListItem title={'المفضل لدي'} icon={<HeartIcon color={COLORS.White} width={22} height={22}></HeartIcon>} bg={COLORS.GreenLight} onPress={() => {}}></ListItem>
        <View style={{height:hp(2)}}></View>
        <ListItem title={'سجل التبرعات'} icon={<HistoryIcon color={COLORS.White} width={22} height={22}></HistoryIcon>} bg={COLORS.GreenLight} onPress={() => {}}></ListItem>
        <View style={{height:hp(2)}}></View>
        <ListItem title={'أرسل دعوة'} icon={<InviteIcon color={COLORS.White} width={22} height={22}></InviteIcon  >} bg={COLORS.GreenLight} onPress={() => {}}></ListItem>

        <View style={{height:hp(8)}}></View>
        <ListItem title={'تسجيل الخروج'} icon={<LougoutIcon color={COLORS.White} width={22} height={22}></LougoutIcon>} bg={COLORS.Red} onPress={() => {}}></ListItem>


      </View>


    </SafeAreaView>
  )
}

export default profile


const styles = StyleSheet.create({
  safearea:{
    flex:1,
    backgroundColor:COLORS.White,
    height:hp(100),
    width:wp(100),
    paddingHorizontal:wp(6),
    
  },

  top:{
    
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
  },

  topElement: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: hp(6),
  },




  img: {
    width: 100,
    height: 100,
    borderRadius: 75, 
    resizeMode: 'cover',
    borderWidth:4,
    borderColor:COLORS.GreenLight
  },
  imageContainer: {
    position: 'relative', 
    width: 130,
    height: 130,
    justifyContent:'center',
    alignItems:'center',
    
    
  },
  
  editBtn: {
    position: 'absolute',
    justifyContent:'center',
    alignItems:'center',
    height:16,
    width:16,
    bottom:18,
    right:28
    
  },

  name:{
    fontSize:hp(3.4),
    marginTop:hp(-1),
    fontFamily:'Zain-Bold'
  },

  stats:{
    width:'100%',
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    marginTop:hp(4),
  },


  options:{
    display:'flex',
    flexDirection:'column',
    marginTop:hp(5)
    
    
    
  },


})