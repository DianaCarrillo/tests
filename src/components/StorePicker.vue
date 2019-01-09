<template>
  <div class="column" style="border: 2px solid blue;">
    <div class="select-title">
      <div class="icon warehouses"></div>
      <h4>Almacenes</h4>
    </div>
    <BranchesListItem for :companiesFromServer="companiesFromServer"/>
    <div class="select-title">
      <div class="icon warehouses"></div>
      <h4>Oficinas</h4>
    </div>
    <BranchesListItem :companiesFromServer="companiesFromServer"/>
    <div class="select-title">
      <div class="icon warehouses"></div>
      <h4>Tiendas</h4>
    </div>
    <BranchesListItem :companiesFromServer="companiesFromServer"/>
  </div>
</template>
<script>
// import BranchesListItem from "./BranchesListItem.vue";
import BranchesListItem from "./BranchesListItem.vue";

export default {
  name: "StorePicker",
  components: {
    BranchesListItem
  },
  props: {
    companiesFromServer: {
      type: Array,
      required: true
    }
  },
  computed: {
    filterBranch: function() {
      return this.companiesFromServer[0].branches;
    }
  }
};
</script>
