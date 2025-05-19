<template>
    <form @submit.prevent="submit">
      <input v-model="desc" placeholder="Descrição" required />
      <input v-model.number="amount" type="number" step="0.01" placeholder="Valor (+/-)" required />
      <button>Adicionar</button>
    </form>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { useTransactions } from '../store/useTransactions';
  
  const store = useTransactions();
  const desc = ref('');
  const amount = ref(null);
  
  function submit() {
    if (amount.value === 0 || amount.value === null) {
      alert('O valor deve ser diferente de zero.');
      return;
    }
    store.add(desc.value, amount.value);
    desc.value = ''; amount.value = null;
  }
  </script>
  
  <style scoped>
  form { display:flex; gap:.5rem; margin-bottom:1rem; }
  input { flex:1; padding:.4rem .6rem; }
  button { padding:.4rem .8rem; }
  </style>
  