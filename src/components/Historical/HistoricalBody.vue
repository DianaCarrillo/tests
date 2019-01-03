<template>
 <div>
  <div class="day-activities"  v-for="info in historicalInfo " :key="info.id" >
   <ul>
     <li class="day">
      <p>{{info.date}}</p>
    </li>
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
      historicalInfo: {
        type: Array,
        required:true   
    }
}
}
</script>