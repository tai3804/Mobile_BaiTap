import { Pressable, Text, View, StyleSheet } from "react-native";

interface ExpenseItemProps {
  item: {
    id: number;
    title: string;
    amount: number;
    type: "Thu" | "Chi";
    createdAt: string;
  };
  onPress: (item: any) => void;
  onLongPress: (item: any) => void;
}

export default function ExpenseItem({ item, onPress, onLongPress }: ExpenseItemProps) {
  const formatMoney = (amount: number) => {
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND'
    }).format(amount);
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - date.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays === 1) {
      return "Hôm qua";
    } else if (diffDays <= 7) {
      return `${diffDays} ngày trước`;
    } else {
      return date.toLocaleDateString('vi-VN', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
      });
    }
  };

  return (
    <Pressable
      onPress={() => onPress(item)}
      onLongPress={() => onLongPress(item)}
      style={({ pressed }) => [
        styles.container,
        pressed && styles.pressed,
        item.type === "Thu" ? styles.incomeCard : styles.expenseCard
      ]}
    >
      <View style={styles.content}>
        {/* Left side - Icon and Info */}
        <View style={styles.leftSection}>
          <View style={[styles.iconContainer, item.type === "Thu" ? styles.incomeIcon : styles.expenseIcon]}>
            <Text style={styles.icon}>
              {item.type === "Thu" ? "💰" : "💸"}
            </Text>
          </View>
          
          <View style={styles.infoContainer}>
            <Text style={styles.title} numberOfLines={1}>
              {item.title}
            </Text>
            <Text style={styles.date}>
              {formatDate(item.createdAt)}
            </Text>
            <View style={styles.typeContainer}>
              <Text style={[styles.typeText, item.type === "Thu" ? styles.incomeType : styles.expenseType]}>
                {item.type === "Thu" ? "Thu nhập" : "Chi tiêu"}
              </Text>
            </View>
          </View>
        </View>

        {/* Right side - Amount */}
        <View style={styles.rightSection}>
          <Text style={[styles.amount, item.type === "Thu" ? styles.incomeAmount : styles.expenseAmount]}>
            {item.type === "Chi" ? "-" : "+"}
            {formatMoney(item.amount)}
          </Text>
        </View>
      </View>

      {/* Bottom border indicator */}
      <View style={[styles.indicator, item.type === "Thu" ? styles.incomeIndicator : styles.expenseIndicator]} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    borderRadius: 12,
    marginVertical: 4,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
    overflow: 'hidden',
  },
  pressed: {
    opacity: 0.8,
    transform: [{ scale: 0.98 }],
  },
  incomeCard: {
    borderLeftWidth: 4,
    borderLeftColor: '#28a745',
  },
  expenseCard: {
    borderLeftWidth: 4,
    borderLeftColor: '#dc3545',
  },
  content: {
    flexDirection: "row",
    padding: 16,
    alignItems: 'center',
  },
  leftSection: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  incomeIcon: {
    backgroundColor: '#d4edda',
  },
  expenseIcon: {
    backgroundColor: '#f8d7da',
  },
  icon: {
    fontSize: 20,
  },
  infoContainer: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
    color: '#2d3436',
    marginBottom: 4,
  },
  date: {
    fontSize: 12,
    color: '#6c757d',
    marginBottom: 4,
  },
  typeContainer: {
    alignSelf: 'flex-start',
  },
  typeText: {
    fontSize: 10,
    fontWeight: '600',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 10,
    textTransform: 'uppercase',
  },
  incomeType: {
    color: '#28a745',
    backgroundColor: '#d4edda',
  },
  expenseType: {
    color: '#dc3545',
    backgroundColor: '#f8d7da',
  },
  rightSection: {
    alignItems: 'flex-end',
  },
  amount: {
    fontSize: 16,
    fontWeight: "bold",
  },
  incomeAmount: {
    color: '#28a745',
  },
  expenseAmount: {
    color: '#dc3545',
  },
  indicator: {
    height: 3,
    width: '100%',
  },
  incomeIndicator: {
    backgroundColor: '#28a745',
  },
  expenseIndicator: {
    backgroundColor: '#dc3545',
  },
});
