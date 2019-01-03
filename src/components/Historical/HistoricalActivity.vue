<template>
<div> 
    <li class="activity" >
      <p class="time">{{activity.time}}</p>
      <a class="tag time-tag sell-tag">{{activity.type}}</a>
      <span>10 unidades</span>
      <span><a href="#">Sucursal Puebla</a></span>   
    </li>
</div>
</template>

<script>
export default {
    name: "HistoricalActivity",
    props: {
        activity: { 
        type: Object,
        required:true
        }
    }
}
</script>

