<script lang="ts" setup>
defineProps<{
  msg: string
}>()
</script>

<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
    <h3>
      You’ve successfully created a project with
      <a href="https://vite.dev/" rel="noopener" target="_blank">Vite</a> +
      <a href="https://vuejs.org/" rel="noopener" target="_blank">Vue 3</a>. What's next?
    </h3>
  </div>
</template>

<style scoped>

</style>
