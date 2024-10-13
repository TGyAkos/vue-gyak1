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
  <main :class="{'bg-white text-black': lightMode}">
    <div class="buttons">
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
.buttons {
  display: inline-flex;
  flex-direction: column;
  justify-content: left;
  align-items: flex-start;
}
</style>