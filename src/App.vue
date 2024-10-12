<script lang="ts" setup>
import {RouterLink, RouterView} from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <nav>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/about">About</RouterLink>
    <RouterLink to="/test">test</RouterLink>
    <RouterLink to="/cart">cart</RouterLink>
  </nav>

  <RouterView/>
</template>

<style scoped>

</style>
