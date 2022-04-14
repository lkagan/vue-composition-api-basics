<template>
  <div class="posts">
    <h1>Posts</h1>
    <ul>
      <li>
        <RouterLink :to="{ name: 'post-detail', params: { id: 'id1'}}">Post 1</RouterLink>
      </li>
      <li>
        <RouterLink :to="{ name: 'post-detail', params: { id: 'id2'}}">Post 2</RouterLink>
      </li>
      <li>
        <RouterLink :to="{ name: 'post-detail', params: { id: 'id3'}}">Post 3</RouterLink>
      </li>
    </ul>
    <textarea v-autofocus
    ></textarea>
  </div>
</template>
<script setup>

/**
 * Imports
 */
import { vAutofocus } from "@/directives/vAutofocus";
</script>

<style scoped>
ul {
  margin-bottom: 30px;
}
</style>