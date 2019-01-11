<template>
  <div class="column companies is-half" :class="{'is-hidden': isHidden}">
    <div class="select-title">
      <div class="icon warehouses"></div>
      <h4>Almacenes</h4>
    </div>
    <BranchesListItem v-for="branch in filterWarehouse" s :key="branch.id" :branch="branch"/>
    <hr>
    <div class="select-title">
      <div class="icon offices"></div>
      <h4>Oficinas</h4>
    </div>
    <BranchesListItem v-for="branch in filterOffices" :key="branch.id" :branch="branch"/>
    <hr>
    <div class="select-title">
      <div class="icon stores"></div>
      <h4>Tiendas</h4>
    </div>
    <BranchesListItem v-for="branch in filterStores" :key="branch.id" :branch="branch"/>
  </div>
</template>
<script>
import BranchesListItem from "./BranchesListItem.vue";

export default {
  name: "BranchList",
  components: {
    BranchesListItem
  },
  props: {
    companiesFromServer: {
      type: Array,
      required: true
    },
    isHidden: {
      type: Boolean,
      required: true
    }
  },
  computed: {
    filterWarehouse: function() {
      return this.companiesFromServer[0].branches.filter(function(branch) {
        return branch.type === "Almacén";
      });
    },
    filterOffices: function() {
      return this.companiesFromServer[0].branches.filter(function(branch) {
        return branch.type === "Oficinas";
      });
    },
    filterStores: function() {
      return this.companiesFromServer[0].branches.filter(function(branch) {
        return branch.type === "Tiendas";
      });
    }
  }
};
</script>
