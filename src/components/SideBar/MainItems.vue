<template>
 <div>
   <ul>
   <li v-for="option in options" 
    :key="option.id" >
    <EachMainItem 
    :key="option.id" 
    :option="option"
    :showAndActive="showAndActive">
    </EachMainItem>
    </li>
   </ul>
 </div>
</template>

<script>
import EachMainItem from "./EachMainItem.vue";
export default {
  components: {
     EachMainItem: EachMainItem
  },
  props: {
    options: Array,
    active: {
      type: Boolean,
      required: true
    },
     showAndActive: {
      type: Function,
      required: true
    },
    submenu: {
      type: Array,
      required: true
    }
  },
  name: "MainItems"
};
</script>

<style>
li {
  text-align: left;
}
</style>
