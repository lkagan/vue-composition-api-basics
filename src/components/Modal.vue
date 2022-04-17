<template>
  <teleport to="#modals-container">
    <div class="modal">
      <h2><slot name="title" /></h2>
      <slot />
      <button >Hide modal</button>
    </div>
  </teleport>
</template>

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
