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
        <View style={styles.topSection}>
          <View style={styles.greetingArea}>
            <Text style={styles.headText}>Hello,</Text>
            <Text style={styles.subText}>SARA ROGER</Text>
          </View>
          <TouchableOpacity
            style={styles.cartButtonArea}
            activeOpacity={0.9}
            onPress={() => {
              navigation.navigate('Cart');
            }}
          >
            <View style={styles.cartButtonCountArea}>
              <Text style={styles.cartButtonCountText}>{products.length}</Text>
            </View>
            <View style={styles.cartButtonIconArea}>
              <Image
                source={cartIcon}
                resizeMode="contain"
                style={styles.cartButtonIcon}
              />
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.topProductSection}>
          <View style={styles.topProductArea}>
            <View style={styles.topProductImageArea}>
              <Image
                source={top_product_1}
                resizeMode="contain"
                style={styles.topProductImage}
              />
            </View>
            <View style={styles.topProductImageArea}>
              <Image
                source={top_product_2}
                resizeMode="contain"
                style={styles.topProductImage}
              />
            </View>
            <View style={styles.topProductImageArea}>
              <Image
                source={top_product_3}
                resizeMode="contain"
                style={styles.topProductImage}
              />
            </View>
            <View style={styles.topProductImageArea}>
              <Image
                source={top_product_4}
                resizeMode="contain"
                style={styles.topProductImage}
              />
            </View>
            <View style={styles.topProductImageArea}>
              <Image
                source={top_product_5}
                resizeMode="contain"
                style={styles.topProductImage}
              />
            </View>
          </View>
        </View>

        <View style={styles.bannerSection}>
          <View style={styles.offerImageArea}>
            <Image
              source={offerImage}
              resizeMode="contain"
              style={styles.offerImage}
            />
          </View>
          <Swiper
            style={styles.banner}
            dot={<View style={styles.dot} />}
            activeDot={<View style={styles.activeDot} />}
          >
            <View style={styles.slider}>
              <Image
                source={banner_1}
                resizeMode="contain"
                style={styles.bannerImage}
              />
            </View>
            <View style={styles.slider}>
              <Image
                source={banner_1}
                resizeMode="contain"
                style={styles.bannerImage}
              />
            </View>
            <View style={styles.slider}>
              <Image
                source={banner_1}
                resizeMode="contain"
                style={styles.bannerImage}
              />
            </View>
            <View style={styles.slider}>
              <Image
                source={banner_1}
                resizeMode="contain"
                style={styles.bannerImage}
              />
            </View>
            <View style={styles.slider}>
              <Image
                source={banner_1}
                resizeMode="contain"
                style={styles.bannerImage}
              />
            </View>
          </Swiper>
        </View>

        <View style={styles.newCollectionSection}>
          <Text style={styles.newCollectionText}> New Collection </Text>
          <View style={styles.scrollviewArea}>
            <ScrollView>
              <View style={styles.newCollectionRow}>
                <View style={styles.newCollectionProduct}>
                  <View style={styles.newCollectionProductImageArea}>
                    <Image
                      source={product_1}
                      resizeMode="contain"
                      style={styles.newCollectionProductImage1}
                    />
                  </View>
                  <View style={styles.newCollectionProductInfoArea}>
                    <View style={styles.newCollectionProductInfoLeft}>
                      <Text style={styles.newCollectionProductName}>
                        {PRODUCTS[0].name}
                      </Text>
                      <Text style={styles.newCollectionProductPrice}>
                        ${PRODUCTS[0].price}.00
                      </Text>
                    </View>
                    <View style={styles.newCollectionProductInfoRight}>
                      <TouchableOpacity
                        style={styles.addButton}
                        activeOpacity={0.9}
                        onPress={() => {
                          let duplicate = products.filter(
                            (element) => element.id == PRODUCTS[0].id
                          );
                          if (duplicate.length != 0) {
                            Alert.alert("Already Added");
                            return;
                          } else {
                            let tempProducts = products;
                            tempProducts.push(PRODUCTS[0]);
                            setProducts(tempProducts);
                          }
                        }}
                      >
                        <Image
                          source={addIcon}
                          resizeMode="contain"
                          style={styles.addIcon}
                        />
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>

                <View style={styles.newCollectionProduct}>
                  <View style={styles.newCollectionProductImageArea}>
                    <Image
                      source={product_2}
                      resizeMode="contain"
                      style={styles.newCollectionProductImage2}
                    />
                  </View>
                  <View style={styles.newCollectionProductInfoArea}>
                    <View style={styles.newCollectionProductInfoLeft}>
                      <Text style={styles.newCollectionProductName}>
                        {PRODUCTS[1].name}
                      </Text>
                      <Text style={styles.newCollectionProductPrice}>
                        ${PRODUCTS[1].price}.00
                      </Text>
                    </View>
                    <View style={styles.newCollectionProductInfoRight}>
                      <TouchableOpacity
                        style={styles.addButton}
                        activeOpacity={0.9}
                        onPress={() => {
                          let duplicate = products.filter(
                            (element) => element.id == PRODUCTS[1].id
                          );
                          if (duplicate.length != 0) {
                            Alert.alert("Already Added");
                            return;
                          } else {
                            let tempProducts = products;
                            tempProducts.push(PRODUCTS[1]);
                            setProducts(tempProducts);
                          }
                        }}
                      >
                        <Image
                          source={addIcon}
                          resizeMode="contain"
                          style={styles.addIcon}
                        />
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </View>

              <View style={styles.newCollectionRow}>
                <View style={styles.newCollectionProduct}>
                  <View style={styles.newCollectionProductImageArea}>
                    <Image
                      source={product_3}
                      resizeMode="contain"
                      style={styles.newCollectionProductImage3}
                    />
                  </View>
                  <View style={styles.newCollectionProductInfoArea}>
                    <View style={styles.newCollectionProductInfoLeft}>
                      <Text style={styles.newCollectionProductName}>
                        {PRODUCTS[2].name}
                      </Text>
                      <Text style={styles.newCollectionProductPrice}>
                        ${PRODUCTS[2].price}.00
                      </Text>
                    </View>
                    <View style={styles.newCollectionProductInfoRight}>
                      <TouchableOpacity
                        style={styles.addButton}
                        activeOpacity={0.9}
                        onPress={() => {
                          let duplicate = products.filter(
                            (element) => element.id == PRODUCTS[2].id
                          );
                          if (duplicate.length != 0) {
                            Alert.alert("Already Added");
                            return;
                          } else {
                            let tempProducts = products;
                            tempProducts.push(PRODUCTS[2]);
                            setProducts(tempProducts);
                          }
                        }}
                      >
                        <Image
                          source={addIcon}
                          resizeMode="contain"
                          style={styles.addIcon}
                        />
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>

                <View style={styles.newCollectionProduct}>
                  <View style={styles.newCollectionProductImageArea}>
                    <Image
                      source={product_4}
                      resizeMode="contain"
                      style={styles.newCollectionProductImage4}
                    />
                  </View>
                  <View style={styles.newCollectionProductInfoArea}>
                    <View style={styles.newCollectionProductInfoLeft}>
                      <Text style={styles.newCollectionProductName}>
                        {PRODUCTS[3].name}
                      </Text>
                      <Text style={styles.newCollectionProductPrice}>
                        ${PRODUCTS[3].price}.00
                      </Text>
                    </View>
                    <View style={styles.newCollectionProductInfoRight}>
                      <TouchableOpacity
                        style={styles.addButton}
                        activeOpacity={0.9}
                        onPress={() => {
                          let duplicate = products.filter(
                            (element) => element.id == PRODUCTS[3].id
                          );
                          if (duplicate.length != 0) {
                            Alert.alert("Already Added");
                            return;
                          } else {
                            let tempProducts = products;
                            tempProducts.push(PRODUCTS[3]);
                            setProducts(tempProducts);
                          }
                        }}
                      >
                        <Image
                          source={addIcon}
                          resizeMode="contain"
                          style={styles.addIcon}
                        />
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </View>
              <View style={styles.SP}></View>
            </ScrollView>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topSection: {
    height: 80,
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  greetingArea: {
    paddingLeft: 10,
  },
  headText: {
    color: "#767575",
    marginBottom: 10,
  },
  subText: {
    color: "black",
    fontWeight: "bold",
    fontSize: 16,
  },
  cartButtonArea: {
    width: 80,
    height: 60,
  },
  cartButtonCountArea: {
    position: "absolute",
    width: 20,
    height: 20,
    zIndex: 10,
    right: 10,
    top: -7,
    borderRadius: "100%",
    backgroundColor: "#FF0000",
    justifyContent: "center",
    alignItems: "center",
  },
  cartButtonCountText: {
    color: "white",
    fontSize: 13,
  },
  cartButtonIconArea: {
    width: 60,
    height: 60,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "100%",
    backgroundColor: "white",
  },
  cartButtonIcon: {
    width: 19,
    height: 19,
  },

  topProductSection: {
    height: 60,
    marginTop: 10,
    paddingLeft: 25,
    paddingRight: 25,
  },
  topProductArea: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  topProductImageArea: {
    width: 100,
    height: 70,
  },
  topProductImage: {
    width: "100%",
    height: "100%",
  },

  bannerSection: {
    height: 300,
    padding: 10,
  },
  offerImageArea: {
    margin: 10,
    position: "absolute",
    zIndex: 10,
    bottom: -1,
    right: 0,
    width: 95,
    height: 95,
  },
  offerImage: {
    width: "100%",
    height: "100%",
  },
  banner: {},
  slider: {
    flex: 1,
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
  newCollectionSection: {
    height: 200,
    paddingLeft: 20,
    paddingRight: 20,
  },
  newCollectionText: {
    fontSize: 18,
    marginBottom: 16,
  },
  scrollviewArea: {
    height: 310,
  },
  newCollectionRow: {
    height: 200,
    flexDirection: "row",
  },
  SP: {
    height: 20,
  },
  newCollectionProduct: {
    flex: 1,
    margin: 5,
    padding: 10,
    backgroundColor: "white",
    borderRadius: 12,
  },
  newCollectionProductImageArea: {
    height: 120,
    justifyContent: "center",
    alignItems: "center",
  },
  newCollectionProductImage1: {
    width: "90%",
    height: "90%",
  },
  newCollectionProductImage2: {
    width: "150%",
    height: "150%",
  },
  newCollectionProductImage3: {
    width: "92%",
    height: "92%",
  },
  newCollectionProductImage4: {
    width: "90%",
    height: "90%",
  },
  newCollectionProductInfoArea: {
    flex: 1,
    flexDirection: "row",
    marginTop: 10,
  },
  newCollectionProductInfoLeft: {
    flex: 5,
  },
  newCollectionProductName: {
    fontSize: 13,
    fontWeight: "500",
  },
  newCollectionProductPrice: {
    marginTop: 5,
    fontSize: 12.5,
    color: "#FF0000",
    fontWeight: "500",
  },
  newCollectionProductInfoRight: {
    flex: 1,
  },
  addButton: {
    marginTop: 7,
    width: 20,
    height: 20,
    borderRadius: "100%",
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
  },
  addIcon: {
    width: 9,
    height: 9,
  },
});
