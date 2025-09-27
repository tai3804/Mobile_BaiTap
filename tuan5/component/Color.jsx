import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

const colors = [
  { name: 'vs_silver', hex: '#C5F1FB' },
  { name: 'vs_red', hex: '#F30D0D' },
  { name: 'vs_black', hex: '#000000' },
  { name: 'vs_blue', hex: '#234896' },
];

// Map tên màu với file ảnh
const images = {
  vs_silver: require('../assets/vs_silver.png'),
  vs_red: require('../assets/vs_red.png'),
  vs_black: require('../assets/vs_black.png'),
  vs_blue: require('../assets/vs_blue.png'),
};

export default function Color({navigation}) {
  const [selected, setSelected] = useState(3); // mặc định blue (index 3)

  return (
    <View style={styles.container}>
      {/* Header: ảnh + tên sản phẩm */}
      <View style={styles.header}>
        <Image
          source={images[colors[selected].name]} // đổi ảnh theo màu đã chọn
          style={styles.productImage}
          resizeMode="contain"
        />
        <Text style={styles.productName}>
          Điện Thoại Vsmart Joy 3{"\n"}Hàng chính hãng
        </Text>
      </View>

      {/* Tiêu đề */}
      <Text style={styles.title}>Chọn một màu bên dưới:</Text>

      {/* Danh sách màu */}
      <View style={styles.colorsContainer}>
        {colors.map((color, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.colorBox,
              { backgroundColor: color.hex },
              selected === index && styles.colorBoxSelected,
            ]}
            onPress={() => setSelected(index)}
          />
        ))}
      </View>

      {/* Button XONG */}
      <TouchableOpacity
        style={styles.doneButton}
        onPress={() => {
          if (selected !== null) {
            navigation.navigate("detail", {
              color: colors[selected].hex,
              image: images[colors[selected].name],
            });
          }
        }}
      >
        <Text style={styles.doneButtonText}>XONG</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#C4C4C4', padding: 15 },
  header: { flexDirection: 'row', alignItems: 'center', marginBottom: 20 },
  productImage: { width: 80, height: 100, marginRight: 10 },
  productName: { flex: 1, fontSize: 16, fontWeight: 'bold' },
  title: { fontSize: 16, marginBottom: 10 },
  colorsContainer: { marginBottom: 20 },
  colorBox: {
    width: 60,
    height: 60,
    margin: "auto",
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#999',
  },
  colorBoxSelected: {
    borderWidth: 3,
    borderColor: '#007AFF',
  },
  doneButton: {
    backgroundColor: '#0A5EB7',
    paddingVertical: 15,
    borderRadius: 5,
  },
  doneButtonText: { color: 'white', fontWeight: 'bold', textAlign: 'center' },
});
