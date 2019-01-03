<template>
  <div id="app">
    <SomeComponent msg="Welcome to Your Vue.js App"/>
    <SearchInput/>
    <!-- <SideBar/> -->
    <Historical/>
    <Notifications/>
  </div>
</template>

<script>
// import SomeComponent from "./components/SideBar/SomeComponent.vue";
// import SearchInput from "./components/SideBar/SearchInput.vue";
// import SideBar from "./components/SideBar/SideBar.vue";
import Historical from "./components/Historical/Historical.vue";
import Notifications from "./components/Notifications/Notifications.vue";
export default {
  name: "app",
  components: {
    // SomeComponent,
    // SearchInput,
    // SideBar, 
    Historical,
    Notifications
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
