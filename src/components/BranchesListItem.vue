 <template>
  <div class="item">
    <button class="select-item">
      <div class="info">
        <p>
          aqui va el item
          <span>clave</span>
        </p>
      </div>
    </button>
  </div>
</template>
<script>
export default {
  name: "BranchesListItem",
  props: {
    companiesFromServer: {
      type: Array,
      required: true
    }
  }
};
</script>
