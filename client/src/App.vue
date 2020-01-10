<template>
  <div>
    <x-Header />
    <router-view />
  </div>
</template>

<script>
import XHeader from "@/components/Header";

export default {
  name: "App",
  components: {
    XHeader
  }
};
</script>

<style>
html,
body {
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
  "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
  background-image: url('./assets/timg.jpg');
  background-size:cover;
  background-size:100%;
  -moz-background-size:100%;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;

}

section,
article,
header,
nav,
ul,
li,
h1,
h2,
h3,
p {
  margin: 0;
  padding: 0;
}

a{
  text-decoration:none;
}
li {
  list-style: none;
}
</style>
