<template>
  <section class="sidebar">
    <search-bar></search-bar>
    <contact-list :contacts="contacts"></contact-list>
  </section>
</template>

<script>
import ContactList from "./ContactList.vue"
import SearchBar from "./SearchBar.vue"

export default {
  name: "sidebar",
  components: {
    ContactList,
    SearchBar
  },
  props: {
    contacts: Array
  },
  computed: {},
  mounted () {},
  methods: {}
}
</script>

<style>
  .sidebar {
    flex: 1;
    border-right: 1px solid #eee;
    flex: 0 0 12em;
    position: fixed;
    left: 0;
    top: 0;
    width: 20%;
    height: 100%;
    overflow: scroll;
    z-index: 1;
  }
</style>
