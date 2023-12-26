import React, { useState } from "react";
import {
  Alert,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Swiper from "react-native-swiper";

import PRODUCTS from "../PRODUCTS.json";

const product_1 = require("../assets/image/detailScreenIcons/Image_1.png");
const product_2 = require("../assets/image/detailScreenIcons/Image_2.png");
const product_3 = require("../assets/image/detailScreenIcons/Image_3.png");
const product_4 = require("../assets/image/detailScreenIcons/Image_4.png");
const product_5 = require("../assets/image/detailScreenIcons/Image_5.png");
const product_6 = require("../assets/image/detailScreenIcons/Image_6.png");

const backButton = require("../assets/image/detailScreenIcons/backbutton.png");
const cart_white = require("../assets/image/detailScreenIcons/cart_white.png");
const star = require("../assets/image/detailScreenIcons/star.png");

const DetailScreen = ({ route }) => {

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>

      </View>
    </SafeAreaView>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
  },

});
