<template>
  <section class="sidebar">
    <search-bar></search-bar>
    <contact-list :contacts="filteredContacts"></contact-list>
  </section>
</template>

<script>
import ContactList from "./ContactList.vue"
import SearchBar from "./SearchBar.vue"
import { bus } from "../utils"

export default {
  name: "sidebar",
  components: {
    ContactList,
    SearchBar
  },
  props: {
    contacts: Array
  },
  data (){
    return {
      filterByTerm: ""
    }
  },
  created (){
    bus.$on("filter-by-term", term => this.filterByTerm = term)
  },
  computed: {
    filteredTermLowerCase () {
      return this.filterByTerm.toLowerCase()
    },
    filteredContacts () {
      let contacts = []

      this.contacts.filter((contact) => {
        name = contact.name.display.toLowerCase()

        if (name.includes(this.filteredTermLowerCase)) {
          contacts.push(contact)
        }
      })

      return contacts
    }
  }
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
