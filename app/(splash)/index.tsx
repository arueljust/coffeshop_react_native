import Images from "@/assets";
import { router } from "expo-router";
import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function SplashScreen() {
  return (
    <View style={st.container}>
      <View>
        <ImageBackground source={Images.BackgroudSS} style={st.bgImg}>
          <View style={st.splashImg}>
            <Image source={Images.SplashScreenImg} />
          </View>
          <View style={{ marginTop: 30 }}>
            <Text style={st.headerText}>
              Kopi enak ada disekitar kamu, Jelajahi sekarang.
            </Text>
          </View>
          <View style={{ marginTop: 30 }}>
            <Text style={st.footerText}>Kopi berkualitas dan terjangkau</Text>
          </View>
          <TouchableOpacity
            activeOpacity={0.9}
            style={st.splashBtn}
            onPress={() => router.push("/(tabs)")}
          >
            <Text style={st.textBtn}>Mulai</Text>
          </TouchableOpacity>
        </ImageBackground>
      </View>
    </View>
  );
}

const st = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
  },
  bgImg: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  splashImg: {
    marginTop: 150,
  },
  headerText: {
    fontSize: 24,
    color: "white",
    fontWeight: "600",
    paddingHorizontal: 60,
    textAlign: "center",
  },
  footerText: {
    fontSize: 14,
    color: "#ffff",
    textAlign: "center",
    paddingHorizontal: 90,
  },
  splashBtn: {
    backgroundColor: "#3561ab",
    alignItems: "center",
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 30,
    marginHorizontal: 60,
    marginTop: 30,
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
  },
  textBtn: {
    color: "white",
    fontSize: 16,
    fontWeight: "800",
    letterSpacing: 0.5,
  },
});
