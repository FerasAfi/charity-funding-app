import { useFonts } from 'expo-font';


export const COLORS ={
    White: '#ffffff',
    Red:'#fe2e2e',
    Gold:'#ffdc73',
    Bronze:'#d4a96b',

    GreenBg: '#25A244',
    GreenDark:'#1A7431',
    GreenStrong: '#2DC653',
    GreenPrimary: '#4AD66D',
    GreenLight: '#6EDE8A',
    GreenExtralight: '#92E6A7',
    GreenXXLight: '#B7EFC5',
    GreenShade:'#DEEFE2',

    

    GreyDark: '#424242',
    GreyAccent: '#959595',
    GreyPrimary: '#9E9E9E',
    GreyLight: '#BDBDBD',
    GreyExtraLight: '#E0E0E0',
    GreyXXLight: '#EEEEEE',
    GreyXXXLight: '#F5F5F5',
    GreyBg:'#FAFAFA',
    };


    
export const customFonts= () => {
    const [fontsLoaded] = useFonts({
        'Zain-Bold': require('../assets/fonts/Zain-Bold.ttf'),
        'Zain-Black': require('../assets/fonts/Zain-Black.ttf'),
        'Zain-ExtraBold': require('../assets/fonts/Zain-ExtraBold.ttf'),
        'Zain-ExtraLight': require('../assets/fonts/Zain-ExtraLight.ttf'),
        'Zain-Light': require('../assets/fonts/Zain-Light.ttf'),
        'Zain-Regular': require('../assets/fonts/Zain-Regular.ttf'),
        'Zain-Italic': require('../assets/fonts/Zain-Italic.ttf'),       
        });
    return fontsLoaded
};
