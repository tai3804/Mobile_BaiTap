// App.jsx
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { SafeAreaView,SafeAreaProvider } from 'react-native-safe-area-context';

import Header from "./Header.jsx"
import Footer from "./Footer.jsx"
import ProductCart from "./ProductCart.jsx"
import products from '../../products'

export default function Screen4a() {
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
    flex: 12,
    paddingHorizontal: 16,
    paddingTop: 10,
  },
});
