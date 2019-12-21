<template>
  <div>
    <h1 style="margin:300px 0 0 500px;">{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: "index",
  data() {
    return {
      msg: "Welcome to Your Backstage"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  font-weight: 800;
}
</style>
