<template>
  <div class="column" style="border: 2px solid red;">
    <div class="select-title">
      <div class="icon companies"></div>
      <h4>Empresas</h4>
    </div>
    <CompanyListItem
      v-for="company in companies"
      :company="company"
      :handle-company-select="handleCompanySelect"
      :key="company.taxId"
    />
  </div>
</template>
<script>
import CompanyListItem from "./CompanyListItem";

export default {
  name: "CompanyList",
  props: {
    companies: {
      type: Array,
      required: true
    },
    handleCompanySelect: {
      type: Function,
      required: true
    }
  },
  components: {
    CompanyListItem
  }
};
</script>
