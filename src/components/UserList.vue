<script lang="ts" setup>

import type {UserListModel} from "@/models/UserListModel";
import {computed, inject} from "vue";

const userList: UserListModel = inject("userList")

const alertUser = computed(() => {
  alert("MOST AZONNAL VEGYEN FEL EGY UJ FELHASZNALOT!!!111!!!!11!")
})
</script>

<template>
  <div>
    <div v-if="userList.userModels.length == 0">
      {{ alertUser }}
    </div>
    <ul v-else>
      <li v-for="user in userList.userModels" :key="user.id">
        <div>{{ user.toString() }}</div>
      </li>
    </ul>
  </div>
</template>

<style scoped>
ul {
  display: inline-flex;
  flex-direction: column;
  gap: 1em;
}

li {
  @apply
  p-0.5
  rounded
  bg-gradient-to-r from-green-400 to-blue-400
}

li div {
  @apply
  py-1 px-2
  rounded
  h-fit
  w-fit
  bg-gray-800
}
</style>