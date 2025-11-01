import { useEffect, useState, useCallback } from "react";
import {
  View,
  FlatList,
  TextInput,
  RefreshControl,
  Text,
  TouchableOpacity,
  Alert,
  StyleSheet,
  SafeAreaView,
  StatusBar,
} from "react-native";
import { useRouter, useFocusEffect } from "expo-router";
import { ExpenseDB, initDB } from "../database/expenseDB";
import ExpenseItem from "../components/ExpenseItem";
import { ExpenseApi } from "../api/expenseApi";

export default function Index() {
  const router = useRouter();
  const [expenses, setExpenses] = useState<any[]>([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("Tất cả");
  const [refreshing, setRefreshing] = useState(false);

  const loadData = () => ExpenseDB.getAll(setExpenses);

  useFocusEffect(
    useCallback(() => {
      initDB();
      loadData();
    }, [])
  );

  const filtered = expenses.filter((x) => {
    const matchText = x.title.toLowerCase().includes(search.toLowerCase());
    const matchType = filter === "Tất cả" || x.type === filter;
    return matchText && matchType;
  });

  const onLongPress = (item: any) => {
    Alert.alert(
      "Xác nhận xóa",
      `Bạn có chắc muốn xóa "${item.title}"?`,
      [
        { text: "Hủy", style: "cancel" },
        { 
          text: "Xóa", 
          style: "destructive",
          onPress: () => ExpenseDB.delete(item.id, loadData) 
        },
      ]
    );
  };

  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      loadData();
      setRefreshing(false);
    }, 800);
  };

  const syncData = async () => {
    try {
      await ExpenseApi.clearAll();
      await ExpenseApi.syncAll(expenses);
      Alert.alert("Thành công", "Đồng bộ dữ liệu thành công!");
    } catch (error) {
      Alert.alert("Lỗi", "Không thể đồng bộ dữ liệu!");
    }
  };

  // Calculate summary
  const totalIncome = filtered.filter(x => x.type === "Thu").reduce((sum, x) => sum + x.amount, 0);
  const totalExpense = filtered.filter(x => x.type === "Chi").reduce((sum, x) => sum + x.amount, 0);
  const balance = totalIncome - totalExpense;

  const formatMoney = (amount: number) => {
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND'
    }).format(amount);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#f8f9fa" />
      
      {/* Summary Cards */}
      <View style={styles.summaryContainer}>
        <View style={[styles.summaryCard, styles.incomeCard]}>
          <Text style={styles.summaryLabel}>Thu nhập</Text>
          <Text style={[styles.summaryAmount, styles.incomeText]}>
            {formatMoney(totalIncome)}
          </Text>
        </View>
        
        <View style={[styles.summaryCard, styles.expenseCard]}>
          <Text style={styles.summaryLabel}>Chi tiêu</Text>
          <Text style={[styles.summaryAmount, styles.expenseText]}>
            {formatMoney(totalExpense)}
          </Text>
        </View>
        
        <View style={[styles.summaryCard, styles.balanceCard]}>
          <Text style={styles.summaryLabel}>Số dư</Text>
          <Text style={[styles.summaryAmount, balance >= 0 ? styles.incomeText : styles.expenseText]}>
            {formatMoney(balance)}
          </Text>
        </View>
      </View>

      {/* Search */}
      <View style={styles.searchContainer}>
        <TextInput
          placeholder="🔍 Tìm kiếm giao dịch..."
          value={search}
          onChangeText={setSearch}
          style={styles.searchInput}
        />
      </View>

      {/* Filter Buttons */}
      <View style={styles.filterContainer}>
        {["Tất cả", "Thu", "Chi"].map((t) => (
          <TouchableOpacity
            key={t}
            style={[styles.filterButton, filter === t && styles.filterButtonActive]}
            onPress={() => setFilter(t)}
          >
            <Text style={[styles.filterText, filter === t && styles.filterTextActive]}>
              {t === "Thu" ? "💰 Thu" : t === "Chi" ? "💸 Chi" : "📋 Tất cả"}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Expense List */}
      <View style={styles.listContainer}>
        <FlatList
          data={filtered}
          keyExtractor={(i) => i.id.toString()}
          renderItem={({ item }) => (
            <ExpenseItem
              item={item}
              onPress={() => router.push({ pathname: "/editExpense", params: { ...item } })}
              onLongPress={onLongPress}
            />
          )}
          refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={
            <View style={styles.emptyContainer}>
              <Text style={styles.emptyText}>📋 Chưa có giao dịch nào</Text>
              <Text style={styles.emptySubText}>Thêm giao dịch đầu tiên của bạn!</Text>
            </View>
          }
        />
      </View>

      {/* Action Buttons */}
      <View style={styles.actionContainer}>
        <TouchableOpacity
          style={[styles.actionButton, styles.addButton]}
          onPress={() => router.push("/addExpense")}
        >
          <Text style={styles.actionButtonText}>➕ Thêm</Text>
        </TouchableOpacity>
        
        <TouchableOpacity
          style={[styles.actionButton, styles.secondaryButton]}
          onPress={() => router.push("/deleted")}
        >
          <Text style={styles.secondaryButtonText}>🗑️ Đã xóa</Text>
        </TouchableOpacity>
        
        <TouchableOpacity
          style={[styles.actionButton, styles.secondaryButton]}
          onPress={() => router.push("/statistics")}
        >
          <Text style={styles.secondaryButtonText}>📊 Thống kê</Text>
        </TouchableOpacity>
        
        <TouchableOpacity
          style={[styles.actionButton, styles.syncButton]}
          onPress={syncData}
        >
          <Text style={styles.actionButtonText}>🔄 Sync</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  summaryContainer: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingTop: 16,
    gap: 8,
  },
  summaryCard: {
    flex: 1,
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  incomeCard: {
    backgroundColor: '#d4edda',
    borderLeftWidth: 4,
    borderLeftColor: '#28a745',
  },
  expenseCard: {
    backgroundColor: '#f8d7da',
    borderLeftWidth: 4,
    borderLeftColor: '#dc3545',
  },
  balanceCard: {
    backgroundColor: '#e2e3e5',
    borderLeftWidth: 4,
    borderLeftColor: '#6c757d',
  },
  summaryLabel: {
    fontSize: 12,
    fontWeight: '600',
    color: '#6c757d',
    marginBottom: 4,
  },
  summaryAmount: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  incomeText: {
    color: '#28a745',
  },
  expenseText: {
    color: '#dc3545',
  },
  searchContainer: {
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  searchInput: {
    backgroundColor: '#fff',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#e9ecef',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  filterContainer: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingTop: 16,
    gap: 8,
  },
  filterButton: {
    flex: 1,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 20,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#e9ecef',
    alignItems: 'center',
  },
  filterButtonActive: {
    backgroundColor: '#007bff',
    borderColor: '#007bff',
  },
  filterText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#6c757d',
  },
  filterTextActive: {
    color: '#fff',
  },
  listContainer: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  emptyContainer: {
    alignItems: 'center',
    paddingVertical: 40,
  },
  emptyText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#6c757d',
    marginBottom: 8,
  },
  emptySubText: {
    fontSize: 14,
    color: '#adb5bd',
  },
  actionContainer: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingVertical: 16,
    gap: 8,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#e9ecef',
  },
  actionButton: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  addButton: {
    backgroundColor: '#28a745',
  },
  syncButton: {
    backgroundColor: '#17a2b8',
  },
  secondaryButton: {
    backgroundColor: '#f8f9fa',
    borderWidth: 1,
    borderColor: '#dee2e6',
  },
  actionButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
  },
  secondaryButtonText: {
    color: '#6c757d',
    fontSize: 14,
    fontWeight: '600',
  },
});
