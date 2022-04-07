<template>
  <div class="home">
    <h2>{{  appTitle }}</h2>
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
      <input type="text" v-model="counterData.title">
    </div>
  </div>
</template>

<script setup>
import {reactive, computed} from "vue";

const appTitle = 'My Counter App'

const counterData = reactive({
  count: 0,
  title: 'My Counter'
});

const oddOrEven = computed(() => {
  return counterData.count % 2 === 0 ? 'even' : 'odd';
});

const increaseCounter = (amount, e) => {
  counterData.count += amount
}

const decreaseCounter = (amount) => {
  counterData.count -= amount
}
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