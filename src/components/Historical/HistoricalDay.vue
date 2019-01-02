<template>
 <div>
     <div v-for="activity in info.activities" :key="activity.id">
       <Eachactivity 
       :activity="activity" />
     </div>
 </div>
</template>

<script>
import Eachactivity from "../Historical/EachActivity.vue"
export default {
  name: "HistoricalDay",
  components:{
    Eachactivity: Eachactivity
  },
  props: {
      info: Object,
    }
}
</script>