<template>
  <div id="app">
    <!-- <SomeComponent msg="Welcome to Your Vue.js App"/> -->
    <SelectBranch/>
  </div>
</template>

<script>
import SelectBranch from "./components/SelectBranch.vue";
export default {
  name: "app",
  components: {
    SelectBranch
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  margin-top: 60px;
  padding: 0 100px;
}
</style>
