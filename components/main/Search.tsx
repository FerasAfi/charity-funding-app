import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import SearchIcon from '@/assets/svgs/SearchIcon'
import { COLORS } from '@/Constants/constants'
import FilterIcon from '@/assets/svgs/FilterIcon';
import { useLocalSearchParams, usePathname } from 'expo-router';

const Search = () => {

  const path = usePathname();
  const params = useLocalSearchParams<{query?: string}>();
  const [search, setSearch] = useState(params.query)

  const handleSearch = (text:string) => {
    setSearch(text);
  }

  return (
    
      <View style={styles.bar}>
        <View style={styles.searchZone}>
          <SearchIcon color={COLORS.GreyLight} height={20} width={20}></SearchIcon>
          <TextInput            
            value={search}
            onChangeText={handleSearch} 
            placeholder="بحث"
            style={styles.input}
          />

        </View>

        <TouchableOpacity>
          <FilterIcon color={COLORS.GreenExtralight} height={20} width={20}></FilterIcon>
        </TouchableOpacity>
        
      </View>
      
    
  )
}

export default Search

const styles = StyleSheet.create({
  bar:{
    marginHorizontal:wp(5),
    marginTop:hp(2),
    paddingHorizontal:wp(4),
    height:hp(5.2),
    flexDirection:'row-reverse',
    justifyContent:'space-between',
    alignItems:'center',
    backgroundColor:COLORS.White,
    borderRadius:30,
    //ios
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.2,    
    shadowRadius: 17.6,   
    //andorid
    elevation:5,
    shadowColor:COLORS.GreyDark,
    
  },

  searchZone:{
    flexDirection:'row-reverse',
    justifyContent:'flex-start',
    alignItems:'center',
    flex:1,
    

  },

  input: {
    fontFamily: 'Zain-Regular',   
    color: COLORS.GreyDark,
    textAlign: 'center',
    fontSize:hp(2.1),
    paddingVertical: 0,
    paddingHorizontal:0,
    marginRight:hp(1)
    
    
    
    
    
    
  
  },



})