<template>
    <section v-if="paged.length">
      <table>
        <thead>
          <tr><th>#</th><th>Descrição</th><th>Valor</th><th>Saldo</th><th></th></tr>
        </thead>
        <tbody>
          <TransactionItem
            v-for="(t, i) in paged"
            :key="t.id"
            :tx="t"
            :absoluteIndex="offset + i" />
        </tbody>
      </table>
  
      <Pagination :page="page" :total="totalPages" @update:page="page=$event" />
    </section>
    <p v-else>Sem transações ainda.</p>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue';
  import { useTransactions } from '../store/useTransactions';
  import TransactionItem from './TransactionItem.vue';
  import Pagination from './Pagination.vue';
  
  const PAGE_SIZE = 5;
  const store = useTransactions();
  const page = ref(1);
  
  const totalPages = computed(() => Math.ceil(store.items.length / PAGE_SIZE));
  const offset = computed(() => (page.value - 1) * PAGE_SIZE);
  const paged = computed(() =>
    store.itemsWithBalance.slice(offset.value, offset.value + PAGE_SIZE)
  );
  </script>
  
  <style scoped>
  table { width:100%; border-collapse:collapse; margin-bottom:1rem; }
  th,td { border:1px solid #ddd; padding:.5rem; text-align:left; }
  th { background:#f5f5f5; }
  </style>
  