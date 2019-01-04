<template>
 <div>
  <div v-for="notification in notifications" 
  :key="notification.id">
    <Notification :notification="notification"/>
   </div>
 </div>
</template>

<script>

import Notification from "../Notifications/Notification.vue";

export default {
    name: "BodyNotification",
    components: {
      Notification: Notification
    },
    props: {
      notifications: {
        type: Array,
        required: true
      } 
    }
}
</script>
