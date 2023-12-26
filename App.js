import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer, getFocusedRouteNameFromRoute } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { Image, StyleSheet, Text, View } from "react-native";


import HomeScreen from "./src/Screens/HomeScreen";
import CartScreen from "./src/Screens/CartScreen";
import DetailScreen from "./src/Screens/DetailScreen";
import { createStackNavigator } from "@react-navigation/stack";

const footer_home = require('./src/assets/image/footerIcons/home.png');
const footer_home_active = require('./src/assets/image/footerIcons/home_active.png');
const footer_search = require('./src/assets/image/footerIcons/search.png');
const footer_search_active = require('./src/assets/image/footerIcons/search_active.png');
const footer_like = require('./src/assets/image/footerIcons/like.png');
const footer_like_active = require('./src/assets/image/footerIcons/like_active.png');
const footer_profile = require('./src/assets/image/footerIcons/profile.png');
const footer_profile_active = require('./src/assets/image/footerIcons/profile_active.png');

const footer_barcode = require('./src/assets/image/footerIcons/barcode.png');

export default function App() {
  return (
    <>
      <StatusBar hidden />
    </>
  );
}

const styles = StyleSheet.create({

});
