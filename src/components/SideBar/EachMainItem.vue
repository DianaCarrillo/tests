<template>
  <div>
    <a @click="showAndActive(option)">
  
      <i 
      :class="`${option.icon}`">
      </i>
      <span>{{option.item}}</span>
     </a>
    <Submenu
    :option="option"
    :submenu="submenu">
    </Submenu>
 </div>
</template>
 
<script>
import Submenu from "./Submenu.vue";
export default {
components: {
    Submenu: Submenu
},
 props: {
     option: Object, 
     showAndActive: {
      type: Function,
      required: true
     },
      submenu: {
      type: Array,
      required: true
    }
 },
  name: "EachMenuItem"
};
</script>
