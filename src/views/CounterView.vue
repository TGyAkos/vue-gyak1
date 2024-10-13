<script lang="ts" setup>
import Counter from "@/components/Counter.vue";
import {type Ref, ref} from "vue";

const counterCounter: Ref<number> = ref(1);

const lightMode = ref(false)

const switchColor = () => {
  lightMode.value = !lightMode.value
}


</script>

<template>
  <main :class="{'bg-white text-black': lightMode}" class="inline-flex flex-col justify-start items-start">
    <div class="inline-flex flex-col justify-start items-start">
      <button @click="switchColor">Switch color</button>
      <button @click="counterCounter++">Add counter</button>
      <button @click="counterCounter = 0">Remove all</button>
    </div>
    <div v-for="n in counterCounter">
      <Counter/>
    </div>
  </main>
</template>

<style scoped>

</style>