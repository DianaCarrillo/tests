<template>
<div> 
  <div :class="notification.seen">
   <div class="icon gx-user">
     <p>{{notification.icon}}</p>
   </div>
   <div class="item-content">
     <p><strong>{{notification.message.subject}}</strong></p>
     <p>{{notification.message.request}}</p>
     <accept-reject-btn/>
     <request-status :notification="notification"/>
     <p class="timestamp">{{notification.date}}</p>
   </div>
   </div>
  </div>
</template>

<script>
import AcceptRejectBtn from "../Notifications/AcceptRejectBtn.vue";
import RequestStatus from "../Notifications/RequestStatus.vue";

export default {
    name: "EachNotification",
    components: {
      AcceptRejectBtn: AcceptRejectBtn,
      RequestStatus: RequestStatus
    },
    props: {
      notification: {
        type: Array,
        required: true
      }
    }

}
</script>
