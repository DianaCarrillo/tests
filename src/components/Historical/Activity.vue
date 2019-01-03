<template>
<div> 
    <li class="activity li-activity"  >
      <p class="time">{{activity.time}}</p><a class="tag time-tag sell-tag">{{activity.type}}</a><span>10 unidades</span><span><a href="#">Sucursal Puebla</a></span>   
    </li>
</div>
</template>

<script>
export default {
    name: "Activity",
    props: {
        activity: Object
    }
}
</script>

<style>
.time {
     left: -55px !important;
 }
</style>
