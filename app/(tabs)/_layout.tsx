import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import TabBar from '@/components/TabBar'

const _layout = () => {
  return (
    <Tabs
        screenOptions={{headerShown:false}}
        tabBar={props=> <TabBar {...props}/>}
        >
        <Tabs.Screen
            name='index'
            options={{
                headerShown:false,
                title:"الرئيسية"
            }}
        />
        <Tabs.Screen
            name='map'
            options={{
                headerShown:false,
                title:"الخريطة"
            }}
            />

        <Tabs.Screen
            name='leaderboard'
            options={{
                headerShown:false,
                title:"المتصدرون"
            }}
            />

        <Tabs.Screen
            name='profile'
            options={{
                headerShown:false,
                title:"حسابي"
            }}
            />


    </Tabs>
  )
}

export default _layout