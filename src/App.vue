<template>
  <div id="app">
    <!-- <SomeComponent msg="Welcome to Your Vue.js App"/> -->
    <BranchPicker/>
  </div>
</template>

<script>
import BranchPicker from "./components/BranchPicker.vue";
export default {
  name: "app",
  components: {
    BranchPicker
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
