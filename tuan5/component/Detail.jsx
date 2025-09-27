import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

export default function Detail({ navigation, route }) {
  // Nếu có ảnh truyền từ màn hình color thì lấy, không thì lấy mặc định
  const phoneImage = route.params?.image || require('../assets/vs_blue.png');

  return (
    <View style={styles.container}>
      {/* Hình điện thoại */}
      <Image source={phoneImage} style={styles.phoneImage} />

      {/* Tên sản phẩm */}
      <Text style={styles.title}>Điện Thoại Vsmart Joy 3 - Hàng chính hãng</Text>

      {/* Đánh giá sao */}
      <View style={styles.starRow}>
        {Array(5).fill().map((_, i) => (
          <Image key={i} source={require('../assets/star.png')} style={styles.star} />
        ))}
        <Text style={styles.reviewText}>(Xem 828 đánh giá)</Text>
      </View>

      {/* Giá */}
      <Text style={styles.price}>1.790.000 đ</Text>

      {/* Giá gạch ngang */}
      <Text style={styles.oldPrice}> ~1.790.000 đ~ </Text>

      {/* Text Ở đâu rẻ hơn hoàn tiền */}
      <Text style={styles.note}>Ở ĐÂU RẺ HƠN HOÀN TIỀN</Text>

      {/* Nút chọn màu */}
      <TouchableOpacity
        style={styles.chooseColorButton}
        onPress={() => navigation.navigate('color')}
      >
        <Text style={styles.chooseColorText}>4 MÀU - CHỌN MÀU</Text>
      </TouchableOpacity>

      {/* Nút chọn mua */}
      <TouchableOpacity style={styles.buyButton}>
        <Text style={styles.buyButtonText}>CHỌN MUA</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, flex: 1, backgroundColor: 'white' },
  phoneImage: { width: '100%', height: 300, resizeMode: 'contain', marginBottom: 10 },
  title: { fontSize: 18, fontWeight: 'bold', marginBottom: 10 },
  starRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 10 },
  star: { width: 20, height: 20, marginRight: 4 },
  reviewText: { marginLeft: 10, color: '#888' },
  price: { fontSize: 20, fontWeight: 'bold', color: 'red' },
  oldPrice: { fontSize: 16, color: '#999', textDecorationLine: 'line-through' },
  note: { color: 'red', marginVertical: 10, fontWeight: 'bold' },
  chooseColorButton: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    marginVertical: 10,
  },
  chooseColorText: { textAlign: 'center', fontWeight: 'bold' },
  buyButton: {
    backgroundColor: 'red',
    padding: 15,
    borderRadius: 5,
    marginTop: 10,
  },
  buyButtonText: { color: 'white', fontWeight: 'bold', textAlign: 'center', fontSize: 16 },
});
