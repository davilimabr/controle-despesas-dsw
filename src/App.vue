<template>
  <main class="container">
    <h1>Controle de Gastos</h1>
    <p>Saldo Atual: {{ formattedBalance }}</p>
    <TransactionForm />
    <TransactionList />
  </main>
</template>

<script setup>
import TransactionForm from './components/TransactionForm.vue';
import TransactionList from './components/TransactionList.vue';
import { useTransactions } from './store/useTransactions';
import { computed } from 'vue';

const store = useTransactions();
const formattedBalance = computed(() =>
  store.currentBalance.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD'
  })
);
</script>

<style>
.container {
  width: clamp(320px, 90vw, 640px);   /* responsivo */
  background: var(--panel);
  padding: 2rem 2.5rem;
  border-radius: 1rem;
  box-shadow: 0 10px 25px rgba(0,0,0,.07);
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  text-align: center;
}
h1 { font-size: 1.75rem; font-weight: 600; color: var(--accent-dark); }
</style>

