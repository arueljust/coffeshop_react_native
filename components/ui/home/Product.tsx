import Images from "@/assets";
import { Heart, Plus } from "lucide-react-native";
import React, {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const st = StyleSheet.create({
  productContainer: {
    backgroundColor: "#ffff",
    borderRadius: 20,
    paddingHorizontal: 5,
    paddingVertical: 5,
    // Shadow untuk iOS
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    // Shadow untuk Android
    elevation: 5,
    marginHorizontal: 5,
    marginVertical: 10,
  },
  coffeImg: {
    width: 144,
    height: 105,
    borderRadius: 20,
  },
  productDescCont: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  productDesc: {
    marginTop: 10,
  },
  productText: {
    fontSize: 14,
    fontWeight: "500",
    width: 100,
    marginLeft: 5,
  },
  productDescTitle: {
    fontSize: 10,
    marginTop: 5,
    marginLeft: 5,
  },
  productPrice: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginLeft: 5,
  },
  qtyButtonPlus: {
    borderRadius: 50,
    marginVertical: 5,
    marginHorizontal: 5,
    backgroundColor: "#3561ab",
    width: 25,
    height: 25,
    alignItems: "center",
    justifyContent: "center",
    elevation: 3,
  },
});

export const Product = () => {
  return (
    <View style={{ marginLeft: 10, marginTop: 10 }}>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <TouchableOpacity activeOpacity={0.9} style={st.productContainer}>
          <Image source={Images.CoffeMilk} style={st.coffeImg} />
          <View style={st.productDescCont}>
            <View style={st.productDesc}>
              <Text
                style={st.productText}
                numberOfLines={1}
                ellipsizeMode="tail"
              >
                Coffe Milk
              </Text>
              <Text style={st.productDescTitle}>Dengan Gula</Text>
            </View>
            <TouchableOpacity activeOpacity={0.8} style={{ marginTop: 10 }}>
              <Heart size={18} style={{marginRight:10,marginTop:3}} color={'red'} strokeWidth={2}/>
            </TouchableOpacity>
          </View>
          <View style={st.productPrice}>
            <Text>Rp.50,000</Text>
            <View style={st.qtyButtonPlus}>
              <Plus size={18} color={"#ffff"} strokeWidth={3} />
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.9} style={st.productContainer}>
          <Image source={Images.Americano} style={st.coffeImg} />
          <View style={st.productDescCont}>
            <View style={st.productDesc}>
              <Text
                style={st.productText}
                numberOfLines={1}
                ellipsizeMode="tail"
              >
                Americano
              </Text>
              <Text style={st.productDescTitle}>Dengan Gula</Text>
            </View>
            <TouchableOpacity activeOpacity={0.8} style={{ marginTop: 10 }}>
              <Heart size={18} style={{marginRight:10,marginTop:3}} color={'red'} strokeWidth={2}/>
            </TouchableOpacity>
          </View>
          <View style={st.productPrice}>
            <Text>Rp.50,000</Text>
            <View style={st.qtyButtonPlus}>
              <Plus size={18} color={"#ffff"} strokeWidth={3} />
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.9} style={st.productContainer}>
          <Image source={Images.Banner} style={st.coffeImg} />
          <View style={st.productDescCont}>
            <View style={st.productDesc}>
              <Text
                style={st.productText}
                numberOfLines={1}
                ellipsizeMode="tail"
              >
                Cappucino
              </Text>
              <Text style={st.productDescTitle}>Dengan Gula</Text>
            </View>
            <TouchableOpacity activeOpacity={0.8} style={{ marginTop: 10 }}>
              <Heart size={18} style={{marginRight:10,marginTop:3}} color={'red'} strokeWidth={2}/>
            </TouchableOpacity>
          </View>
          <View style={st.productPrice}>
            <Text>Rp.50,000</Text>
            <View style={st.qtyButtonPlus}>
              <Plus size={18} color={"#ffff"} strokeWidth={3} />
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.9} style={st.productContainer}>
          <Image source={Images.Caramel} style={st.coffeImg} />
          <View style={st.productDescCont}>
            <View style={st.productDesc}>
              <Text
                style={st.productText}
                numberOfLines={1}
                ellipsizeMode="tail"
              >
                Caramel Macchiato
              </Text>
              <Text style={st.productDescTitle}>Dengan Gula</Text>
            </View>
            <TouchableOpacity activeOpacity={0.8} style={{ marginTop: 10 }}>
              <Heart size={18} style={{marginRight:10,marginTop:3}} color={'red'} strokeWidth={2}/>
            </TouchableOpacity>
          </View>
          <View style={st.productPrice}>
            <Text>Rp.50,000</Text>
            <View style={st.qtyButtonPlus}>
              <Plus size={18} color={"#ffff"} strokeWidth={3} />
            </View>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};
