import { SearchIcon, SlidersHorizontal } from "lucide-react-native";
import React, { StyleSheet, Text, TextInput, View } from "react-native";

const st = StyleSheet.create({
  userNameCont: {
    marginHorizontal: 30,
    marginTop: 15,
  },
  textuserName: {
    fontSize: 14,
    fontWeight: "500",
  },
  searchContainer: {
    flexDirection: "row",
    backgroundColor: "white",
    marginHorizontal: 30,
    paddingHorizontal: 20,
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
    borderRadius: 30,
  },
  inputCont: {
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    marginLeft: 15,
    color: "grey",
  },
});

export const Search = () => {
  return (
    <>
      <View style={st.userNameCont}>
        <Text style={st.textuserName}>Selamat Pagi, Mazrul Khoiri</Text>
      </View>
      <View style={st.searchContainer}>
        <View style={st.inputCont}>
          <SearchIcon size={18} color={"#3561ab"} strokeWidth={3} />
          <TextInput placeholder="Cari..." style={st.input} />
        </View>
        <View>
          <SlidersHorizontal size={18} color={"#3561ab"} strokeWidth={3} />
        </View>
      </View>
    </>
  );
};
