<script setup>
import { ref, watch } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const title = ref("");
const content = ref("");

const notes = ref(JSON.parse(localStorage.getItem("notes")) || []);

const saveNote = () => {
  notes.value.push({
    title: title.value,
    content: content.value,
  });
  title.value = "";
  content.value = "";
  router.push("my-notes");
};

watch(
  notes,
  (newVal) => {
    localStorage.setItem("notes", JSON.stringify(newVal));
  },
  { deep: true }
);
</script>

<template>
  <main class="container">
    <div class="input-group">
      <label class="label" for="myInput">Title </label>
      <input type="text" id="myInput" class="input" v-model="title" />
    </div>

    <div class="input-group">
      <label class="label" for="myInput">Note</label>
      <textarea
        name=""
        id=""
        cols="30"
        rows="10"
        class="input textarea"
        v-model="content"
      ></textarea>
    </div>

    <button class="button" @click="saveNote">Save Note</button>
  </main>
  <a href="/my-notes"> i want to see my notes, now ! ! </a>
</template>

<style scoped>
.container {
  font-family: "Dosis", sans-serif !important;
  font-weight: 500;
  font-size: 24px;
}

a {
  font-family: "Dosis", sans-serif !important;
  font-weight: 500;
}

.button {
  margin-top: 10px;
}

.input-group {
  width: 100%;
  max-width: 20em;
  display: flex;
  flex-direction: column;
  z-index: 2;

  .label {
    margin-bottom: 0.5em;
    text-transform: uppercase;
  }

  .input {
    color: #fff;
    font-size: 16px;
    line-height: 1;
    border-style: none;
    outline: none;
    width: 100%;
    padding: 16px;
    border-radius: 1.8em;
    background-size: 200% 100%;
    font-family: "Dosis", sans-serif !important;
  }
}
</style>
