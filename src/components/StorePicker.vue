<template>
  <div class="column companies is-half " :class="{'is-hidden': !isHidden}" >
    <div class="select-title">
      <div class="icon warehouses"></div>
      <h4>Almacenes</h4>
    </div>
    <BranchesListItem v-for="branch in filterBranch" v-if="branch.type ==='Almacén'" :key="branch.id" :branch="branch"/>
    <hr />
    <div class="select-title">
      <div class="icon offices"></div>
      <h4>Oficinas</h4>
    </div>
    <BranchesListItem v-for="branch in filterBranch" v-if="branch.type ==='Oficinas'" :key="branch.id" :branch="branch"/>
    <hr />
    <div class="select-title">
      <div class="icon stores"></div>
      <h4>Tiendas</h4>
    </div>
    <BranchesListItem v-for="branch in filterBranch" v-if="branch.type ==='Tiendas'" :key="branch.id" :branch="branch"/>
  </div>
</template>
<script>
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
