<template>
    <div class="pager">
      <button @click="prev" :disabled="page===1">Ante</button>
      <span>Página {{page}} / {{total}}</span>
      <button @click="next" :disabled="page===total">Prox</button>
    </div>
  </template>
  
  <script setup>
  const props = defineProps({ page:Number, total:Number });
  const emit = defineEmits(['update:page']);
  const prev = () => emit('update:page', props.page-1);
  const next = () => emit('update:page', props.page+1);
  </script>
  
  <style scoped>
  .pager { display:flex; gap:1rem; justify-content:center; align-items:center; }
  button { padding:.3rem .6rem; }
  </style>
  