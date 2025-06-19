import Images from "@/assets";
import { Minus, Plus } from "lucide-react-native";
import React, { useState } from "react";
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    marginLeft: 10,
  },
  title: {
    fontWeight: "500",
    marginLeft: 10,
  },
  divider: {
    borderBottomColor: "#3561ab",
    borderBottomWidth: 4,
    borderRadius: 10,
    width: 40,
    marginTop: 5,
    marginLeft: 10,
  },
  specialOfferContainer: {},
  productCard: {
    backgroundColor: "#fff",
    borderRadius: 20,
    marginHorizontal: 10,
    marginVertical: 10,
    padding: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 5,
    marginRight: 20,
  },
  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  productImage: {
    width: 144,
    height: 105,
    borderRadius: 20,
  },
  productInfoContainer: {
    flex: 1,
    marginLeft: 10,
    justifyContent: "center",
  },
  productName: {
    fontSize: 14,
    fontWeight: "500",
    marginBottom: 5,
  },
  productDetail: {
    fontSize: 10,
    color: "#555",
    marginBottom: 5,
  },
  productPriceText: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#000",
  },
  removeButton: {
    marginRight: 10,
    marginTop: 10,
  },
  footerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
  },
  quantityControl: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 10,
  },
  qtyButtonPlus: {
    borderRadius: 50,
    marginVertical: 5,
    marginHorizontal: 5,
    backgroundColor: "#3561ab",
    width: 24,
    height: 24,
    alignItems: "center",
    justifyContent: "center",
  },
  qtyButtonMinus: {
    borderRadius: 50,
    marginVertical: 5,
    marginHorizontal: 5,
    backgroundColor: "grey",
    width: 24,
    height: 24,
    alignItems: "center",
    justifyContent: "center",
  },
  qtyButtonText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  qtyText: {
    fontSize: 16,
    fontWeight: "500",
  },
  addIcon: {
    width: 30,
    height: 30,
    marginRight: 5,
  },
});

export const CartList = () => {
  const [quantity, setQuantity] = useState(1);
  const hargaSatuan = 50000;
  const totalPrice = quantity * hargaSatuan;

  const increment = () => {
    setQuantity((prev) => prev + 1);
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cart</Text>
      <View style={styles.divider} />

      <View style={styles.specialOfferContainer}>
        <View style={styles.productCard}>
          <View style={styles.cardHeader}>
            <Image source={Images.Banner} style={styles.productImage} />
            <View style={styles.productInfoContainer}>
              <Text
                numberOfLines={1}
                ellipsizeMode="tail"
                style={styles.productName}
              >
                Cappucino
              </Text>
              <Text style={styles.productDetail}>
                Dengan Gula tapi jangan banyak-banyak
              </Text>
              <Text style={styles.productPriceText}>
                Rp.{hargaSatuan.toLocaleString("id-ID")}
              </Text>
            </View>

            {/* Quantity control & total */}
            <View style={{ alignItems: "center", marginTop: 50 }}>
              <View style={styles.quantityControl}>
                <TouchableOpacity
                  style={styles.qtyButtonMinus}
                  onPress={decrement}
                >
                  <Minus size={20} color={"#fff"} strokeWidth={3} />
                </TouchableOpacity>

                <Text style={styles.qtyText}>{quantity}</Text>

                <TouchableOpacity
                  style={styles.qtyButtonPlus}
                  onPress={increment}
                >
                  <Plus size={20} color={"#fff"} strokeWidth={3} />
                </TouchableOpacity>
              </View>

              <Text style={{ fontWeight: "bold", marginTop: 5 }}>
                Rp.{totalPrice.toLocaleString("id-ID")}
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.specialOfferContainer}>
        <View style={styles.productCard}>
          <View style={styles.cardHeader}>
            <Image source={Images.Coco} style={styles.productImage} />
            <View style={styles.productInfoContainer}>
              <Text
                numberOfLines={1}
                ellipsizeMode="tail"
                style={styles.productName}
              >
                Cappucino
              </Text>
              <Text style={styles.productDetail}>
                Dengan Gula tapi jangan banyak-banyak
              </Text>
              <Text style={styles.productPriceText}>
                Rp.{hargaSatuan.toLocaleString("id-ID")}
              </Text>
            </View>

            {/* Quantity control & total */}
            <View style={{ alignItems: "center", marginTop: 50 }}>
              <View style={styles.quantityControl}>
                <TouchableOpacity
                  style={styles.qtyButtonMinus}
                  onPress={decrement}
                >
                  <Minus size={20} color={"#fff"} strokeWidth={3} />
                </TouchableOpacity>

                <Text style={styles.qtyText}>{quantity}</Text>

                <TouchableOpacity
                  style={styles.qtyButtonPlus}
                  onPress={increment}
                >
                  <Plus size={20} color={"#fff"} strokeWidth={3} />
                </TouchableOpacity>
              </View>

              <Text style={{ fontWeight: "bold", marginTop: 5 }}>
                Rp.{totalPrice.toLocaleString("id-ID")}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};
