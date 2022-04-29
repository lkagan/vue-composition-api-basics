<template>
  <div class="posts">
    <h1>Posts</h1>
    <ul>
      <li
          v-for="post in posts"
          key="post.id"
      >
        <RouterLink :to="{ name: 'post-detail', params: { id: post.id}}">{{ post.title}}</RouterLink>
      </li>
    </ul>
    <textarea v-autofocus
    ></textarea>
    <div>
      <button
          class="counter-button"
          @click="increaseCounter(1)"
          :class="{ 'yellow' : oddOrEven === 'odd'}"
      >{{ counterData.count }}
      </button>
    </div>
  </div>
</template>
<script setup>

/**
 * Imports
 */
import { vAutofocus } from "@/directives/vAutofocus";
import { ref } from "vue";
import { useCounter } from "@/use/useCounter";

const posts = ref([
  { id: "id1", title: "Post 1" },
  { id: "id2", title: "Post 2" },
  { id: "id3", title: "Post 3" },
]);

const { counterData, increaseCounter, oddOrEven } = useCounter();

</script>

<style scoped>
ul {
  margin-bottom: 30px;
}

.counter-button {
  font-size: 24px;
  width: 200px;
}

.counter-button.yellow {
  background-color: yellow;
}

</style>