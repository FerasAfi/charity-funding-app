import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { View, StyleSheet } from 'react-native';
import { SvgProps } from 'react-native-svg';
import { useLinkBuilder } from '@react-navigation/native';
import { Text, PlatformPressable } from '@react-navigation/elements';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { COLORS } from '@/Constants/constants';
import Home from '@/assets/svgs/TabBar/Home';
import Map from '@/assets/svgs/TabBar/Map';
import LeaderBoard from '@/assets/svgs/TabBar/LeaderBoard';
import Profile from '@/assets/svgs/TabBar/Profile';


const iconSize = 26;

function MyTabBar({ state, descriptors, navigation }: BottomTabBarProps) {
  const icons: Record<string, (props: SvgProps) => JSX.Element> = {
    index: (props) => <Home width={iconSize} height={iconSize} color={props.color ?? '#000'} {...props} />,
    map: (props) => <Map width={iconSize} height={iconSize} color={props.color ?? '#000'} {...props} />,
    leaderboard: (props) => <LeaderBoard width={iconSize} height={iconSize} color={props.color ?? '#000'} {...props} />,
    profile: (props) => <Profile width={iconSize} height={iconSize} color={props.color ?? '#000'} {...props} />,
  };

  const { buildHref } = useLinkBuilder();

  return (        
            <View style={styles.tabBar}>
            {state.routes.map((route, index) => {
              const { options } = descriptors[route.key];
              const label =
                options.tabBarLabel !== undefined
                  ? options.tabBarLabel
                  : options.title !== undefined
                  ? options.title
                  : route.name;

              const isFocused = state.index === index;

              const onPress = () => {
                const event = navigation.emit({
                  type: 'tabPress',
                  target: route.key,
                  canPreventDefault: true,
                });

                if (!isFocused && !event.defaultPrevented) {
                  navigation.navigate(route.name, route.params);
                }
              };

              const onLongPress = () => {
                navigation.emit({
                  type: 'tabLongPress',
                  target: route.key,
                });
              };

              return (
                <PlatformPressable
                  style={styles.tabBarItem}
                  key={route.key}
                  href={buildHref(route.name, route.params)}
                  accessibilityState={isFocused ? { selected: true } : {}}
                  accessibilityLabel={options.tabBarAccessibilityLabel}
                  testID={options.tabBarButtonTestID}
                  onPress={onPress}
                  onLongPress={onLongPress}
                >
                  {icons[route.name] &&
                    icons[route.name]({
                      color: isFocused ? COLORS.GreenBg : COLORS.GreyPrimary,
                    })}

                  <Text
                    style={{
                      color: isFocused ? COLORS.GreenBg : COLORS.GreyPrimary,
                      fontFamily: 'Zain-Bold',
                    }}
                  >
                    {label}
                  </Text>
                </PlatformPressable>
              );
            })}
          </View>
    
      
  );
}

export default MyTabBar;





const styles = StyleSheet.create({
  tabBar:{
    flex:1,
    width:'100%',
    position:'absolute',
    bottom:0,
    alignSelf:'center',
    flexDirection:'row-reverse',
    justifyContent:'center',
    alignItems:'center',
    height:hp(9),
    backgroundColor:COLORS.White,
    borderTopLeftRadius:35,
    borderTopRightRadius:35,
    overflow:'hidden',
    gap:wp(11),

    //ios
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,    
    shadowRadius: 12,   
    //andorid
    elevation:5,
    shadowColor:COLORS.GreyDark,

  },

  tabBarItem:{
    justifyContent:'space-between',
    alignItems: 'center',
  


  },

})