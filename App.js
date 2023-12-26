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

function SearchScreen(){
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Search Screen</Text>
    </View>
  )
}

function BarcodeScreen(){
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Barcode Screen</Text>
    </View>
  )
}

function LikeScreen(){
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Like Screen</Text>
    </View>
  )
}

function ProfileScreen(){
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Profile Screen</Text>
    </View>
  )
}

const Stack = createStackNavigator();

function StackScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Home' component={HomeScreen} options={{ headerShown: false }} />
      <Stack.Screen name='Cart' component={CartScreen} options={{ headerShown: false }} />
      <Stack.Screen name='Detail' component={DetailScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  )
}

function getTabBarVisibility(route) {
  const routeName = getFocusedRouteNameFromRoute(route) ?? 'INITIAL';

  if (routeName == 'Cart') {
    return false;
  }
  if (routeName == 'Detail') {
    return false;
  }
  return true;
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <>
      <StatusBar hidden />
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            headerShown: false,
            tabBarShowLabel: false,
            tabBarStyle: {
              display: getTabBarVisibility(route) ? 'flex' : 'none',
              position: 'absolute',
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
              shadowColor: 'black',
              shadowOffset: {
                width: 0,
                height: 10,
              },
              shadowOpacity: 0.3,
              shadowRadius: 20,
              elevation: 10,
            },
            tabBarIcon: ({ focused }) => {
              let icon = "";
              let size = 24;

              if (route.name === 'INITIAL') {
                icon = focused ?  footer_home_active : footer_home;
                size = 24;
              } else if (route.name === 'Search') {
                icon = focused ?  footer_search_active : footer_search;
                size = 24;
              } else if (route.name === 'Barcode') {
                icon = footer_barcode;
                size = 20;
              } else if (route.name === 'Like') {
                icon = focused ?  footer_like_active : footer_like;
                size = 24;
              } else if (route.name === 'Profile') {
                icon = focused ?  footer_profile_active : footer_profile;
                size = 24;
              }

              if (route.name === 'Barcode') {
                return (
                  <View style={styles.footerMainButton}>
                    <Image source={icon} resizeMode="contain" style={{ width: size }} />
                  </View>
                )
              }else{
                return (
                  <Image source={icon} resizeMode="contain" style={{ width: size }} />
                )
              }
            }
          })}
        >
        <Tab.Screen name="INITIAL" component={StackScreen} />
        <Tab.Screen name="Search" component={SearchScreen} />
        <Tab.Screen name="Barcode" component={BarcodeScreen} />
        <Tab.Screen name="Like" component={LikeScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  footerIconStyle: {},
  footerMainButton: {
    position: 'absolute',
    top: -30,
    width: 65,
    height: 65,
    borderWidth: 4,
    borderColor: '#EBEBEB',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '100%',
    backgroundColor: '#FF0000',
  }
});
