import React from "react";
import { ScrollView } from "react-native";
import { CartInformation } from "../ui/cart/CartInformation";
import { CartList } from "../ui/cart/CartList";
import { CartTotal } from "../ui/cart/CartTotal";

export const CartPage = () => {
  return (
    <ScrollView>
      <CartList />
      <CartInformation />
      <CartTotal
        cartItems={[
          { id: 1, name: "Produk A", price: 10000, qty: 2 },
          { id: 2, name: "Produk B", price: 15000, qty: 1 },
        ]}
        onPay={() => console.log("Pembayaran dimulai")}
      />
    </ScrollView>
  );
};
