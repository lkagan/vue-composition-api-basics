<template>
  <teleport to="#modals-container">
    <div class="modal">
      <h2><slot name="title" /></h2>
      <h3>{{ subTitle }}</h3>
      <slot />
      <button @click="$emit('hideModal')">Hide modal (expose custom event)</button>
      <button @click="handleButtonClick">Hide modal (expose custom event through local handler)</button>
      <div>
        Programmatically accessing a slot in the template: {{ $slots.title()[0].children }}
      </div>
    </div>
  </teleport>
</template>

<script setup>
import { useSlots } from "vue";

const slots = useSlots();

const props = defineProps({
  subTitle: {
    type: String,
    default: "No title provided"
  }
});

console.log(slots.title()[0].children);
console.log(props.subTitle);

const emit = defineEmits(['hideModal']);

const handleButtonClick = () => {
  emit('hideModal');
}
</script>

<style>
.modal {
  background: #ccc;
  padding: 10px;
  color: black;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}
</style>
