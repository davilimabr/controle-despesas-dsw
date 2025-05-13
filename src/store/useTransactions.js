import { defineStore } from 'pinia';
let nextId = 1;

export const useTransactions = defineStore('transactions', {
  state: () => ({
    items: [] // {id, description, amount}
  }),
  getters: {
    /** devolve lista com saldo incremental já calculado */
    itemsWithBalance: (s) => {
      let running = 0;
      return s.items.map(t => {
        running += t.amount;
        return { ...t, balance: running };
      });
    }
  },
  actions: {
    add(description, amount) {
      this.items.push({ id: nextId++, description, amount: Number(amount) });
    },
    remove(id) {
      this.items = this.items.filter(t => t.id !== id);
    },
    move(id, dir) { // dir = -1 (up) ou +1 (down)
      const idx = this.items.findIndex(t => t.id === id);
      const newIdx = idx + dir;
      if (newIdx < 0 || newIdx >= this.items.length) return;
      const [elem] = this.items.splice(idx, 1);
      this.items.splice(newIdx, 0, elem);
    }
  }
});
