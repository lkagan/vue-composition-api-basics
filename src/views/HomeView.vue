<template>
  <div class="home">
    <h2 ref="appTitleRef">{{ appTitle }}</h2>
    <h3>{{ counter.title}}</h3>
    <div>
      <button class="btn" @click="counter.decreaseCounter(10)">--</button>
      <button class="btn" @click="counter.decreaseCounter(1)">-</button>
      <span class="counter">{{ counter.count }}</span>
      <button class="btn" @click="counter.increaseCounter(1)">+</button>
      <button class="btn" @click="counter.increaseCounter(10)">++</button>
    </div>
    <p>This counter is {{ counter.oddOrEven }}</p>
    <div class="edit">
      <h4>Edit counter title:</h4>
      <input type="text" v-autofocus v-model="counter.title">
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { vAutofocus } from "@/directives/vAutofocus";
import { useCounterStore } from "@/stores/counter";

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

const counter = useCounterStore();

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