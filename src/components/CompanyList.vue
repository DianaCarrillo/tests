<template>
  <div class="column companies is-half">
    <div class="select-title">
      <div class="icon companies"></div>
      <h4>Empresas</h4>
    </div>
    <CompanyListItem
      v-for="company in companiesFromServer"
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
    handleCompanySelect: {
      type: Function,
      required: true
    },
    companiesFromServer: {
      type: Array,
      required: true
    }
  },
  components: {
    CompanyListItem
  }
};
</script>
