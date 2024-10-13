<script lang="ts" setup>

const counter = defineModel<number>('counter', {default: 0});


</script>

<template>
  <div>
    <p>Counter: {{ counter }}</p>
    <button @click="counter++">Increment</button>
    <div v-if="counter > 0">
      <button @click="counter--">Decrement</button>
    </div>
  </div>
</template>

<style scoped>
div {
  display: flex;
  align-items: center;
  gap: 1rem;
}
</style>