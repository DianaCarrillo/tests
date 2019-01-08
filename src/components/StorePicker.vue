<template>
  <div class="column" style="border: 2px solid blue;">
    <div class="select-title">
      <div class="icon warehouses"></div>
      <h4>Almacenes</h4>
    </div>
    <BranchesList :companies="companies"/>
    <hr>
    <div class="select-title">
      <div class="icon offices"></div>
      <h4>Oficinas</h4>
    </div>
    <BranchesList :companies="companies"/>
    <hr>
    <div class="select-title">
      <div class="icon stores"></div>
      <h4>Tiendas</h4>
    </div>
    <BranchesList :companies="companies"/>
  </div>
</template>
<script>
import BranchesList from "./BranchesList.vue";
export default {
  name: "StorePicker",
  components: {
    BranchesList
  },
  props: {
    companies: {
      type: Array,
      required: true
    }
  }
};
</script>
