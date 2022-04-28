<template>
  <div class="home">
    <h2 ref="appTitleRef">{{ appTitle }}</h2>
    <h3>{{ counterData.title }}</h3>
    <div>
      <button @click="decreaseCounter(2)" class="btn">--</button>
      <button @click="decreaseCounter(1)" class="btn">-</button>
      <span class="counter">{{ counterData.count }}</span>
      <button @click="increaseCounter(1, $event)" class="btn">+</button>
      <button @click="increaseCounter(2)" class="btn">++</button>
    </div>
    <p>This counter is {{ oddOrEven }}</p>
    <div class="edit">
      <h4>Edit counter title:</h4>
      <input type="text" v-model="counterData.title" v-autofocus>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useCounter } from "../use/useCounter";
import { vAutofocus } from "@/directives/vAutofocus";

// Import composable
const {
  counterData,
  oddOrEven,
  increaseCounter,
  decreaseCounter
} = useCounter();

// App title
const appTitle = 'My Counter App';

// Creating a data ref with the same name as the template ref will make that ref
// available in the current scope.
const appTitleRef = ref(null)

onMounted(() => {
  console.log(`The app title is ${appTitleRef.value.offsetWidth} pixels wide`);
})

onMounted(() => {
  console.log('Do stuff related to counter')
})

</script>
<style>
  .home {
    padding: 20px;
    text-align: center;
  }
  .home .btn {
    margin: 0 10px;
    font-size: 30px;
  }
  .home .counter {
    font-size: 30px;
  }
  .edit {
    margin-top: 60px;
  }
</style>