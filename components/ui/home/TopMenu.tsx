import Images from "@/assets";
import { BellRing, MapPin } from "lucide-react-native";
import React, {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const st = StyleSheet.create({
  homeHeader: {
    flexDirection: "row",
    marginTop: 35,
    marginHorizontal: 30,
    justifyContent: "space-between",
  },
  markIconStyle: {
    flexDirection: "row",
    alignItems: "center",
  },
  textLoc: {
    fontWeight: 500,
    fontSize: 12,
    marginLeft: 5,
  },
});

export const TopMenu = () => {
  return (
    <View style={st.homeHeader}>
      <TouchableOpacity activeOpacity={0.9}>
        <Image source={Images.Profile} />
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={0.9} style={st.markIconStyle}>
        <MapPin size={12} color={'#3561ab'}/>
        <Text style={st.textLoc}>Jakarta,Indonesia</Text>
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={0.9}>
        <View style={{marginTop:10}}>
        <BellRing size={25} color={'#3561ab'} strokeWidth={3}/>
        </View>
      </TouchableOpacity>
    </View>
  );
};
