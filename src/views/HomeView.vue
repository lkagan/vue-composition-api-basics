<template>
  <div class="home">
    <h3>{{ counterTitle }}</h3>
    <div>
      <button @click="decreaseCounter" class="btn">-</button>
      <span class="counter">{{ counter }}</span>
      <button @click="increaseCounter" class="btn">+</button>
    </div>
    <div class="edit">
      <h4>Edit counter title:</h4>
      <input type="text" v-model="counterTitle">
    </div>
  </div>
</template>

<script setup>
import {ref} from "vue";

const counter = ref(0);
const counterTitle = ref('My Counter');

const increaseCounter = () => {
  counter.value++
}

const decreaseCounter = () => {
  counter.value--
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