// ProductCart.jsx
import {View, Image, Text, Pressable, StyleSheet} from "react-native"

export default function ProductCart({product}) {
  return (
    <View style={styles.product}> 
      <Image style ={styles.product_img} source={product.img}/>
      <View style={styles.product_texts}> 
        <Text style={styles.product_title}>{product.title}</Text>
        <Text style={styles.product_shop}>Shop {product.shop}</Text>
      </View>
      <Pressable style={styles.product_button}>
        <Text style={styles.button_text}>Chat</Text>
      </Pressable>
    </View>
  )
}

const styles  = StyleSheet.create({
  product: {
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: "space-between",
    padding: 10,
    borderWidth: 1,
    borderColor: '#f3f3f3',
    borderRadius: 8,
    marginVertical: 5,
    backgroundColor: 'white',
  },  
  product_img: {
    width: 60,
    height: 60,
    resizeMode: "contain",
    marginRight: 10,
  }, 
  product_texts: {
    flex: 1,
    marginRight: 10,
  },
  product_title: {
    fontSize: 16,
    fontWeight: "bold",
  },
  product_shop: {
    color: "red",
    marginTop: 4,
  },
  product_button: {
    backgroundColor: 'red',
    paddingVertical: 6,
    paddingHorizontal: 16,
    borderRadius: 6,
  },
  button_text: {
    color: 'white',
    fontWeight: "bold",
  }
})
