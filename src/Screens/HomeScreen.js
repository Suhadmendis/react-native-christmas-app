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

import HOME_PRODUCTS from "../HOME_PRODUCTS.json";

const addIcon = require("../assets/image/HomepageImage/addIcon.png");
const cartIcon = require("../assets/image/HomepageImage/cartIcon.png");
const offerImage = require("../assets/image/HomepageImage/offerImage.png");
const product_1 = require("../assets/image/HomepageImage/product_1.png");
const product_2 = require("../assets/image/HomepageImage/product_2.png");
const product_3 = require("../assets/image/HomepageImage/product_3.png");
const product_4 = require("../assets/image/HomepageImage/product_4.png");
const top_product_1 = require("../assets/image/HomepageImage/top_product_1.png");
const top_product_2 = require("../assets/image/HomepageImage/top_product_2.png");
const top_product_3 = require("../assets/image/HomepageImage/top_product_3.png");
const top_product_4 = require("../assets/image/HomepageImage/top_product_4.png");
const top_product_5 = require("../assets/image/HomepageImage/top_product_5.png");

const banner_1 = require("../assets/image/HomepageImage/banner_1.png");

const PRODUCTS = HOME_PRODUCTS;
const HomeScreen = ({ navigation }) => {
  const [products, setProducts] = useState([]);

  return (
    <SafeAreaView>
      <View style={styles.container}>

      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
