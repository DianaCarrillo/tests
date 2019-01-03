<template>
 <div>
     <div v-for="activity in info.activities" :key="activity.id">
       <historical-activity 
       :activity="activity" />
     </div>
 </div>
</template>

<script>
import HistoricalActivity from "../Historical/HistoricalActivity.vue"
export default {
  name: "HistoricalDay",
  components:{
    HistoricalActivity: HistoricalActivity
  },
  props: {
      info:{ 
       type: Object,
       required: true
       }
    }
}
</script>