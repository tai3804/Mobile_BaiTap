import React from "react";
import { View, Text, TextInput, FlatList, Image, TouchableOpacity } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";

const products = [
  { id: 1, title: "Cáp chuyển đổi USB", discount: "-39%", rating: 4, image: require("../../assets/screen4b/giacchuyen 1.png") },
  { id: 2, title: "Adapter Type-C", discount: "-25%", rating: 5, image: require("../../assets/screen4b/daynguon 1.png") },
  { id: 3, title: "Hub USB 4 cổng", discount: "-15%", rating: 3, image: require("../../assets/screen4b/dauchuyendoipsps2 1.png") },
  { id: 4, title: "Đầu đọc thẻ nhớ", discount: "-40%", rating: 4, image: require("../../assets/screen4b/dauchuyendoi 1.png") },
  { id: 5, title: "Cáp HDMI 2m", discount: "-20%", rating: 5, image: require("../../assets/screen4b/carbusbtops2 1.png") },
  { id: 6, title: "Cáp âm thanh 3.5mm", discount: "-30%", rating: 4, image: require("../../assets/screen4b/daucam 1.png") },
];

export default function Screen4b() {
  const renderItem = ({ item }) => (
    <View style={{ flex: 1, margin: 8, backgroundColor: "white" }}>
      <View
        style={{
          borderWidth: 1,
          borderColor: "#ddd",
          borderRadius: 6,
          overflow: "hidden",
          padding: 8,
          height: 200,
        }}
      >
        {/* Ảnh */}
        <Image
          source={ item.image }
          style={{
            width: "100%",
            height: 100,
            resizeMode: "contain",
            backgroundColor: "#f2f2f2",
          }}
        />

        {/* Title */}
        <Text style={{ fontSize: 14, fontWeight: "bold", marginTop: 6 }}>
          {item.title}
        </Text>

        {/* Rating + Discount */}
        <View
          style={{
            flexDirection: "column",
            justifyContent: "space-between",
            marginTop: 4,
          }}
        >
            <Image source={require("../../assets/screen4b/Group 8.png")}/>
          <View
            style={{
            flexDirection: "row",
            alignItems: "center",
            marginTop: 4,
          }}
          >
            <Text style= {{marginEnd: 24}}>69.900đ</Text>
            <Text style={{ fontSize: 12, color: "red", fontWeight: "bold" }}>
              {item.discount}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );

  return (
  <SafeAreaProvider>
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      {/* Header */}
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          backgroundColor: "#1ba9ff",
          paddingHorizontal: 8,
          paddingVertical: 10,
        }}
      >
        <Image source={require("../../assets/screen4b/ant-design_arrow-left-outlined.png")} style={{ width: 24, height: 24, marginRight: 8 }} />
        <TextInput
          placeholder="Dây cáp usb"
          style={{
            flex: 1,
            backgroundColor: "white",
            borderRadius: 4,
            paddingHorizontal: 10,
            height: 36,
          }}
        />
        <TouchableOpacity style={{ marginLeft: 12 }}>
          <Image source={require("../../assets/screen4b/bi_cart-check.png")} style={{ width: 24, height: 24 }} />
        </TouchableOpacity>
        <TouchableOpacity style={{ marginLeft: 12 }}>
          <Image source={require("../../assets/screen4b/Group 2.png")} />
        </TouchableOpacity>
      </View>

      {/* Product Grid */}
      <FlatList
        data={products}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        contentContainerStyle={{ padding: 4 }}
      />

      {/* Footer */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
          paddingVertical: 8,
          backgroundColor: "#1ba9ff",
        }}
      >
        <Image source={require("../../assets/screen4b/Group 10.png") } style={{ width: 24, height: 24 }} />
        <Image source={ require("../../assets/Vector.png")} style={{ width: 24, height: 24 }} />
        <Image source={require("../../assets/screen4b/Vector 1.png")} style={{ width: 24, height: 24 }} />
      </View>
    </SafeAreaView>    
  </SafeAreaProvider>
    
  );
}
