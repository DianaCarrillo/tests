 <template>
  <div class="item">
    <button class="select-item" v-for="company in companies" :key="company.id">
      <div class="info" v-for="branch in company.branches" :key="branch.id">
        <p>
          <!-- {{branch.name}} -->
          <span></span>
        </p>
      </div>
    </button>
  </div>
</template>
<script>
export default {
  name: "BranchesList",
  props: {
    companies: {
      type: Array,
      required: true
    }
  }
};
</script>
