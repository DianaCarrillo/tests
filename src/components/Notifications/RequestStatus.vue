<template>
<div>
    <div>
     <p class="bad"><i :class="notification.message.status.icon"></i>{{notification.message.status.statusMessage}} por <strong>{{notification.message.status.name}}</strong></p><a href="#">Ver detalle</a>            
    </div>
</div>
</template>

<script>
export default {
    name: "RequestStatus",
    props: {
      notification:{
          type: Object,
          required: true
      } 
    }
}
</script>

