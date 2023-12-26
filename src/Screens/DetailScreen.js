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
  const ID = route.params.ID;

  const product = PRODUCTS.filter((element) => element.id === ID);

  let imageName = '';


  if (product[0].id == 1) { imageName = product_1 }
  if (product[0].id == 2) { imageName = product_2 }
  if (product[0].id == 3) { imageName = product_3 }
  if (product[0].id == 4) { imageName = product_4 }
  if (product[0].id == 5) { imageName = product_5 }
  if (product[0].id == 6) { imageName = product_6 }

  console.log(imageName);
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.topSection}>
          <TouchableOpacity style={styles.backButtonArea} activeOpacity={0.9}>
            <Image
              source={backButton}
              resizeMode="contain"
              style={styles.backIcon}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.bannerSection}>
          <Swiper
          autoplay={true}
          autoplayTimeout={1}
            style={styles.banner}
            dot={<View style={styles.dot} />}
            activeDot={<View style={styles.activeDot} />}
          >
            <View style={styles.slider}>
              <Image
                source={imageName}
                resizeMode="contain"
                style={styles.bannerImage}
              />
            </View>
            <View style={styles.slider}>
              <Image
                source={imageName}
                resizeMode="contain"
                style={styles.bannerImage}
              />
            </View>
            <View style={styles.slider}>
              <Image
                source={imageName}
                resizeMode="contain"
                style={styles.bannerImage}
              />
            </View>
          </Swiper>
        </View>

        <View style={styles.infoArea}>
          <View style={styles.infoTitleArea}>
            <Text style={styles.infoTitle}>{product[0].name}</Text>
            <View style={styles.infoRatingArea}>
              <Image
                source={star}
                resizeMode="contain"
                style={styles.starIcon}
              />
              <Text style={styles.starText}>{product[0].rating}</Text>
            </View>
          </View>
          <Text style={styles.infoDes}>{product[0].description}</Text>
          <Text style={styles.infoPrice}>${product[0].price}.00</Text>

          <View style={styles.infoColorArea}>
            <Text style={styles.infoColorText}>Color: </Text>
            {product[0].colors.map((color) => {
              return (
                <View
                  style={[
                    styles.infoColorButton,
                    { backgroundColor: color.hex },
                  ]}
                />
              );
            })}
          </View>

          <View style={styles.infoSizeArea}>
            {
              product[0].sizes.length != 0 ? <Text style={styles.infoSizeText}>Size: </Text> : null
            }
            {product[0].sizes.map((size) => {
              return (
                <View style={styles.infoSizeButton}>
                  <Text style={styles.infoSizeButtonText}>{size}</Text>
                </View>
              );
            })}
          </View>
        </View>
      </View>
      <View style={styles.buyNowArea}>
        <TouchableOpacity style={styles.buyNowLeft} activeOpacity={0.9}>
          <Image
            source={cart_white}
            resizeMode="contain"
            style={styles.addToCartButton}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.buyNowRight} activeOpacity={0.9}>
          <Text style={styles.buyNowButtonText}>BUY NOW</Text>
        </TouchableOpacity>
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
    paddingLeft: 15,
    paddingRight: 15,
  },
  topSection: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  backButtonArea: {
    width: 50,
    height: 40,
    justifyContent: "center",
  },
  backIcon: {
    width: 20,
    height: 20,
  },
  bannerSection: {
    marginTop: 20,
    height: 350,
    padding: 10,
  },
  slider: {
    width: 250,
    height: 250,
    alignSelf: "center",
  },
  bannerImage: {
    width: "97%",
    height: "100%",
  },
  dot: {
    backgroundColor: "#BFBFBF",
    width: 8,
    height: 8,
    borderRadius: 4,
    margin: 3,
  },
  activeDot: {
    backgroundColor: "#FF0000",
    width: 20,
    height: 8,
    borderRadius: 4,
    margin: 3,
  },
  infoArea: {
    marginTop: 20,
  },
  infoTitleArea: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  infoTitle: {
    fontSize: 24,
  },
  infoRatingArea: {
    marginLeft: 10,
    width: 45,
    height: 20,
    flexDirection: "row",
    backgroundColor: "white",
    borderRadius: 10,
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  starIcon: {
    width: 12,
    height: 12,
  },
  starText: {
    fontSize: 10,
  },
  infoDes: {
    fontSize: 16,
    color: "#9E9E9E",
    marginBottom: 30,
  },
  infoPrice: {
    fontSize: 22,
    color: "#FF0000",
  },
  infoColorArea: {
    marginTop: 30,
    flexDirection: "row",
    alignItems: "center",
  },
  infoColorText: {
    fontSize: 17,
    marginRight: 5,
  },
  infoColorButton: {
    marginLeft: 5,
    width: 18,
    height: 18,
    borderRadius: 20,
  },
  infoSizeArea: {
    marginTop: 30,
    flexDirection: "row",
    alignItems: "center",
  },
  infoSizeText: {
    fontSize: 17,
    marginRight: 13,
  },
  infoSizeButton: {
    marginLeft: 7,
    // width: 48,
    paddingRight: 10,
    paddingLeft: 10,
    height: 22,
    borderRadius: 20,
    backgroundColor: "#FFB80050",
    justifyContent: "center",
    alignItems: "center",
  },
  infoSizeButtonText: {
    fontSize: 11,
  },
  buyNowArea: {
    padding: 20,
    position: "absolute",
    width: "100%",
    zIndex: 10,
    bottom: 30,
    height: 110,
    flexDirection: "row",
  },
  buyNowLeft: {
    width: 60,
    height: 60,
    backgroundColor: "#FF0000",
    marginRight: 10,
    borderRadius: 6,
    justifyContent: "center",
    alignItems: "center",
  },
  addToCartButton: {
    width: 25,
    height: 25,
  },
  buyNowRight: {
    flex: 1,
    height: 60,
    borderRadius: 6,
    backgroundColor: "#FF0000",
    justifyContent: "center",
    alignItems: "center",
  },
  buyNowButtonText: {
    color: "white",
    fontWeight: "600",
    fontSize: 18,
  },
});
