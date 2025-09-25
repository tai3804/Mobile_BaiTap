import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  StyleSheet,
  Image,
  ScrollView,
  Button,
  TouchableOpacity,
} from "react-native";

export default function App() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [grid, setGrid] = useState(false);

  const fetchData = async () => {
    try {
      const res = await fetch("https://picsum.photos/v2/list?page=2&limit=15");
      const json = await res.json();
      setImages(json);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="blue" />
        <Text>Đang tải hình ảnh...</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>📷 Gallery App</Text>
      <Text style={styles.subtitle}>
        Xem danh sách hình ảnh, chuyển đổi giữa List và Grid
      </Text>

      {/* Horizontal List nổi bật */}
      <Text style={styles.section}>Ảnh nổi bật</Text>
      <FlatList
        data={images.slice(0, 5)}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <Image
            source={{ uri: item.download_url }}
            style={styles.featureImage}
          />
        )}
      />

      {/* Nút chuyển đổi */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => setGrid(!grid)}
      >
        <Text style={styles.buttonText}>
          {grid ? "🔲 Chuyển sang ListView" : "📋 Chuyển sang GridView"}
        </Text>
      </TouchableOpacity>

      {/* List/Grid */}
      <FlatList
        data={images}
        key={grid ? "g" : "l"}
        keyExtractor={(item) => item.id}
        numColumns={grid ? 2 : 1} // chuyển đổi cột
        renderItem={({ item }) => (
          <View style={grid ? styles.gridItem : styles.listItem}>
            <Image
              source={{ uri: item.download_url }}
              style={grid ? styles.gridImage : styles.listImage}
            />
            <Text style={styles.imageAuthor}>{item.author}</Text>
          </View>
        )}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fafafa",
    padding: 10,
  },
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 14,
    color: "gray",
    marginBottom: 10,
  },
  section: {
    fontSize: 18,
    fontWeight: "600",
    marginVertical: 10,
  },
  featureImage: {
    width: 120,
    height: 80,
    borderRadius: 8,
    marginRight: 10,
  },
  button: {
    backgroundColor: "#007AFF",
    padding: 12,
    borderRadius: 8,
    marginVertical: 15,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
  listItem: {
    marginBottom: 15,
  },
  listImage: {
    width: "100%",
    height: 200,
    borderRadius: 10,
  },
  gridItem: {
    flex: 1,
    margin: 5,
    alignItems: "center",
  },
  gridImage: {
    width: "100%",
    height: 150,
    borderRadius: 10,
  },
  imageAuthor: {
    marginTop: 5,
    fontSize: 13,
    fontWeight: "500",
  },
});
