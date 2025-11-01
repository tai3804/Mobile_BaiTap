import { useState } from "react";
import { View, TextInput, Alert, Text, TouchableOpacity, StyleSheet, ScrollView, SafeAreaView } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import { ExpenseDB } from "../database/expenseDB";

export default function EditExpense() {
  const params = useLocalSearchParams<{ id: string; title: string; amount: string; type: string }>();
  const router = useRouter();
  const [title, setTitle] = useState(params.title || "");
  const [amount, setAmount] = useState(params.amount || "");
  const [type, setType] = useState<"Thu" | "Chi">((params.type as "Thu" | "Chi") || "Thu");
  const [isLoading, setIsLoading] = useState(false);

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
      await ExpenseDB.update(Number(params.id), title.trim(), parsedAmount, type, () => {
        Alert.alert("Thành công", "Cập nhật thành công!", [
          {
            text: "OK",
            onPress: () => router.back()
          }
        ]);
      });
    } catch (error) {
      Alert.alert("Lỗi", "Không thể cập nhật dữ liệu!");
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

  const formatMoney = (amount: string) => {
    const num = parseFloat(amount.replace(/,/g, ''));
    if (isNaN(num)) return "0 ₫";
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND'
    }).format(num);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.header}>
          <Text style={styles.title}>Chỉnh Sửa Giao Dịch</Text>
          <Text style={styles.subtitle}>ID: #{params.id}</Text>
        </View>

        {/* Preview Card */}
        <View style={styles.previewCard}>
          <Text style={styles.previewLabel}>Xem trước:</Text>
          <View style={styles.previewRow}>
            <Text style={styles.previewTitle}>{title || "Tên giao dịch"}</Text>
            <Text style={[styles.previewAmount, type === "Thu" ? styles.incomeText : styles.expenseText]}>
              {type === "Chi" ? "-" : "+"}{formatMoney(amount)}
            </Text>
          </View>
          <Text style={styles.previewType}>
            {type === "Thu" ? "💰 Thu nhập" : "💸 Chi tiêu"}
          </Text>
        </View>

        <View style={styles.form}>
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Tên giao dịch *</Text>
            <TextInput
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
              {isLoading ? "Đang lưu..." : "💾 Lưu thay đổi"}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.cancelButton}
            onPress={() => router.back()}
          >
            <Text style={styles.cancelButtonText}>❌ Hủy bỏ</Text>
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
    marginBottom: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2d3436',
  },
  subtitle: {
    fontSize: 14,
    color: '#636e72',
    marginTop: 4,
  },
  previewCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    borderLeftWidth: 4,
    borderLeftColor: '#007bff',
  },
  previewLabel: {
    fontSize: 12,
    fontWeight: '600',
    color: '#636e72',
    marginBottom: 8,
    textTransform: 'uppercase',
  },
  previewRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  previewTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2d3436',
    flex: 1,
    marginRight: 10,
  },
  previewAmount: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  previewType: {
    fontSize: 14,
    color: '#636e72',
    fontStyle: 'italic',
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
  incomeText: {
    color: '#00b894',
  },
  expenseText: {
    color: '#e17055',
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
    backgroundColor: '#6c757d',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  cancelButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
