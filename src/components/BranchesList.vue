<template>
  <!-- <div class="column branches is-half is-hidden"> -->
  <div class="column" style="border: 2px solid blue;">
    <div class="select-title">
      <div class="icon warehouses"></div>
      <h4>Almacenes</h4>
      <BranchesListItem :companiesFromServer="companiesFromServer"/>
    </div>
    <div class="select-title">
      <div class="icon warehouses"></div>
      <h4>Oficinas</h4>
      <BranchesListItem :companiesFromServer="companiesFromServer"/>
    </div>
    <div class="select-title">
      <div class="icon warehouses"></div>
      <h4>Tiendas</h4>
      <BranchesListItem :companiesFromServer="companiesFromServer"/>
    </div>
    <!-- </div> -->
  </div>
</template>
<script>
import BranchesListItem from "./BranchesListItem.vue";
export default {
  name: "BranchesList",
  components: {
    BranchesListItem
  },
  props: {
    companiesFromServer: {
      type: Array,
      required: true
    }
  }
};
</script>
