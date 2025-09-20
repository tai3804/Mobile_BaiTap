// App.jsx
import { StyleSheet, Text, View, SafeAreaView, FlatList } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import Header from "./components/Header.jsx"
import Footer from "./components/Footer.jsx"
import ProductCart from "./components/ProductCart.jsx"
import products from './products'

export default function App() {
  return (
    <SafeAreaProvider>
    <SafeAreaView style={styles.container}>
      <Header/>
      <View style={styles.main}>
        <Text style={styles.infoText}>
          Bạn có thắc mắc với sản phẩm vừa xem. Đừng ngại đánh giá shop!
        </Text>
        <FlatList  
          data={products}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({item}) => <ProductCart product={item} />}
          contentContainerStyle={{paddingBottom: 20}}
        />
      </View>
      <Footer/>
    </SafeAreaView>
    </SafeAreaProvider>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
  },
  main: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 10,
  },
  infoText: {
    marginBottom: 10,
    fontSize: 14,
    color: '#333',
  }
});
