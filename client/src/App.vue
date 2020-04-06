<template>
  <div id="app">
    <router-view />
    <Canvas />>
  </div>
</template>

<script>
import Canvas from "@/assets/js/canvas-nest.min.js";
export default {
  name: "App",
  components: {
    Canvas
  }
};
</script>

<style>
canvas {
  background: rgb(226, 225, 225);
  opacity: 0.5;
}
</style>
