<template>
 <div>
   <li class="day">
      <p>{{info.date}}</p>
    </li>
    <div v-for="activity in info.activities" :key="activity.id">
       <activity 
       :activity="activity" />
     </div>
 </div>
</template>

<script>
import Activity from "../Historical/Activity.vue"
export default {
  name: "HistoricalDay",
  components:{
    Activity: Activity
  },
  props: {
      info: Object,
    }
}
</script>