<template>
  <ul>
    <li v-for="o in option" :key="o.id">
      <a href="#">
        <i :class="`${o.icon}`"></i>
        <span></span>
      </a>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    option: {
      type: Object,
      required: true
    },
    submenu: {
      type: Array,
      required: true
    }
  },
  name: "Submenu"
};
</script>
