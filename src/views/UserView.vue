<script lang="ts" setup>

import {provide, type Ref, ref} from "vue";
import {UserListModel} from "@/models/UserListModel";
import {UserModel} from "@/models/UserModel";
import UserInput from "@/components/UserInput.vue";
import UserList from "@/components/UserList.vue";

const userList: Ref<UserListModel> = ref(new UserListModel());
const currentUser: Ref<UserModel> = ref(new UserModel());

provide('userList', userList)
provide('currentUser', currentUser)

</script>

<template>
  <main class="inline-flex flex-col gap-4 mt-4">
    <UserInput/>
    <UserList/>
  </main>
</template>

<style scoped>

</style>