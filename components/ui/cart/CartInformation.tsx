import React, { useState } from "react";
import { Platform, StyleSheet, Text, TextInput, View } from "react-native";

export const CartInformation = () => {
  const [customerInfo, setCustomerInfo] = useState({
    name: "",
    phone: "",
    address: "",
  });

  const handleChange = (field: string, value: string) => {
    setCustomerInfo((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View style={[styles.inputGroup, styles.halfInput]}>
          <Text style={styles.label}>Nama</Text>
          <TextInput
            style={styles.input}
            placeholder="Masukkan nama"
            value={customerInfo.name}
            onChangeText={(text) => handleChange("name", text)}
            placeholderTextColor="#999"
          />
        </View>

        <View style={[styles.inputGroup, styles.halfInput, { marginLeft: 12 }]}>
          <Text style={styles.label}>Nomor HP</Text>
          <TextInput
            style={styles.input}
            placeholder="08xxxxxxxxxx"
            keyboardType="phone-pad"
            value={customerInfo.phone}
            onChangeText={(text) => handleChange("phone", text)}
            placeholderTextColor="#999"
          />
        </View>
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Alamat</Text>
        <TextInput
          style={[styles.input, styles.textArea]}
          placeholder="Contoh: Jl. Raya No. 123, Bandung"
          value={customerInfo.address}
          onChangeText={(text) => handleChange("address", text)}
          multiline
          numberOfLines={3}
          placeholderTextColor="#999"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    borderRadius: 16,
    marginHorizontal: 16,
    marginVertical: 16,
    padding: 16,
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 16,
    color: "#333",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  inputGroup: {
    marginBottom: 16,
  },
  halfInput: {
    flex: 1,
  },
  label: {
    marginBottom: 6,
    fontWeight: "500",
    fontSize: 10,
    color: "#444",
  },
  input: {
    backgroundColor: "#f9f9f9",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#ddd",
    paddingHorizontal: 12,
    paddingVertical: Platform.OS === "android" ? 10 : 12,
    fontSize: 10,
    color: "#000",
  },
  textArea: {
    height: 60,
    textAlignVertical: "top",
  },
});
