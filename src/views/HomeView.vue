<template>
  <div class="home">
    <div>
      <button @click="decreaseCounter" class="btn">-</button>
      <span class="counter">{{ counter }}</span>
      <button @click="increaseCounter" class="btn">+</button>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      counter: 0
    }
  },

  methods: {
    increaseCounter () {
      this.counter++
    },

    decreaseCounter () {
      this.counter--
    }
  }
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
</style>