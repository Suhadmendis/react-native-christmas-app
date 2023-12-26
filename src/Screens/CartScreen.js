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

const product_1 = require("../assets/image/cartScreenIcons/Image_1.png");
const product_2 = require("../assets/image/cartScreenIcons/Image_2.png");
const product_3 = require("../assets/image/cartScreenIcons/Image_3.png");
const product_4 = require("../assets/image/cartScreenIcons/Image_4.png");
const product_5 = require("../assets/image/cartScreenIcons/Image_5.png");
const product_6 = require("../assets/image/cartScreenIcons/Image_6.png");

const backButton = require("../assets/image/cartScreenIcons/backbutton.png");
const qtyup = require("../assets/image/cartScreenIcons/qtyup.png");
const qtydown = require("../assets/image/cartScreenIcons/qtydown.png");


const CartScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>

      </View>
    </SafeAreaView>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
  },

});
