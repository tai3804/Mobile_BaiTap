import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export type Product = { id: string; name: string; price: number };

type Props = {
  product: Product;
  onAddToCart: (product: Product) => void;
};

const ProductItem = ({ product, onAddToCart }: Props) => (
  <View style={styles.item}>
    <Text style={styles.name}>{product.name}</Text>
    <Text style={styles.price}>{product.price.toLocaleString()} Tr</Text>
    <TouchableOpacity
      style={styles.button}
      onPress={() => onAddToCart(product)}>
      <Text style={styles.buttonText}>Add</Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  item: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    padding: 16,
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  name: {
    fontSize: 20,
    fontWeight: 600
  },
  price: {
    fontSize: 18
  },
  button: {
    backgroundColor: 'green',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 6,
  },
  buttonText: {
    color: 'white',
    fontWeight: '600',
  },
});

export default ProductItem;
