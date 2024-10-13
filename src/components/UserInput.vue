<script lang="ts" setup>
import AnotherCustomInput from "@/components/AnotherCustomInput.vue";
import {inject} from "vue";
import type {UserModel} from "@/models/UserModel";
import type {UserListModel} from "@/models/UserListModel";

const currentUser: UserModel = inject("currentUser")
const userList: UserListModel = inject("userList")

</script>

<template>
  <div>
    <AnotherCustomInput v-model:attribute="currentUser.name" type="text">Name</AnotherCustomInput>
    <AnotherCustomInput v-model:attribute="currentUser.email" type="text">Email</AnotherCustomInput>
    <AnotherCustomInput v-model:attribute="currentUser.phoneNumber as number" type="number">Phone number
    </AnotherCustomInput>
    <AnotherCustomInput v-model:attribute="currentUser.age as number" type="number">Age</AnotherCustomInput>
    <p>{{ currentUser }}</p>
    <button @click="() => {userList.addUser(currentUser); console.log('added user: ', currentUser.toString())}">Add
      user
    </button>
  </div>
</template>

<style scoped>
div {
  display: inline-flex;
  flex-direction: column;
  gap: 1rem;
}
</style>