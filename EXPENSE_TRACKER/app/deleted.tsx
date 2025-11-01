import { useEffect, useState, useCallback } from "react";
import { 
  View, 
  FlatList, 
  TextInput, 
  RefreshControl, 
  Alert, 
  Text, 
  TouchableOpacity, 
  StyleSheet, 
  SafeAreaView 
} from "react-native";
import { ExpenseDB } from "../database/expenseDB";
import ExpenseItem from "../components/ExpenseItem";
import { useFocusEffect } from "expo-router";

export default function DeletedScreen() {
  const [data, setData] = useState<any[]>([]);
  const [search, setSearch] = useState("");
  const [refreshing, setRefreshing] = useState(false);

  const loadDeleted = () => ExpenseDB.getDeleted(setData);

  useFocusEffect(
    useCallback(() => {
      loadDeleted();
    }, [])
  );

  const filtered = data.filter((x) => x.title.toLowerCase().includes(search.toLowerCase()));

  const onLongPress = (item: any) => {
    Alert.alert(
      "Khôi phục giao dịch", 
      `Bạn có muốn khôi phục "${item.title}"?`, 
      [
        { text: "Hủy", style: "cancel" },
        { 
          text: "Khôi phục", 
          style: "default",
          onPress: () => ExpenseDB.restore(item.id, loadDeleted) 
        },
      ]
    );
  };

  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      loadDeleted();
      setRefreshing(false);
    }, 800);
  };

  const clearAllDeleted = () => {
    if (data.length === 0) {
      Alert.alert("Thông báo", "Không có giao dịch nào để xóa vĩnh viễn!");
      return;
    }

    Alert.alert(
      "Xóa vĩnh viễn",
      `Bạn có chắc muốn xóa vĩnh viễn ${data.length} giao dịch? Hành động này không thể hoàn tác!`,
      [
        { text: "Hủy", style: "cancel" },
        {
          text: "Xóa vĩnh viễn",
          style: "destructive",
          onPress: async () => {
            try {
              // Delete all items permanently
              for (const item of data) {
                await ExpenseDB.deleteCompletely(item.id);
              }
              Alert.alert("Thành công", "Đã xóa vĩnh viễn tất cả giao dịch!");
              loadDeleted();
            } catch (error) {
              Alert.alert("Lỗi", "Không thể xóa dữ liệu!");
            }
          }
        }
      ]
    );
  };

  const restoreAll = () => {
    if (data.length === 0) {
      Alert.alert("Thông báo", "Không có giao dịch nào để khôi phục!");
      return;
    }

    Alert.alert(
      "Khôi phục tất cả",
      `Bạn có muốn khôi phục tất cả ${data.length} giao dịch?`,
      [
        { text: "Hủy", style: "cancel" },
        {
          text: "Khôi phục tất cả",
          onPress: async () => {
            try {
              for (const item of data) {
                await ExpenseDB.restore(item.id);
              }
              Alert.alert("Thành công", "Đã khôi phục tất cả giao dịch!");
              loadDeleted();
            } catch (error) {
              Alert.alert("Lỗi", "Không thể khôi phục dữ liệu!");
            }
          }
        }
      ]
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>Giao Dịch Đã Xóa</Text>
        <Text style={styles.subtitle}>
          {data.length > 0 ? `${data.length} giao dịch` : "Trống"}
        </Text>
      </View>

      {/* Search */}
      <View style={styles.searchContainer}>
        <TextInput
          placeholder="🔍 Tìm kiếm giao dịch đã xóa..."
          value={search}
          onChangeText={setSearch}
          style={styles.searchInput}
        />
      </View>

      {/* Action Buttons */}
      {data.length > 0 && (
        <View style={styles.actionButtonsContainer}>
          <TouchableOpacity style={styles.restoreButton} onPress={restoreAll}>
            <Text style={styles.restoreButtonText}>↩️ Khôi phục tất cả</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.deleteButton} onPress={clearAllDeleted}>
            <Text style={styles.deleteButtonText}>🗑️ Xóa vĩnh viễn</Text>
          </TouchableOpacity>
        </View>
      )}

      {/* List */}
      <View style={styles.listContainer}>
        <FlatList
          data={filtered}
          keyExtractor={(i) => i.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.itemContainer}>
              <ExpenseItem 
                item={item} 
                onPress={() => {}} 
                onLongPress={onLongPress} 
              />
              <View style={styles.deletedOverlay}>
                <Text style={styles.deletedText}>Đã xóa</Text>
              </View>
            </View>
          )}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={
            <View style={styles.emptyContainer}>
              <Text style={styles.emptyIcon}>🗑️</Text>
              <Text style={styles.emptyTitle}>Thùng rác trống</Text>
              <Text style={styles.emptyText}>
                Các giao dịch đã xóa sẽ xuất hiện ở đây
              </Text>
              <Text style={styles.emptySubText}>
                Nhấn giữ để khôi phục giao dịch
              </Text>
            </View>
          }
        />
      </View>

      {/* Info Footer */}
      <View style={styles.infoContainer}>
        <Text style={styles.infoText}>
          💡 Mẹo: Nhấn giữ giao dịch để khôi phục
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  header: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 16,
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
  searchContainer: {
    paddingHorizontal: 20,
    paddingVertical: 16,
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
  actionButtonsContainer: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingBottom: 16,
    gap: 12,
  },
  restoreButton: {
    flex: 1,
    backgroundColor: '#28a745',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  restoreButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
  },
  deleteButton: {
    flex: 1,
    backgroundColor: '#dc3545',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  deleteButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
  },
  listContainer: {
    flex: 1,
    paddingHorizontal: 20,
  },
  itemContainer: {
    position: 'relative',
    marginBottom: 8,
  },
  deletedOverlay: {
    position: 'absolute',
    top: 8,
    right: 8,
    backgroundColor: 'rgba(220, 53, 69, 0.9)',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  deletedText: {
    color: '#fff',
    fontSize: 10,
    fontWeight: 'bold',
    textTransform: 'uppercase',
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
    marginBottom: 8,
    lineHeight: 24,
  },
  emptySubText: {
    fontSize: 14,
    color: '#adb5bd',
    textAlign: 'center',
    fontStyle: 'italic',
  },
  infoContainer: {
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderTopWidth: 1,
    borderTopColor: '#e9ecef',
  },
  infoText: {
    fontSize: 12,
    color: '#6c757d',
    textAlign: 'center',
    fontStyle: 'italic',
  },
});
