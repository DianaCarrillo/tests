<template>
<div>
  <div v-for="info in historicalInfo " :key="info.id" >
     <historical-day
      :info="info"/>
  </div>
  

</div>
</template>

<script>
import HistoricalDay from "../Historical/HistoricalDay.vue"
export default {
    name: "HistoricalA",
    components: {
      HistoricalDay: HistoricalDay
    },
    props: {
      historicalInfo: Array
    }
}
</script>