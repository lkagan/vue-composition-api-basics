<template>
  <div class="home">
    <h3>{{ counterData.title }}</h3>
    <div>
      <button @click="decreaseCounter" class="btn">-</button>
      <span class="counter">{{ counterData.count }}</span>
      <button @click="increaseCounter" class="btn">+</button>
    </div>
    <div class="edit">
      <h4>Edit counter title:</h4>
      <input type="text" v-model="counterData.title">
    </div>
  </div>
</template>

<script setup>
import {reactive} from "vue";

const counterData = reactive({
  count: 0,
  title: 'My Counter'
});

const increaseCounter = () => {
  counterData.count++
}

const decreaseCounter = () => {
  counterData.count--
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