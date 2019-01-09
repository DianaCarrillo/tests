<template>
  <div class="item" @click="handleCompanySelect(company.taxId)">
    <button class="select-item" :disabled="!disabled">
      <div class="info">
        <p>
          {{ company.name }}
          <span :class="{ 'on' :company.active}"></span>
          <i :class="{'fas fa-lock':!company.active}"></i>
          <span>RFC: {{ company.taxId }}</span>
        </p>
      </div>
      <div v-if="!company.active" class="popover_wrapper">
        <a class="fas fa-question-circle"></a>
        <div class="push popover_content up">
          <p class="popover_message">
            No tienes
            <strong>permiso</strong> para modificar esta empresa.
          </p>
          <p class="popover_message">
            <span>Solicítalo</span>
            <a class="requestbranch" href="#">aquí</a>
            <span>.</span>
          </p>
        </div>
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
    },
    disabled: {
      type: Boolean,
      required: true
    }
  },
  mounted() {
    if (this.company.active) {
      this.disabled = !this.disabled;
    }
  }
};
</script>
