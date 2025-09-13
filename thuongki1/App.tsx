import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ProductList from './components/ProductList';
import CartSummary from './components/CartSummary';
import { Product } from './components/ProductItem';

const products: Product[] = [
  { id: '1', name: 'iphone 17', price: 19 },
  { id: '2', name: 'iphone 17 air', price: 21 },
  { id: '3', name: 'iphone 17 pro', price: 27 },
  { id: '3', name: 'iphone 17 pro max', price: 31 },
];

const App = () => {
  const [cart, setCart] = useState<Product[]>([]);

  const handleAddToCart = (product: Product) => {
    setCart([...cart, product]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Danh sách các sản phẩm trong cửa hàng</Text>
      <ProductList products={products} onAddToCart={handleAddToCart} />
      <CartSummary cart={cart} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: 'white',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
});

export default App;
