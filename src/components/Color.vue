<template>
  <div class="color" v-bind:style="{ background: background }">
    <span v-bind:style="{ color: color }">{{ background }}</span>
  </div>
</template>

<script>
export default {
  name: "Color",
  props: {
    background: String,
    color: String,
  },
};
</script>

<style>
.color {
  width: 6em;
  height: 6em;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  font-family: monospace;
  font-size: 2ch;

  border-style: solid;
  border-color: white;
  border-radius: 0.5em;
  border-width: 0.15em;

  transition: 200ms;
}
.color:hover {
  scale: 1.1;
}
</style>
