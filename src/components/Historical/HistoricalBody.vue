<template>
  <div>
    <ul class="day-activities" v-for="info in historicalInfo " :key="info.id">
      <historical-day :info="info"/>
    </ul>
  </div>
</template>

<script>
import HistoricalDay from "../Historical/HistoricalDay.vue";
export default {
  name: "HistoricalBody",
  components: {
    HistoricalDay: HistoricalDay
  },
  props: {
    historicalInfo: {
      type: Array,
      required: true
    }
  }
};
</script>
