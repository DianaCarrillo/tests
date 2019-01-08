<template>
  <div class="item" disabled @click="handleCompanySelect(company.taxId)">
    <button class="select-item">
      <div class="info">
        <p>
          {{ company.name }}
          <span :class="{ 'on' :company.active}"></span>
          <i :class="{'fas fa-lock':!company.active}"></i>
          <span>RFC: {{ company.taxId }}</span>
        </p>
      </div>
    </button>
  </div>
</template>
<script>
export default {
  name: "CompanyListItem",
  props: {
    company: {
      type: Object,
      required: true
    },
    handleCompanySelect: {
      type: Function,
      required: true
    }
  }
};
</script>
