<template>
  <div class="modals">
    <h1>Modals</h1>
    <div>
      <label for="">
        Show dark modals?
      </label>
      <input
          type="checkbox"
          v-model="showDarkModals"
      />
    </div>
    <button @click="showModal = true;">Show modal</button>
    <component
        :is="showDarkModals ? ModalDark : Modal"
        v-model="showModal"
        v-if="showModal"
        subTitle="My Subtitle"
        @hideModal="showModal = false"
    >
    <template #title>
        <h1>My new title</h1>
      </template>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab
        consectetur doloribus eaque fugit illum ipsa iure laborum magnam optio
        possimus qui ratione, recusandae rerum similique soluta suscipit
        tempora velit voluptatibus.</p>

    </component>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Modal from "@/components/Modal.vue";
import ModalDark from "@/components/ModalDark.vue";

const showModal = ref(false);
const showDarkModals = ref(false);

</script>
