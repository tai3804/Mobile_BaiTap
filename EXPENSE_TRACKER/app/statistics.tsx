import { useCallback, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { useFocusEffect } from "expo-router";
import { ExpenseDB } from "../database/expenseDB";

const { width } = Dimensions.get('window');

export default function Statistics() {
  const [expenses, setExpenses] = useState<any[]>([]);
  const [selectedPeriod, setSelectedPeriod] = useState<"week" | "month" | "year">("month");

  useFocusEffect(
    useCallback(() => {
      ExpenseDB.getAll(setExpenses);
    }, [])
  );

  const formatMoney = (amount: number) => {
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND'
    }).format(amount);
  };

  // Filter expenses by period
  const getFilteredExpenses = () => {
    const now = new Date();
    const filtered = expenses.filter(expense => {
      const expenseDate = new Date(expense.createdAt);
      
      switch (selectedPeriod) {
        case "week":
          const weekStart = new Date(now);
          weekStart.setDate(now.getDate() - 7);
          return expenseDate >= weekStart;
        case "month":
          const monthStart = new Date(now.getFullYear(), now.getMonth(), 1);
          return expenseDate >= monthStart;
        case "year":
          const yearStart = new Date(now.getFullYear(), 0, 1);
          return expenseDate >= yearStart;
        default:
          return true;
      }
    });
    
    return filtered;
  };

  const filteredExpenses = getFilteredExpenses();
  
  // Calculate statistics
  const totalIncome = filteredExpenses.filter(x => x.type === "Thu").reduce((sum, x) => sum + x.amount, 0);
  const totalExpense = filteredExpenses.filter(x => x.type === "Chi").reduce((sum, x) => sum + x.amount, 0);
  const balance = totalIncome - totalExpense;
  const totalTransactions = filteredExpenses.length;
  
  // Calculate category statistics
  const categoryStats = filteredExpenses.reduce((acc, expense) => {
    const category = expense.type;
    if (!acc[category]) {
      acc[category] = { count: 0, amount: 0 };
    }
    acc[category].count += 1;
    acc[category].amount += expense.amount;
    return acc;
  }, {} as Record<string, { count: number; amount: number }>);

  // Calculate averages
  const avgIncome = categoryStats["Thu"]?.count > 0 ? categoryStats["Thu"].amount / categoryStats["Thu"].count : 0;
  const avgExpense = categoryStats["Chi"]?.count > 0 ? categoryStats["Chi"].amount / categoryStats["Chi"].count : 0;

  // Get recent transactions
  const recentTransactions = filteredExpenses
    .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
    .slice(0, 5);

  const periodLabels = {
    week: "7 ngày qua",
    month: "Tháng này",
    year: "Năm này"
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.title}>Thống Kê Chi Tiêu</Text>
          <Text style={styles.subtitle}>Phân tích tài chính cá nhân</Text>
        </View>

        {/* Period Filter */}
        <View style={styles.periodContainer}>
          {(["week", "month", "year"] as const).map((period) => (
            <TouchableOpacity
              key={period}
              style={[styles.periodButton, selectedPeriod === period && styles.periodButtonActive]}
              onPress={() => setSelectedPeriod(period)}
            >
              <Text style={[styles.periodText, selectedPeriod === period && styles.periodTextActive]}>
                {periodLabels[period]}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Summary Cards */}
        <View style={styles.summaryContainer}>
          <View style={[styles.summaryCard, styles.incomeCard]}>
            <Text style={styles.summaryIcon}>💰</Text>
            <Text style={styles.summaryLabel}>Thu nhập</Text>
            <Text style={[styles.summaryAmount, styles.incomeText]}>
              {formatMoney(totalIncome)}
            </Text>
            <Text style={styles.summaryCount}>
              {categoryStats["Thu"]?.count || 0} giao dịch
            </Text>
          </View>

          <View style={[styles.summaryCard, styles.expenseCard]}>
            <Text style={styles.summaryIcon}>💸</Text>
            <Text style={styles.summaryLabel}>Chi tiêu</Text>
            <Text style={[styles.summaryAmount, styles.expenseText]}>
              {formatMoney(totalExpense)}
            </Text>
            <Text style={styles.summaryCount}>
              {categoryStats["Chi"]?.count || 0} giao dịch
            </Text>
          </View>
        </View>

        {/* Balance Card */}
        <View style={[styles.balanceCard, balance >= 0 ? styles.positiveBalance : styles.negativeBalance]}>
          <Text style={styles.balanceIcon}>{balance >= 0 ? "📈" : "📉"}</Text>
          <Text style={styles.balanceLabel}>Số dư</Text>
          <Text style={[styles.balanceAmount, balance >= 0 ? styles.incomeText : styles.expenseText]}>
            {formatMoney(balance)}
          </Text>
          <Text style={styles.balanceDescription}>
            {balance >= 0 ? "Bạn đang tiết kiệm được tiền" : "Bạn đang chi nhiều hơn thu"}
          </Text>
        </View>

        {/* Average Statistics */}
        <View style={styles.avgContainer}>
          <Text style={styles.sectionTitle}>📊 Thống kê trung bình</Text>
          
          <View style={styles.avgGrid}>
            <View style={styles.avgItem}>
              <Text style={styles.avgLabel}>TB Thu nhập</Text>
              <Text style={[styles.avgAmount, styles.incomeText]}>
                {formatMoney(avgIncome)}
              </Text>
            </View>
            
            <View style={styles.avgItem}>
              <Text style={styles.avgLabel}>TB Chi tiêu</Text>
              <Text style={[styles.avgAmount, styles.expenseText]}>
                {formatMoney(avgExpense)}
              </Text>
            </View>
            
            <View style={styles.avgItem}>
              <Text style={styles.avgLabel}>Tổng GD</Text>
              <Text style={styles.avgAmount}>
                {totalTransactions}
              </Text>
            </View>
            
            <View style={styles.avgItem}>
              <Text style={styles.avgLabel}>TB/Ngày</Text>
              <Text style={styles.avgAmount}>
                {selectedPeriod === "month" ? Math.round(totalTransactions / 30) : 
                 selectedPeriod === "week" ? Math.round(totalTransactions / 7) :
                 Math.round(totalTransactions / 365)}
              </Text>
            </View>
          </View>
        </View>

        {/* Recent Transactions */}
        {recentTransactions.length > 0 && (
          <View style={styles.recentContainer}>
            <Text style={styles.sectionTitle}>🕒 Giao dịch gần đây</Text>
            
            {recentTransactions.map((transaction, index) => (
              <View key={transaction.id} style={styles.recentItem}>
                <View style={styles.recentInfo}>
                  <Text style={styles.recentTitle}>{transaction.title}</Text>
                  <Text style={styles.recentDate}>
                    {new Date(transaction.createdAt).toLocaleDateString('vi-VN')}
                  </Text>
                </View>
                <Text style={[
                  styles.recentAmount,
                  transaction.type === "Thu" ? styles.incomeText : styles.expenseText
                ]}>
                  {transaction.type === "Chi" ? "-" : "+"}
                  {formatMoney(transaction.amount)}
                </Text>
              </View>
            ))}
          </View>
        )}

        {/* Empty State */}
        {filteredExpenses.length === 0 && (
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyIcon}>📊</Text>
            <Text style={styles.emptyTitle}>Chưa có dữ liệu</Text>
            <Text style={styles.emptyText}>
              Không có giao dịch nào trong {periodLabels[selectedPeriod].toLowerCase()}
            </Text>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  header: {
    padding: 20,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#e9ecef',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2d3436',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 14,
    color: '#636e72',
    textAlign: 'center',
    marginTop: 4,
  },
  periodContainer: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 16,
    gap: 8,
  },
  periodButton: {
    flex: 1,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 20,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#e9ecef',
    alignItems: 'center',
  },
  periodButtonActive: {
    backgroundColor: '#007bff',
    borderColor: '#007bff',
  },
  periodText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#6c757d',
  },
  periodTextActive: {
    color: '#fff',
  },
  summaryContainer: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    gap: 12,
    marginBottom: 16,
  },
  summaryCard: {
    flex: 1,
    padding: 20,
    borderRadius: 16,
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
  summaryIcon: {
    fontSize: 24,
    marginBottom: 8,
  },
  summaryLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: '#6c757d',
    marginBottom: 8,
  },
  summaryAmount: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  summaryCount: {
    fontSize: 12,
    color: '#adb5bd',
  },
  incomeText: {
    color: '#28a745',
  },
  expenseText: {
    color: '#dc3545',
  },
  balanceCard: {
    marginHorizontal: 20,
    padding: 24,
    borderRadius: 16,
    alignItems: 'center',
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  positiveBalance: {
    backgroundColor: '#d1ecf1',
    borderLeftWidth: 4,
    borderLeftColor: '#17a2b8',
  },
  negativeBalance: {
    backgroundColor: '#f5c6cb',
    borderLeftWidth: 4,
    borderLeftColor: '#721c24',
  },
  balanceIcon: {
    fontSize: 32,
    marginBottom: 8,
  },
  balanceLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: '#6c757d',
    marginBottom: 8,
  },
  balanceAmount: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  balanceDescription: {
    fontSize: 14,
    color: '#6c757d',
    textAlign: 'center',
    fontStyle: 'italic',
  },
  avgContainer: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2d3436',
    marginBottom: 16,
  },
  avgGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  avgItem: {
    width: (width - 64) / 2,
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  avgLabel: {
    fontSize: 12,
    color: '#6c757d',
    marginBottom: 8,
    textAlign: 'center',
  },
  avgAmount: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2d3436',
  },
  recentContainer: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  recentItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 12,
    marginBottom: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  recentInfo: {
    flex: 1,
  },
  recentTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2d3436',
    marginBottom: 4,
  },
  recentDate: {
    fontSize: 12,
    color: '#adb5bd',
  },
  recentAmount: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  emptyContainer: {
    alignItems: 'center',
    paddingVertical: 60,
    paddingHorizontal: 20,
  },
  emptyIcon: {
    fontSize: 64,
    marginBottom: 16,
  },
  emptyTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2d3436',
    marginBottom: 8,
  },
  emptyText: {
    fontSize: 16,
    color: '#636e72',
    textAlign: 'center',
    lineHeight: 24,
  },
});
