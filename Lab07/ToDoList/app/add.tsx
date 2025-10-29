import { Ionicons } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useState } from "react";
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import logoToDo from "../assets/images/logoToDo.png";
import { insertTask } from "../database/database";

export default function AddScreen() {
  const router = useRouter();
  const [task, setTask] = useState("");
  const { name } = useLocalSearchParams();

  const handleAddTask = async () => {
    if (!task.trim()) return;
    await insertTask(task); // 👈 thêm vào SQLite
    setTask("");
    router.back();
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="#333" />
        </TouchableOpacity>

        <View>
          <Text style={styles.greeting}>Hi {name}</Text>
          <Text style={styles.subText}>Have a great day ahead</Text>
        </View>
      </View>

      <Text style={styles.title}>ADD YOUR JOB</Text>

      <View>
        <Ionicons name="document-text-outline" size={20} color="#555" style={styles.inputIcon} />
        <TextInput
          placeholder="Input your job"
          style={styles.input}
          value={task}
          onChangeText={setTask}
          placeholderTextColor="#999"
        />
      </View>

      <TouchableOpacity style={styles.finishButton} onPress={handleAddTask}>
        <Text style={styles.finishText}>FINISH →</Text>
      </TouchableOpacity>

      <Image source={logoToDo} style={styles.bottomImage} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", padding: 20 },
  header: { flexDirection: "row", alignItems: "center", gap: 10, marginBottom: 30 },
  greeting: { fontSize: 18, fontWeight: "700", color: "#222" },
  subText: { color: "#666", fontSize: 13 },
  title: {
    fontSize: 22,
    fontWeight: "700",
    color: "#714DFF",
    textAlign: "center",
    marginBottom: 30,
  },
  inputIcon: { position: "absolute", left: 12, top: 14, zIndex: 1 },
  input: {
    fontSize: 16,
    color: "#333",
    borderWidth: 1.2,
    borderColor: "#00BCD4",
    borderRadius: 8,
    paddingVertical: 12,
    paddingLeft: 40,
    marginBottom: 24,
  },
  finishButton: {
    backgroundColor: "#00BCD4",
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: "center",
  },
  finishText: { color: "#fff", fontSize: 16, fontWeight: "600" },
  bottomImage: {
    width: 120,
    height: 120,
    resizeMode: "contain",
    alignSelf: "center",
    marginTop: 50,
  },
});
