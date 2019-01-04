<template>
  <div class="item" @click="handleCompanySelect(company.taxId)">
    <button class="select-item" :class="{ active: company.active }">
      <div class="info">
        <p>
          {{ company.name }} <span class="on"></span>
          <span>{{ company.taxId }}</span>
        </p>
      </div>
    </button>
  </div>
</template>
<script>
export default {
  props: {
    company: {
      type: Object,
      required: true
    },
    handleCompanySelect: {
      type: Function,
      required: true
    }
  },
  name: "CompanyListItem"
};
</script>
