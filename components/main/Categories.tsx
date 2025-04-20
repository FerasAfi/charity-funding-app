import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native'
import EducationIcon from '@/assets/svgs/Categories/EducationIcon';
import { COLORS } from '@/Constants/constants';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import NatureIcon from '@/assets/svgs/Categories/NatureIcon';
import HealthIcon from '@/assets/svgs/Categories/HealthIcon';
import DisasterIcon from '@/assets/svgs/Categories/DisasterIcon';
import HungerIcon from '@/assets/svgs/Categories/HungerIcon';
import AnimalIcon from '@/assets/svgs/Categories/AnimalIcon';



interface PropType{
    title:string;
    icon:JSX.Element;
    onPress: () => void;
}

const Category = ({title, icon, onPress}:PropType) => {
    return(
        <TouchableOpacity onPress={onPress}>
            <View style={styles.container}>
                
                <View style={styles.iconContainer}>
                    <View style={{}}></View>
                    {icon}
                </View>
                <Text style={styles.title}>{title}</Text>
            </View>
        </TouchableOpacity>
    );
}






const Categories = () => {
  
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ flexDirection: 'row', }} >
        <Category title='التعليم' icon={<EducationIcon color={COLORS.GreenPrimary} width={40} height={40}></EducationIcon>} onPress={()=>{}}></Category>
        <Category title='حماية البيئة' icon={<NatureIcon color={COLORS.GreenPrimary} width={40} height={40}></NatureIcon>} onPress={()=>{}}></Category>
        <Category title='الرعاية الصحية' icon={<HealthIcon color={COLORS.GreenPrimary} width={40} height={40}></HealthIcon>} onPress={()=>{}}></Category>
        <Category title='إغاثة الكوارث' icon={<DisasterIcon color={COLORS.GreenPrimary} width={40} height={40}></DisasterIcon>} onPress={()=>{}}></Category>
        <Category title='مكافحة الجوع' icon={<HungerIcon color={COLORS.GreenPrimary} width={40} height={40}></HungerIcon>} onPress={()=>{}}></Category>
        <Category title='رعاية الحيوانات' icon={<AnimalIcon color={COLORS.GreenPrimary} width={40} height={40}></AnimalIcon>} onPress={()=>{}}></Category>
        <View style={{width:wp(5)}}>

        </View>

    </ScrollView>
  )
}

export default Categories

const styles = StyleSheet.create({
    container:{
        marginTop:hp(1.5),
        marginLeft:wp(5),
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        
        
    },

    iconContainer:{
        height:hp(7),
        width:hp(7),
        borderRadius:hp(3.5),
        backgroundColor:COLORS.GreenShade,
        justifyContent:'center',
        alignItems:'center',
    },

    title:{
        fontFamily:'Zain-Bold',
        textAlign:'center',
        marginTop:hp(0.5),
        color:COLORS.GreyDark

    }
})