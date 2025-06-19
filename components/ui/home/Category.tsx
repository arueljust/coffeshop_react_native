import { Coffee } from "lucide-react-native";
import React, {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";

const st = StyleSheet.create({
  categoryContainer: {
    marginLeft: 10,
    marginTop: 30,
  },
  categoryTitle: {
    marginBottom: 15,
    marginLeft: 10,
  },
  categoryText: {
    fontWeight: "500",
  },
  categoryBtn: {
    backgroundColor: "#3561ab",
    paddingVertical: 7,
    paddingHorizontal: 10,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 20,
    marginHorizontal: 5,
  },
  categoryBtn1: {
    backgroundColor: "#ffff",
    paddingVertical: 5,
    paddingHorizontal: 10,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 20,
    // Shadow untuk iOS
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    // Shadow untuk Android
    elevation: 1,
    marginHorizontal: 5,
  },
  categoryImg: {},
  categoryDesc: {
    marginLeft: 5,
    color: "#ffff",
  },
  categoryDesc1: {
    marginLeft: 5,
    color: "grey",
  },
  hr: {
    borderBottomColor: "#3561ab",
    borderBottomWidth: 4,
    marginTop: 5,
    borderRadius:10,
    width:40
  },
});

export const Category = () => {
  return (
    <View style={st.categoryContainer}>
      <View style={st.categoryTitle}>
        <Text style={st.categoryText}>Kategori</Text>
        <View style={st.hr} />
      </View>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <TouchableOpacity activeOpacity={0.9} style={st.categoryBtn}>
          <Coffee size={18} color={'#ffff'} strokeWidth={3}/>
          <Text style={st.categoryDesc}>Cappucino</Text>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.9} style={st.categoryBtn1}>
          <Coffee size={18} color={'#3561ab'} strokeWidth={3}/>
          <Text style={st.categoryDesc1}>Caramel Macchiato</Text>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.9} style={st.categoryBtn1}>
          <Coffee size={18} color={'#3561ab'} strokeWidth={3}/>
          <Text style={st.categoryDesc1}>Expresse</Text>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.9} style={st.categoryBtn1}>
          <Coffee size={18} color={'#3561ab'} strokeWidth={3}/>
          <Text style={st.categoryDesc1}>Americano</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};
