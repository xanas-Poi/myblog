<template>
  <div id="home">
    <adminHerder />
    <adminNav />
    <breadCrumb />
    <router-view />
  </div>
</template>

<script>
import adminNav from "../components/adminNav";
import adminHerder from "../components/adminHeader";
import breadCrumb from "../components/breadCrumb";

export default {
  components: {
    adminNav,
    adminHerder,
    breadCrumb,
  }
};
</script>
