<template>
    <tr :class="rowClass">
      <td>{{ absoluteIndex + 1 }}</td>
      <td>{{ tx.description }}</td>
      <td :style="{color: amountColor}">{{ formatted(tx.amount) }}</td>
      <td :style="balanceStyle">{{ formatted(tx.balance) }}</td>
      
      <td>
        <button @click="store.move(tx.id,-1)" :disabled="absoluteIndex===0">↑</button>
        <button @click="store.move(tx.id,1)"  :disabled="absoluteIndex===store.items.length-1">↓</button>
        <button @click="store.remove(tx.id)">✕</button>
      </td>
    </tr>
  </template>
  
  <script setup>
  import { computed } from 'vue';
  import { useTransactions } from '../store/useTransactions';
  const props = defineProps({ tx:Object, absoluteIndex:Number });
  const store = useTransactions();
  
  const amountColor = computed(() => props.tx.amount >= 0 ? 'green' : 'red');
  const balanceStyle = computed(() =>
    props.tx.balance < 0
      ? { background:'red', color:'yellow', fontWeight:'bold' }
      : {}
  );
  
  function formatted(n) {
    return n.toLocaleString('en-US',{style:'currency',currency:'USD'});
  }
  
  const rowClass = computed(() => (props.tx.amount>=0?'credit':'debit'));
  </script>
  
  <style scoped>
  button { margin-left:.25rem; }
  .credit td { } /* custom credit row scope if needed */
  .debit td  { } /* custom debit row scope if needed */
  </style>
  