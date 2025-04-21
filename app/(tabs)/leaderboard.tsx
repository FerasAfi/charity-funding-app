import { View, Text, StyleSheet, StatusBar, Image, ScrollView } from 'react-native'
import React from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { COLORS } from '@/Constants/constants';
import Crown from '@/assets/svgs/Crown';



interface PropType {
  rank:string;
  name:string;
  amount:number;
  avatar:any;
}



const DonaterRankItem = ({rank, name, amount, avatar} : PropType) => {
  const avatarPic = require('../../assets/images/ananymous.jpg');

  return(
    <View style={stylesComp.container}>

      <Text style={stylesComp.rank}>{rank}</Text>

      <View style={stylesComp.content}>
        <Image 
        source={avatarPic}
        style={stylesComp.avatar}
        resizeMode='cover'
        ></Image>
        <View style={stylesComp.side}>
          <Text style={stylesComp.name}>{name}</Text>
          <Text style={stylesComp.amount}>{amount}  د.ت</Text>
        </View>
      </View>

    </View>
  )

}



const stylesComp = StyleSheet.create({
  container:{
    marginTop:hp(1),
    backgroundColor:COLORS.White,
    width:wp(95),
    height:hp(7),
    marginHorizontal:wp(5),
    paddingHorizontal:wp(4),
    flexDirection:'row-reverse',
    alignItems:'center',
    borderRadius:20,
  },

  rank:{
    fontFamily:'Zain-Bold',
    color:COLORS.GreyDark,
    fontSize:hp(2.5),
  },

  content:{
    flexDirection:'row-reverse',
    marginRight:17,

  },

  side:{
    flexDirection:'column',
    marginRight:10,
    justifyContent:'center',
    

  },

  avatar:{
    height:hp(5),
    width:hp(5),
    borderRadius:150
  },

  name:{
    fontFamily:'Zain-Regular',
    color:COLORS.GreyDark,
    textAlign:'right',
    fontSize:hp(2)

  },

  amount:{
    fontFamily:'Zain-Black',
    color:COLORS.GreyDark,
    textAlign:'right',
    fontSize:hp(1.8)


  }
})



const leaderboard = () => {
  return (
    <View style={styles.main}>
      <StatusBar backgroundColor={COLORS.GreenShade}></StatusBar>
      <View style={styles.content}>
            <View style={styles.pelares}>
              <View style={styles.second}>
                <Image
                  source={require('../../assets/images/avatar2.jpeg')}
                  style={styles.avatar}
                  resizeMode='cover'
                  ></Image>
                <Text style={{fontFamily:'Zain-Bold', marginVertical:hp(1) }}>إسراء</Text>
                <View style={styles.bannerSecond}><Text style={styles.bannerText}>1500 د.ت</Text></View>
                <View style={styles.pelare2}><Text style={styles.number}>#2</Text></View>
              </View>

              <View style={styles.first}>
                <Crown color={COLORS.Gold} height={hp(6)} width={hp(6)}></Crown>
                <Image
                  source={require('../../assets/images/avatar1.jpeg')}
                  style={[styles.avatar, {height:hp(8), width:hp(8)}]}
                  resizeMode='cover'
                  ></Image>
                <Text style={{fontFamily:'Zain-Bold', marginVertical:hp(1) }}>khalid A.</Text>
                <View style={styles.bannerFirst}><Text style={styles.bannerText}>2800 د.ت</Text></View>
                <View style={styles.pelare1}><Text style={styles.number}>#1</Text></View>
              </View>

              <View style={styles.third}>
                <Image
                  source={require('../../assets/images/ananymous.jpg')}
                  style={styles.avatar}
                  resizeMode='cover'
                  ></Image>
                <Text style={{fontFamily:'Zain-Bold', marginVertical:hp(1) }}>مجهول122</Text>
                <View style={styles.bannerThird}><Text style={styles.bannerText}>855 د.ت</Text></View>
                <View style={styles.pelare3}><Text style={styles.number}>#3</Text></View>
              </View>
            </View> 

            <ScrollView
              style={styles.container}
              showsVerticalScrollIndicator={false}
            >
              <DonaterRankItem rank={'4#'} name={'مجهول1202'} amount={450} avatar={'../../assets/images/avatar1.jpeg'}></DonaterRankItem>
              <DonaterRankItem rank={'5#'} name={'مجهول0546'} amount={200} avatar={'../../assets/images/avatar1.jpeg'}></DonaterRankItem>
              <DonaterRankItem rank={'6#'} name={'مجهول52'} amount={190} avatar={'../../assets/images/avatar1.jpeg'}></DonaterRankItem>
              <DonaterRankItem rank={'7#'} name={'مجهول002'} amount={150} avatar={'../../assets/images/avatar1.jpeg'}></DonaterRankItem>
              <DonaterRankItem rank={'8#'} name={'مجهول903'} amount={100} avatar={'../../assets/images/avatar1.jpeg'}></DonaterRankItem>
              <DonaterRankItem rank={'9#'} name={'مجهول303'} amount={80} avatar={'../../assets/images/avatar1.jpeg'}></DonaterRankItem>
              <DonaterRankItem rank={'10#'} name={'مجهول18902'} amount={450} avatar={'../../assets/images/avatar1.jpeg'}></DonaterRankItem>
              <DonaterRankItem rank={'11#'} name={'مجهول8908'} amount={200} avatar={'../../assets/images/avatar1.jpeg'}></DonaterRankItem>
              <DonaterRankItem rank={'12#'} name={'مجهول23'} amount={190} avatar={'../../assets/images/avatar1.jpeg'}></DonaterRankItem>
              <DonaterRankItem rank={'13#'} name={'مجهول81'} amount={150} avatar={'../../assets/images/avatar1.jpeg'}></DonaterRankItem>
              <DonaterRankItem rank={'14#'} name={'مجهول5'} amount={100} avatar={'../../assets/images/avatar1.jpeg'}></DonaterRankItem>
              <DonaterRankItem rank={'15#'} name={'مجهول65'} amount={80} avatar={'../../assets/images/avatar1.jpeg'}></DonaterRankItem>

            
            </ScrollView>
      </View>


    </View>
  )
}



const styles = StyleSheet.create({
  main:{
    flex:1,
    alignItems:'center',
    backgroundColor:COLORS.GreenShade,
  },

  content:{
    position:'absolute',
    bottom:0,

  },

  container:{
    overflow:'hidden',
  
    backgroundColor:COLORS.GreyBg,
    borderTopRightRadius:33,
    borderTopLeftRadius:33,
    width:wp(100),
    height:hp(50), 
  },


  pelares:{
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'flex-end',
    gap:wp(4),
    

  },

  number:{
    color:COLORS.White,
    fontFamily:'Zain-Black',
    fontSize:hp(5),
    marginTop:hp(1.3),

  },


  first:{
    alignItems:'center',

  },

  avatar:{
    width:hp(5),
    height:hp(5),
    borderRadius:300
    
  },

  bannerText:{
    fontFamily:'Zain-Bold',
    color:COLORS.White,
    fontSize:hp(1.9)
  },

  bannerFirst:{
    width:'75%',
    height:hp(3),
    backgroundColor:COLORS.Gold,
    borderRadius:50,
    marginBottom:hp(1.3),
    justifyContent:'center',
    alignItems:'center'

  },

 
  pelare1:{
    width:wp(28),
    height:hp(14),
    backgroundColor:COLORS.GreenPrimary,
    borderTopRightRadius:14,
    borderTopLeftRadius:14,
    alignItems:'center',
    justifyContent:'center',
  },


  second:{
    alignItems:'center',

  },

  bannerSecond:{
    width:'75%',
    height:hp(3),
    backgroundColor:COLORS.Bronze,
    borderRadius:50,
    marginBottom:hp(1.3),
    justifyContent:'center',
    alignItems:'center'

  },

  pelare2:{
    width:wp(25),
    height:hp(11),
    backgroundColor:COLORS.GreenExtralight,
    borderTopRightRadius:14,
    borderTopLeftRadius:14,
    alignItems:'center',
    justifyContent:'center',
  },



  third:{
    alignItems:'center',

  },

  bannerThird:{
    width:'75%',
    height:hp(3),
    backgroundColor:COLORS.GreyLight,
    borderRadius:50,
    marginBottom:hp(1.3),
    justifyContent:'center',
    alignItems:'center'

  },

  pelare3:{
    width:wp(25),
    height:hp(7),
    backgroundColor:COLORS.GreenExtralight,
    borderTopRightRadius:14,
    borderTopLeftRadius:14,
    alignItems:'center',
    justifyContent:'center',
  }



})



export default leaderboard