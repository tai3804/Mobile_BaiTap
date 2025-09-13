import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Product } from './ProductItem';

type Props = {
  cart: Product[];
};

const CartSummary = ({ cart }: Props) => {
  const cartCount = cart.length;
  const cartTotal = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <View style={styles.cartSummary}>
      <Text style={styles.cartText}>{cartCount} sản phẩm</Text>
      <Text style={styles.cartText}>
        Tổng tiền: {cartTotal.toLocaleString()}đ
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  cartSummary: {
    padding: 8,
    backgroundColor: 'green',
    alignItems: 'center',
  },
  cartText: {
    color: '#fff',
  },
});

export default CartSummary;
