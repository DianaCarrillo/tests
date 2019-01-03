<template>
  <div>
    <h1>{{ msg }}</h1>
    <a class="button is-report">
      <span class="icon">
        <i class="fas fa-ban"></i>
      </span>
      <span>Cancelado</span>
    </a>
    <a class="button is-report">
      <span class="icon">
        <i class="fas fa-ban"></i>
      </span>
    </a>
  </div>
</template>

<script>
export default {
  name: "SomeComponent",
  props: {
    msg: String
  }
};
// the value inside obj props is Type
</script>
