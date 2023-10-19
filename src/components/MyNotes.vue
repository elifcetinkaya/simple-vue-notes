<script setup>
import { onMounted, ref } from "vue";

const notes = ref([]);

onMounted(() => {
  notes.value = JSON.parse(localStorage.getItem("notes")) || [];
});
</script>

<template>
  <main class="container">
    <div v-if="notes.length === 0">
      i am sorry you didn't write any notes :(
    </div>
    <ul v-else>
      <li v-for="note in notes">
        <a href="#" contenteditable>
          <h2>#{{ note.title }}</h2>
          <p>{{ note.content }}</p>
        </a>
      </li>
    </ul>
  </main>
  <a href="/" class="back"> Write note </a>
</template>

<style scoped>
.container,
.back {
  font-family: "Dosis", sans-serif !important;
}
h2 {
  font-weight: bold;
  font-size: 2rem;
}
p {
  font-family: "Dosis", sans-serif !important;
  font-size: 1rem;
}
ul,
li {
  list-style: none;
}
ul {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
}
ul li a {
  text-decoration: none;
  color: #000;
  background: #ffc;
  display: block;
  height: fit-content;
  width: 20em;
  padding: 1em;
  box-shadow: 5px 5px 7px rgba(33, 33, 33, 0.7);
  transform: rotate(-6deg);
  transition: transform 0.15s linear;
}

ul li:nth-child(2n) a {
  transform: rotate(4deg);
  position: relative;
  top: 5px;
  background: #cfc;
}
ul li:nth-child(3n) a {
  transform: rotate(-3deg);
  position: relative;
  top: -5px;
  background: #ccf;
}
ul li:nth-child(5n) a {
  transform: rotate(5deg);
  position: relative;
  top: -10px;
}

ul li a:hover,
ul li a:focus {
  box-shadow: 10px 10px 7px rgba(0, 0, 0, 0.7);
  transform: scale(1.25);
  position: relative;
  z-index: 5;
}

ul li {
  margin: 1em;
}
</style>
