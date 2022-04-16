<template>
  <teleport to="#modals-container">
    <div class="modal">
      <h1>This is a modal</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab
        consectetur doloribus eaque fugit illum ipsa iure laborum magnam optio
        possimus qui ratione, recusandae rerum similique soluta suscipit
        tempora velit voluptatibus.</p>
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
