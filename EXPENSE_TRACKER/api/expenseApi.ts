export const ExpenseApi = {
  baseUrl: "https://683173a86205ab0d6c3c5bd3.mockapi.io/tracker",

  getAll: async () => {
    const res = await fetch(ExpenseApi.baseUrl);
    return res.json();
  },

  clearAll: async () => {
    const res = await ExpenseApi.getAll();
    await Promise.all(res.map((x: any) => fetch(`${ExpenseApi.baseUrl}/${x.id}`, { method: "DELETE" })));
  },

  syncAll: async (data: any[]) => {
    for (let item of data) {
      await fetch(ExpenseApi.baseUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(item),
      });
    }
  },
};
