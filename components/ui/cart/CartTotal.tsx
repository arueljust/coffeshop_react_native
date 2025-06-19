import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

  type CartItem = {
    id: number;
    name: string;
    price: number;
    qty: number;
  };

  type CartTotalProps = {
    cartItems: CartItem[];
    onPay: () => void;
  };

export const CartTotal: React.FC<CartTotalProps> = ({ cartItems, onPay }) => {
  const grandTotal = cartItems.reduce(
    (total, item) => total + item.price * item.qty,
    0
  );

  const formatRupiah = (num: number) => {
    return "Rp " + num.toLocaleString("id-ID");
  };

  return (
    <View style={styles.container}>
      <View style={styles.totalRow}>
        <Text style={styles.totalLabel}>Total</Text>
        <Text style={styles.totalAmount}>{formatRupiah(grandTotal)}</Text>
      </View>

      <TouchableOpacity style={styles.payButton} activeOpacity={0.9} onPress={onPay}>
        <Text style={styles.payButtonText}>Bayar Sekarang</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    padding: 16,
    borderTopWidth: 1,
    borderColor: "#eee",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    elevation: 5,
    marginLeft: 16,
    marginRight: 16,
    borderRadius:20,
    marginBottom:20
  },
  totalRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  totalLabel: {
    fontSize: 16,
    fontWeight: "500",
    color: "#333",
  },
  totalAmount: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#3561ab",
  },
  payButton: {
    backgroundColor: "#3561ab",
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: "center",
  },
  payButtonText: {
    color: "#ffff",
    fontSize: 16,
    fontWeight: "800",
  },
});
