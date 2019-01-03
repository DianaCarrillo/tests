<template>
 <div>
  <aside class="menu">
    <Logo></Logo>
    <Menu></Menu>
    <Footer></Footer>
  </aside>
  </div>
</template>

<script>
import Logo from "./Logo.vue";
import Menu from "./Menu.vue";
import Footer from "./Footer";

export default {
  name: "SideBar",
  components: {
    Logo: Logo,
    Menu: Menu,
    Footer: Footer
  }
};
</script>
