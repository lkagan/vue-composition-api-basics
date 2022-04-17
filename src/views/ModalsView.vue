<template>
  <div class="modals">
    <h1>Modals</h1>
    <button @click="showModal = true;">Show modal</button>
    <Modal v-if="showModal">
      <template #title>
        <h1>My new title</h1>
      </template>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab
        consectetur doloribus eaque fugit illum ipsa iure laborum magnam optio
        possimus qui ratione, recusandae rerum similique soluta suscipit
        tempora velit voluptatibus.</p>

    </Modal>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Modal from "@/components/Modal.vue";

const showModal = ref(false);

</script>
