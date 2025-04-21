import { View, Text, StyleSheet } from 'react-native';
import React, { useRef } from 'react';
import MapView, { Marker } from 'react-native-maps';
import MiniCase from '@/components/Map/MiniCase';
import Search from '@/components/main/Search';


const mapstyle = [
  {
    "elementType": "geometry",
    "stylers": [{ "color": "#f5f5f5" }]
  },
  {
    "elementType": "labels.icon",
    "stylers": [{ "visibility": "off" }]
  },
  {
    "elementType": "labels.text.fill",
    "stylers": [{ "color": "#616161" }]
  },
  {
    "elementType": "labels.text.stroke",
    "stylers": [{ "color": "#f5f5f5" }]
  },
  {
    "featureType": "road",
    "elementType": "geometry.fill",
    "stylers": [{ "color": "#b7efc5" }]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry.fill",
    "stylers": [{ "color": "#25a244" }]
  },
  {
    "featureType": "water",
    "elementType": "geometry.fill",
    "stylers": [{ "color": "#c7f3ef" }]
  }
]


const TunisiaBounds = {
  north: 37.5,
  south: 30.2,
  west: 7.0,
  east: 12.0,
};

const MapScreen = () => {
  const mapRef = useRef(null);

  const restrictMapBounds = (region:any) => {
    let { latitude, longitude } = region;

    if (latitude > TunisiaBounds.north) latitude = TunisiaBounds.north;
    if (latitude < TunisiaBounds.south) latitude = TunisiaBounds.south;
    if (longitude > TunisiaBounds.east) longitude = TunisiaBounds.east;
    if (longitude < TunisiaBounds.west) longitude = TunisiaBounds.west;

    if (mapRef.current==null){
      return}
    else{mapRef.current.animateToRegion({ ...region, latitude, longitude }, 500);}
  };

  return (
    <View style={styles.container}>
      <Search></Search>
      
      <MiniCase title={"مدرسة فائع الابتدائية"} category={"التعليم"} liked={false} goal={1500} current={500} supporters={22} date={5}></MiniCase>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, },
  map:{
    width: '100%',
    height: '100%',
    position:'absolute',
    top:0, left:0,
    zIndex:-2 
  },
});

export default MapScreen;


/*
<MapView
        customMapStyle={mapstyle} 
        ref={mapRef}
        style={styles.map}
        initialRegion={{
          latitude: 34.0,
          longitude: 9.0,
          latitudeDelta: 6.5,
          longitudeDelta: 6.5,
        }}
        minZoomLevel={2} 
        maxZoomLevel={40}
        onRegionChangeComplete={restrictMapBounds}
      >
        
      </MapView>
*/