 <template>
  <div class="item">
    <button class="select-item">
      <div class="info">
        <p>
          {{branch.name}}
          <span :class="{'on': branch.active}"></span>
          <i :class="{'fas fa-lock':!branch.active}"></i>         
          <span> RFC: {{branch.key}}</span>
        </p>
        </div>
        <div v-if="!branch.active" class="popover_wrapper">
        <a class="fas fa-question-circle"></a>
        <div class="push popover_content up">
          <p class="popover_message">
            No tienes
            <strong>permiso</strong> para modificar esta empresa.
          </p>
          <p class="popover_message">
            <span>Solicítalo</span>
            <a class="requestbranch" href="#">aquí</a>
            <span>.</span>
          </p>
      </div>
      </div>
    </button>
  </div>
</template>
<script>
export default {
  name: "BranchesListItem",
  props: {
    branch: {
      type: Object,
      required: true
    }
  }
};
</script>
