import { useState, useRef } from "react";
import { View, TextInput, Alert, Text, TouchableOpacity, StyleSheet, ScrollView, SafeAreaView } from "react-native";
import { ExpenseDB } from "../database/expenseDB";
import { useRouter } from "expo-router";

export default function AddExpense() {
  const [type, setType] = useState<"Thu" | "Chi">("Thu");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  
  // Sử dụng useRef để quản lý input fields
  const titleInputRef = useRef<TextInput>(null);
  const amountInputRef = useRef<TextInput>(null);
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");

  // Hàm clear tất cả input fields
  const clearInputs = () => {
    setTitle("");
    setAmount("");
    titleInputRef.current?.clear();
    amountInputRef.current?.clear();
  };

  const onSave = async () => {
    // Validate input
    if (!title.trim()) {
      Alert.alert("Lỗi", "Vui lòng nhập tên khoản!");
      return;
    }

    const parsedAmount = parseFloat(amount.replace(/,/g, ''));
    if (isNaN(parsedAmount) || parsedAmount <= 0) {
      Alert.alert("Lỗi", "Vui lòng nhập số tiền hợp lệ (lớn hơn 0)!");
      return;
    }

    setIsLoading(true);
    try {
      await ExpenseDB.add(title.trim(), parsedAmount, type, () => {
        Alert.alert("Thành công", "Đã thêm khoản mới!", [
          {
            text: "OK",
            onPress: () => {
              // Sử dụng hàm clearInputs để clear tất cả input fields
              clearInputs();
              router.back();
            }
          }
        ]);
      });
    } catch (error) {
      Alert.alert("Lỗi", "Không thể lưu dữ liệu!");
    } finally {
      setIsLoading(false);
    }
  };

  const formatAmount = (text: string) => {
    // Remove non-numeric characters except decimal point
    const numericText = text.replace(/[^0-9.]/g, '');
    
    // Handle decimal point
    const parts = numericText.split('.');
    if (parts.length > 2) {
      return amount; // Don't allow multiple decimal points
    }

    // Format with thousand separators
    if (parts[0]) {
      parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }

    return parts.join('.');
  };

  const handleAmountChange = (text: string) => {
    const formatted = formatAmount(text);
    setAmount(formatted);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.header}>
          <Text style={styles.title}>Thêm Khoản Mới</Text>
        </View>

        <View style={styles.form}>
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Tên khoản *</Text>
            <TextInput
              ref={titleInputRef}
              value={title}
              onChangeText={setTitle}
              placeholder="Ví dụ: Ăn trưa, Lương tháng..."
              style={styles.textInput}
              maxLength={100}
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Số tiền (VNĐ) *</Text>
            <TextInput
              ref={amountInputRef}
              value={amount}
              onChangeText={handleAmountChange}
              placeholder="0"
              keyboardType="numeric"
              style={styles.textInput}
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Loại giao dịch</Text>
            <View style={styles.typeContainer}>
              <TouchableOpacity
                style={[styles.typeButton, type === "Thu" ? styles.incomeActive : styles.typeInactive]}
                onPress={() => setType("Thu")}
              >
                <Text style={[styles.typeText, type === "Thu" ? styles.activeText : styles.inactiveText]}>
                  💰 Thu nhập
                </Text>
              </TouchableOpacity>
              
              <TouchableOpacity
                style={[styles.typeButton, type === "Chi" ? styles.expenseActive : styles.typeInactive]}
                onPress={() => setType("Chi")}
              >
                <Text style={[styles.typeText, type === "Chi" ? styles.activeText : styles.inactiveText]}>
                  💸 Chi tiêu
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={[styles.saveButton, isLoading && styles.disabledButton]}
            onPress={onSave}
            disabled={isLoading}
          >
            <Text style={styles.saveButtonText}>
              {isLoading ? "Đang lưu..." : "💾 Lưu"}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.clearButton}
            onPress={clearInputs}
          >
            <Text style={styles.clearButtonText}>🗑️ Xóa nội dung</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.cancelButton}
            onPress={() => router.back()}
          >
            <Text style={styles.cancelButtonText}>⬅️ Trở về</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  scrollContainer: {
    flexGrow: 1,
    padding: 20,
  },
  header: {
    marginBottom: 30,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2d3436',
  },
  form: {
    flex: 1,
  },
  inputGroup: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2d3436',
    marginBottom: 8,
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 12,
    padding: 16,
    fontSize: 16,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  typeContainer: {
    flexDirection: 'row',
    gap: 12,
  },
  typeButton: {
    flex: 1,
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderRadius: 12,
    borderWidth: 2,
    alignItems: 'center',
  },
  incomeActive: {
    backgroundColor: '#00b894',
    borderColor: '#00b894',
  },
  expenseActive: {
    backgroundColor: '#e17055',
    borderColor: '#e17055',
  },
  typeInactive: {
    backgroundColor: '#fff',
    borderColor: '#ddd',
  },
  typeText: {
    fontSize: 16,
    fontWeight: '600',
  },
  activeText: {
    color: '#fff',
  },
  inactiveText: {
    color: '#636e72',
  },
  buttonContainer: {
    gap: 12,
    marginTop: 20,
  },
  saveButton: {
    backgroundColor: '#0984e3',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  disabledButton: {
    backgroundColor: '#b2bec3',
  },
  saveButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  cancelButton: {
    backgroundColor: '#74b9ff',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  cancelButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  clearButton: {
    backgroundColor: '#fd79a8',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  clearButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
