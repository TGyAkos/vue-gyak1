<script lang="ts" setup>
import {RouterLink, RouterView} from 'vue-router'
</script>

<template>
  <nav>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/about">About</RouterLink>
    <RouterLink to="/test">test</RouterLink>
    <RouterLink to="/cart">cart</RouterLink>
    <RouterLink to="/counter">counter</RouterLink>
    <RouterLink to="/userList">user</RouterLink>
  </nav>

  <RouterView/>
</template>

<style scoped>

</style>
