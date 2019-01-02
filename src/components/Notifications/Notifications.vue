<template>
<div class="content-notification">
  <notifications-header/>
  <notifications-body
  :notifications="notifications"/>
</div>
</template>

<script>
import NotificationsHeader from "../Notifications/NotificationsHeader.vue";
import NotificationsBody from "../Notifications/NotificationsBody.vue"
export default {
    name: "Notifications",
    components: {
        NotificationsHeader: NotificationsHeader,
        NotificationsBody: NotificationsBody
    },
    data() {
      return{
       notifications: [
        {
         date: '10 de enero a las 11:35 h',
         icon: 'ci',
         seen: 'notification',
         message:
        {
         subject: 'Se rechazó el cambio de información de 2 productos',
         request: 'solicitado por Abarrotes Mary',
         status:
             {statusMessage:'rechazado', icon:'far fa-times-circle', name: "Pedro"},
             
        },
        
     },
     {
         date: '11 de enero a las 11:35 h',
         icon: 'p',
         seen: 'notification unread',
         message:
        {
         subject: 'Se rechazó el cambio de información de 3 productos',
         request: 'solicitado por Armando',
         status:
             {statusMessage:'Autorizado', icon:'far fa-check-circle', name:'Pedro Pardo'}
        }, 
      }
    ]
   }
  }
}
</script>
