import { Stack } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";

export default function Layout() {
  return (
    <SafeAreaProvider>
      <StatusBar style="dark" backgroundColor="#f8f9fa" />
      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: '#fff',
          },
          headerTintColor: '#2d3436',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 18,
          },
          headerShadowVisible: true,
        }}
      >
        <Stack.Screen 
          name="index" 
          options={{ 
            title: "💰 EXPENSE TRACKER",
            headerTitleAlign: 'center',
          }} 
        />
        <Stack.Screen 
          name="addExpense" 
          options={{ 
            title: "➕ Thêm Giao Dịch",
            headerTitleAlign: 'center',
          }} 
        />
        <Stack.Screen 
          name="editExpense" 
          options={{ 
            title: "✏️ Chỉnh Sửa",
            headerTitleAlign: 'center',
          }} 
        />
        <Stack.Screen 
          name="deleted" 
          options={{ 
            title: "🗑️ Đã Xóa",
            headerTitleAlign: 'center',
          }} 
        />
        <Stack.Screen 
          name="statistics" 
          options={{ 
            title: "📊 Thống Kê",
            headerTitleAlign: 'center',
          }} 
        />
      </Stack>
    </SafeAreaProvider>
  );
}
