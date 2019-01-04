<template>
  <div id="app">
    <SomeComponent msg="Welcome to Your Vue.js App"/>
    <SearchInput/>
    <BranchPicker/>
    <Historical/>
    <Notifications/>
  </div>
</template>

<script>
import BranchPicker from "./components/BranchPicker.vue";
import Historical from "./components/Historical/Historical.vue";
import Notifications from "./components/Notifications/Notifications.vue";
export default {
  name: "app",
  components: {
    Historical,
    Notifications,
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
