import React, { useState, useEffect, useCallback } from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter, useLocalSearchParams, useFocusEffect } from "expo-router";
import { initDB, getTasks, updateTask, deleteTask } from "../database/database";
import { RefreshControl } from "react-native";

export default function HomeScreen() {
  const router = useRouter();
  const { name } = useLocalSearchParams();
  const [search, setSearch] = useState("");
  const [tasks, setTasks] = useState<{ id: number; text: string }[]>([]);
  const [editingTaskId, setEditingTaskId] = useState<number | null>(null);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    (async () => {
      await initDB();
      await loadTasks();
    })();
  }, []);

  useFocusEffect(
    useCallback(() => {
      loadTasks();
    }, [])
  );

  const loadTasks = async () => {
    const data = await getTasks();
    setTasks(data);
  };

  const handleUpdateTask = async (id: number, text: string) => {
    if (!text.trim()) return;
    await updateTask(id, text);
    setEditingTaskId(null);
    loadTasks();
  };

  const handleDeleteTask = async (id: number) => {
    await deleteTask(id);
    loadTasks();
  };

  const renderTask = ({ item }: { item: { id: number; text: string } }) => (
    <View style={styles.taskItem}>
      <Ionicons name="checkmark-circle" size={22} color="#30C04F" />

      {editingTaskId === item.id ? (
        <>
          <TextInput
            style={[styles.taskText, styles.editingInput]}
            value={item.text}
            onChangeText={(text) => {
              const updated = tasks.map((t) =>
                t.id === item.id ? { ...t, text } : t
              );
              setTasks(updated);
            }}
          />
          <TouchableOpacity
            style={styles.editButton}
            onPress={() => handleUpdateTask(item.id, item.text)}
          >
            <Ionicons name="checkmark" size={18} color="green" />
          </TouchableOpacity>
        </>
      ) : (
        <>
          <Text style={styles.taskText}>{item.text}</Text>

          <TouchableOpacity
            style={styles.editButton}
            onPress={() => setEditingTaskId(item.id)}
          >
            <Ionicons name="pencil" size={18} color="#3498DB" />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.deleteButton}
            onPress={() => handleDeleteTask(item.id)}
          >
            <Ionicons name="trash" size={18} color="#E74C3C" />
          </TouchableOpacity>
        </>
      )}
    </View>
  );

    const onRefresh = useCallback(async () => {
    setRefreshing(true);
    const newTasks = await getTasks(); // gọi API hoặc lấy dữ liệu mới
    setTasks(newTasks);
    setRefreshing(false);
  }, []);

  return (
    <View style={{ flex: 1, backgroundColor: "#fff", padding: 20 }}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.push("/")}>
          <Ionicons name="arrow-back" size={24} color="#333" />
        </TouchableOpacity>

        <View style={styles.userSection}>
          <Image
            source={{ uri: "https://i.pravatar.cc/100" }}
            style={styles.avatar}
          />
          <View>
            <Text style={styles.greeting}>Hi {name}</Text>
            <Text style={styles.subText}>Have a great day ahead</Text>
          </View>
        </View>
      </View>

      {/* Search bar */}
      <View style={styles.searchContainer}>
        <Ionicons name="search" size={20} color="#999" style={{ marginLeft: 10 }} />
        <TextInput
          placeholder="Search"
          placeholderTextColor="#999"
          style={styles.searchInput}
          value={search}
          onChangeText={setSearch}
        />
      </View>

      {/* Add button */}
      <TouchableOpacity
        onPress={() => router.push(`/add?name=${name}`)}
        style={styles.addBtnFixed}
      >
        <Ionicons name="add" size={28} color="#fff" />
      </TouchableOpacity>

      {/* Task list */}
      <FlatList
        data={tasks.filter((t) =>
          t.text.toLowerCase().includes(search.toLowerCase())
        )}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderTask}
        contentContainerStyle={{ paddingBottom: 100 }}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 25,
  },
  userSection: { flexDirection: "row", alignItems: "center", gap: 10 },
  avatar: { width: 50, height: 50, borderRadius: 25 },
  greeting: { fontSize: 18, fontWeight: "700", color: "#222" },
  subText: { color: "#666", fontSize: 13 },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    height: 45,
    marginBottom: 15,
  },
  searchInput: { flex: 1, height: "100%", fontSize: 16, paddingHorizontal: 10 },
  addBtnFixed: {
    position: "absolute",
    right: "50%",
    bottom: 30,
    backgroundColor: "#00BCD4",
    padding: 15,
    borderRadius: 50,
    zIndex: 10,
    elevation: 3,
  },
  taskItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F6F7FB",
    padding: 15,
    borderRadius: 15,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  taskText: { flex: 1, fontSize: 16, color: "#333", marginLeft: 10 },
  editingInput: {
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    padding: 8,
  },
  editButton: {
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 6,
    marginLeft: 5,
  },
  deleteButton: {
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 6,
    marginLeft: 5,
  },
});
