<template>
  <div id="app">
    <!-- <SomeComponent msg="Welcome to Your Vue.js App"/> -->
    <SelectBranch/>
    <BranchPicker/>
  </div>
</template>

<script>
import SelectBranch from "./components/Diana/SelectBranch.vue";
import BranchPicker from "./components/Joan/BranchPicker.vue";

export default {
  name: "app",
  components: {
    SelectBranch,
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
