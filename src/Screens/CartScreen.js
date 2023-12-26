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

const Product = ({ product, navigation }) => {
  const [qty, setQty] = useState(1);
  let imageName = "";

  if (product.id == 1) {
    imageName = product_1;
  }
  if (product.id == 2) {
    imageName = product_2;
  }
  if (product.id == 3) {
    imageName = product_3;
  }
  if (product.id == 4) {
    imageName = product_4;
  }
  if (product.id == 5) {
    imageName = product_5;
  }
  if (product.id == 6) {
    imageName = product_6;
  }

  return (
    <TouchableOpacity style={styles.product} key={product.id} activeOpacity={0.9}
      onPress={() => {
        navigation.navigate('Detail', { ID: product.id });
      }}
    >
      <View style={styles.productImageArea}>
        <Image
          source={imageName}
          resizeMode="contain"
          style={styles.productImage}
        />
      </View>
      <View style={styles.productInfo}>
        <Text style={styles.productTitle}>{product.name}</Text>
        <Text style={styles.productPrice}>${product.price}.00</Text>
      </View>
      <View style={styles.productQty}>
        <TouchableOpacity
          style={styles.qtyIcon}
          activeOpacity={0.9}
          onPress={() => {
            let tempQty = qty;
            ++tempQty;
            setQty(tempQty);
          }}
        >
          <Image
            source={qtyup}
            resizeMode="contain"
            style={styles.qtyIconImage}
          />
        </TouchableOpacity>
        <Text style={styles.qtyText}>{qty}</Text>
        <TouchableOpacity
          style={styles.qtyIcon}
          activeOpacity={0.9}
          onPress={() => {
            if (qty != 0) {
              let tempQty = qty;
              --tempQty;
              setQty(tempQty);
            }
          }}
        >
          <Image
            source={qtydown}
            resizeMode="contain"
            style={styles.qtyIconImage}
          />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

const CartScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.topSection}>
          <View style={styles.backButtonArea}>
            <Image
              source={backButton}
              resizeMode="contain"
              style={styles.backIcon}
            />
          </View>
          <View style={styles.titleArea}>
            <Text style={styles.title}>MY CART</Text>
          </View>
          <View style={styles.backButtonArea}></View>
        </View>

        <View style={styles.productSection}>
          {PRODUCTS.map((product) => {
            return <Product product={product} navigation={navigation} />;
          })}
        </View>
      </View>
      <View style={styles.footerPallet}>
        <View style={styles.footerArea}>
          <Text style={styles.fullAmount}>$460.00</Text>
          <View style={styles.footerButton}>
            <Text style={styles.footerButtonText}>CHECKOUT</Text>
          </View>
        </View>
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
  topSection: {
    paddingLeft: 20,
    paddingRight: 20,
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
  titleArea: {
    width: 200,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },

  productSection: {},
  product: {
    marginTop: 10,
    height: 110,
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 10,
    flexDirection: "row",
    backgroundColor: "white",
  },
  productImageArea: {
    flex: 2,
    padding: 10,
  },
  productInfo: {
    flex: 4,
    justifyContent: "center",
  },
  productQty: {
    flex: 1,
    padding: 5,
    justifyContent: "space-around",
    alignItems: "center",
  },
  productImage: {
    width: "100%",
    height: "100%",
  },
  productTitle: {
    fontSize: 14,
    fontWeight: "500",
  },
  productPrice: {
    marginTop: 2,
    color: "#FF0000",
    fontSize: 12,
    fontWeight: "500",
  },
  qtyIcon: {
    width: 20,
    height: 20,
    backgroundColor: "#FF0000",
    borderRadius: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  qtyText: {},
  qtyIconImage: {
    width: 8,
    height: 8,
  },
  footerPallet: {
    position: "absolute",
    bottom: 0,
    height: 80,
    width: "100%",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.3,
    shadowRadius: 20,
    elevation: 10,
    backgroundColor: "white",
  },
  footerArea: {
    paddingLeft: 30,
    paddingRight: 25,
    paddingTop: 15,
    flexDirection: "row",
    justifyContent: 'space-between',
    alignItems: "center",
  },
  fullAmount: {
    fontSize: 20,
  },
  footerButton: {
    width: 150,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#FF0000",
    justifyContent: 'center',
    alignItems: "center",
  },
  footerButtonText: {
    fontSize: 15,
    color: "white",
  },
});
