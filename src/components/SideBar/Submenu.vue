<template>
<div>
    <ul >
      <div >
       <li v-for="o in option" :key="o.id"><a href="#">
       <i 
       :class="`${o.icon}`">
       </i>
      <span ></span></a></li>
      </div>
    </ul>
</div>

</template>

<script>
export default {
  props: {
     option: Object,
      submenu: {
      type: Array,
      required: true
    } 
  },
  name: "Submenu"
};
</script>