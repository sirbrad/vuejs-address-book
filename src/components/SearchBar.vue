<template>
  <div class="search">
    <input type="search" v-model="searchTerm" />
  </div>
</template>

<script>
import { bus } from "../utils"

export default {
  name: "search-bar",
  data () {
    return {
      searchTerm: ""
    }
  },
  watch: {
    "searchTerm": "searchUpdated"
  },
  computed: {},
  mounted () {},
  methods: {
    searchUpdated() {
      bus.$emit('filter-by', this.searchTerm)
    }
  },
  components: {}
}
</script>

<style scoped>
  .search {
    padding: 1em;
  }
  input {
    border: 1px solid #eee;
    border-radius: 8px;
    padding: 5px 1rem;
    width: 100%;
  }
</style>
