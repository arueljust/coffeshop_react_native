import React, { ScrollView, View } from "react-native";
import { Category } from "../ui/home/Category";
import { Product } from "../ui/home/Product";
import { Search } from "../ui/home/Search";
import { SpecialOffer } from "../ui/home/SpecialOffer";
import { TopMenu } from "../ui/home/TopMenu";

export const Home = () => {
  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        <TopMenu />
        <Search />
        <Category />
        <Product />
        <SpecialOffer />
      </ScrollView>
    </View>
  );
};
