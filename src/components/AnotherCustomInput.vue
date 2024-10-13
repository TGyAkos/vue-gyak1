<script lang="ts" setup>
import {useSlots} from "vue";

defineProps<{
  type: string
}>()

const attribute = defineModel<any>('attribute', {required: true})
const slots = useSlots()

const custom = slots.default()[0].children?.toString() || '';
</script>

<template>
  <input v-model="attribute" :placeholder="custom" :type="type" class="bg-gray-800">
</template>

<style scoped>

</style>