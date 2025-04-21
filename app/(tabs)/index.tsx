import { View, Text, StyleSheet, StatusBar, Image, TouchableOpacity, ScrollView } from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { SafeAreaView } from 'react-native-safe-area-context'
import { customFonts } from '@/Constants/constants'; 
import LinearGradient from 'react-native-linear-gradient';
import { COLORS } from '@/Constants/constants';
import BellIcon from '@/assets/svgs/BellIcon';
import Search from '@/components/main/Search';
import RequestContainer from '@/components/main/RequestContainer';
import Categories from '@/components/main/Categories';
import Case from '@/components/main/Case';
import { Link, useRouter } from 'expo-router';
import Fade from '@/assets/svgs/Fade';
import LottieView from 'lottie-react-native';




const index = () => {
  const fontsLoaded = customFonts();
  const router = useRouter()

  const navigateToCategories = () => {
    router.push('/stacks/CategoriesList')
  }

  const navigateToCases = () => {
    router.push('/stacks/CasesList')
  }

  const navigateToProfile = () => {
    router.push('/(tabs)/profile')
  }

  const navigateToCase = () => {
    router.push('../Case/${id}')
  }


  
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar backgroundColor={COLORS.GreyBg}/>
      <ScrollView style={{}} showsVerticalScrollIndicator={false}>
        <View style={styles.top}>
          <View style={styles.profile}>
            <TouchableOpacity onPress={navigateToProfile}>
              <Image source={require("../../assets/images/profile.jpg")} style={styles.img}></Image>
            </TouchableOpacity>
            <View style={styles.greetings}>
              <Text style={{fontFamily:'Zain-Light', fontSize:hp(1.5)}}>👋 مرحبًا بك</Text>
              <Text style={{fontFamily:'Zain-ExtraBold', fontSize:hp(2.2), color:COLORS.GreenBg}}>فِراس</Text>
            </View>
            
          </View>
          <TouchableOpacity style={styles.notification}>
            <BellIcon color={COLORS.GreyPrimary} width={22} height={22}></BellIcon>
          </TouchableOpacity>
        </View>

        <RequestContainer></RequestContainer>
        
        <Search></Search>

        <View style={styles.titleWrapper}>
          <Text style={styles.header}>تصنيفات</Text>
          <TouchableOpacity onPress={navigateToCategories}>
            <Text style={styles.seeMore}>عرض المزيد</Text>
          </TouchableOpacity>
        </View>    
       
        <Categories></Categories>

        <View style={styles.titleWrapper}>
          <Text style={styles.header}>الأحدث</Text>
          <TouchableOpacity onPress={navigateToCases}>
            <Text style={styles.seeMore}>عرض المزيد</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity onPress={navigateToCase}>
          <Case title={"مدرسة فائع الابتدائية"} category={"التعليم"} liked={true} goal={1500} current={500} supporters={22} date={5}></Case>
        </TouchableOpacity>

        <Link href='../Case/[id]'>CASE</Link>

        <Link href='../auth/OnboardingScreen'>Onboarding</Link>

        <Link href='../auth/SignUp'>SignUp</Link>

        <Link href='../stacks/DonatersList'>DonatersList</Link>

        <View style={{height:hp(50)}}></View>

        
        
      </ScrollView>
    </SafeAreaView>
  )
}



export default index


const styles = StyleSheet.create({
  safeArea:{
    flex:1,
    height:hp(100),
    backgroundColor: COLORS.GreyBg,
  },

  top:{
    marginHorizontal:wp(5),
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    marginTop:hp(2),
    
  },

  profile:{
    
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',

  },

  img:{
    width: 50, 
    height: 50, 
    borderRadius: 25, 
    resizeMode: "cover", 
    marginRight:-wp(1),
  },

  greetings:{
    marginLeft: wp(3),
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'flex-start'
    
  },
  
  notification:{
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf:'center',
    marginRight: 0,

  },
  
  titleWrapper:{
    marginHorizontal:wp(5),
    marginTop:hp(1.5),
    flexDirection:'row-reverse',
    alignItems:'center',
    justifyContent:'space-between',
    


  },

  header:{
    fontFamily:'Zain-ExtraBold',
    fontSize:hp(4),
    

  },
  
  seeMore:{
    fontFamily:'Zain-Regular',
    color:COLORS.GreyPrimary,
    paddingTop:hp(1)
    
  }


})



/* svg fade
<View style={{position:'absolute', right:-wp(2), top:hp(10), transform:[{rotate:"-90deg"}], zIndex:10, width:hp(20), height:hp(5)}}>
          <Fade width={wp(10)} height={wp(10)} color={COLORS.Red}></Fade>
        </View>
        <View style={{position:'absolute', left:-50, top:400, transform:[{rotate:"90deg"}], zIndex:10, width:hp(20), height:hp(5)}}>
          <Fade width={110} height={70} color={COLORS.GreyExtraLight}></Fade>
        </View>*/