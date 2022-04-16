<template>
  <div class="modals">
    <h1>Modals</h1>
    <button @click="showModal = true;">Show modal</button>
    <teleport to="#modals-container">
      <div
          v-if="showModal"
          class="modal"
      >
        <h1>This is a modal</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab
          consectetur doloribus eaque fugit illum ipsa iure laborum magnam optio
          possimus qui ratione, recusandae rerum similique soluta suscipit
          tempora velit voluptatibus.</p>
        <button @click="showModal = false">Hide modal</button>
      </div>
    </teleport>
  </div>
</template>

<script setup>
  import { ref } from "vue";

  const showModal = ref(false);

</script>

<style>
.modal {
  background: #ccc;
  padding: 10px;
  color: black;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>