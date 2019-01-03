<template>
 <div>
  <div class="day-activities"  v-for="info in historicalInfo " :key="info.id" >
   <ul>
    <historical-day
      :info="info"/>  
   </ul>
 </div>
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
      historicalInfo: Array
    }
}
</script>