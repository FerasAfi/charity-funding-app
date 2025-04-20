import { View, Text, Image,FlatList, StyleSheet, NativeSyntheticEvent, NativeScrollEvent, Animated} from 'react-native'
import React from 'react'
import {Slidesdata, slidesdata} from '../../Constants/data'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { useRef, useState, useEffect } from 'react';
import { customFonts } from '@/Constants/constants'; 
import { COLORS } from '@/Constants/constants';
import Pagination from './Pagination';
import Buttons from './Buttons';



type SlideProps = {
    item: Slidesdata;
  };
const SlideIllus = ({ item }: SlideProps) => {
    return (
        <View style={{alignItems: 'center', width: wp(100), height:'100%'}}>           
            <Image source={item.illustration} style={styles.illus} />
            <View style={{ position:'absolute', top: 0, zIndex:-1, alignItems:'center', justifyContent:'center'}}>
              {item.blob}
            </View>
        </View>      
    )
}
const SlideOther = ({item}: SlideProps) => {
    return (
        <View style={{alignItems: 'center', width: wp(100),minHeight:hp(44), padding:hp(3.0), paddingHorizontal:40}}>
            <View style={{height:hp(11), marginTop:hp(0.7)}}><Text style={styles.title}>{item.title}</Text></View>
            <View style={{marginHorizontal:wp(10.7),marginTop:hp(0.8)}}><Text style={styles.subtitle}>{item.subtitle}</Text> </View>
        </View>
    )
}








export default function OnboardingSlider() {
    const fontsLoaded = customFonts();

    const scrollX = useRef(new Animated.Value(0)).current;

    const topFlatListRef = useRef<FlatList>(null);
    const bottomFlatListRef = useRef<FlatList>(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
        const offsetX = event.nativeEvent.contentOffset.x;
        const index = Math.round(offsetX/wp(100));

        topFlatListRef.current?.scrollToOffset({ offset: offsetX, animated: false });
        bottomFlatListRef.current?.scrollToOffset({ offset: offsetX, animated: false });
        scrollX.setValue(offsetX);
        setCurrentIndex(index);
      };
      
      const handleNext = () => {
        if (currentIndex < slidesdata.length - 1) {
          const nextOffset = (currentIndex + 1) * wp(100);
          topFlatListRef.current?.scrollToOffset({ offset: nextOffset, animated: false });
          bottomFlatListRef.current?.scrollToOffset({ offset: nextOffset, animated: false });
          setCurrentIndex(currentIndex + 1);
        }
      };
    
      const handleSkip = () => {
        const lastOffset = (slidesdata.length - 1) * wp(100);
        topFlatListRef.current?.scrollToOffset({ offset: lastOffset, animated: false });
        bottomFlatListRef.current?.scrollToOffset({ offset: lastOffset, animated: false });
        setCurrentIndex(slidesdata.length - 1);
      };
    

  return (
    <View style={{flex:1}}>
      <View style={styles.topContainer}>
        <FlatList
            ref={topFlatListRef}
            data={slidesdata}
            pagingEnabled
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({item}: {item: Slidesdata}) => <SlideIllus item={item}/>}
            keyExtractor={(item) => item.id.toString()} 
            scrollEnabled={false}
        />

       </View>  
      
      <View style={styles.bottomContainer}>
        <FlatList
            ref={bottomFlatListRef}
            data={slidesdata}
            pagingEnabled
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({item}: {item: Slidesdata}) => <SlideOther item={item}/>}
            keyExtractor={(item) => item.id.toString()}
            scrollEventThrottle={16}
            onScroll={handleScroll}
            
        />
        <Pagination data={slidesdata} scrollX={scrollX}/>

        <Buttons next={handleNext} skip={handleSkip} index={currentIndex} slides={slidesdata}/>
      </View>
      
    </View>
  )
}



const styles = StyleSheet.create({


    topContainer:{
        flex:1,   

    },

    bottomContainer:{
        flex:1,
        backgroundColor: COLORS.White,
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        bottom:0,
        minWidth:wp(100),
        maxHeight:hp(44)
    },

    illus:{    
        position:'absolute',
        width:wp(70),
        height:hp(35),
        resizeMode:'contain',
        marginTop:hp(5),
        
    },

    title:{
        fontFamily: "Zain-ExtraBold",
        fontSize: hp(4.1),
        textAlign:'center',
        color: COLORS.GreyDark,

    },
    subtitle:{
        fontSize:hp(2),
        textAlign:'center',
        fontFamily: "Zain-Bold",
        color:COLORS.GreyPrimary,
    },

})


