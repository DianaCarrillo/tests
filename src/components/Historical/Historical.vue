<template>
<div class="historical in-side">
    <HistoricalTitle/>
    <historical-body 
    :historicalInfo="historicalInfo"/>
    <historical-footer/>
</div>
</template>

 <script>
import HistoricalTitle from "../Historical/HistoricalTitle.vue";
import HistoricalFooter from "../Historical/HistoricalFooter.vue";
import HistoricalBody from "../Historical/HistoricalBody.vue";
export default {
  name: "Historical",
  components: {
    HistoticalTitle: HistoricalTitle,
    HistoricalFooter: HistoricalFooter,
    HistoricalBody: HistoricalBody
  },
  data() {
    return {
      historicalInfo: [
       {
        date: '12/31/2018',
        activities: [
      {
        time: '13:45:00',
        type: 'Venta',
      },
      {
        time: '15:45:00',
        type: 'Compra',
      },
    ]
  },
  {
    date: '12/30/2018',
    activities: [
      {
        time: '13:45:00',
        type: 'Venta',
      },
      {
        time: '15:45:00',
        type: 'Compra',
      },
      {
        time: '17:45:00',
        type: 'Compra',
      },
      {
        time: '19:45:00',
        type: 'Compra',
      },
      ]
     }
   ]
  }
},    
};
</script>