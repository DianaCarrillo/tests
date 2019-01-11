<template>
  <div class="select-branch" style="border: 2px solid purple;">
    <div class="outer-20-b">
      <a href="#">&lt; Regresar</a>
    </div>
    <div class="columns">
      <CompanyList :companies="companies" :handle-company-select="handleCompanySelect"/>
      <StorePicker/>
      <StoreLocation/>
    </div>
  </div>
</template>
<script>
import CompanyList from "./CompanyList.vue";
import StorePicker from "./StorePicker.vue";
import StoreLocation from "./StoreLocation.vue";
export default {
  name: "SomeComponent",
  data() {
    return {
      companiesFromServer: [
        {
          name: "Alpha",
          taxId: "1234567890"
        },
        {
          name: "Beta",
          taxId: "sdfghjkiuh"
        },
        {
          name: "Gamma",
          taxId: "jhsadf98ad"
        }
      ],
      activeCompanyTaxId: "1234567890"
    };
  },
  computed: {
    activeCompany() {
      return this.companiesFromServer[0];
    },
    companies() {
      return this.companiesFromServer.map(company => {
        return {
          ...company,
          ...{ active: company.taxId === this.activeCompanyTaxId }
        };
      });
    }
  },
  methods: {
    handleCompanySelect(taxId) {
      this.activeCompanyTaxId = taxId;
    }
  },
  components: {
    CompanyList,
    StorePicker,
    StoreLocation
  }
};
</script>
