<template :contacts="contacts">
  <div>
    <contact-list :contacts="contacts"></contact-list>
  </div>
</template>

<script>
import ContactList from "../components/ContactList.vue"

export default {
  name: "home",
  components: { ContactList },
  props: {
    contacts: Array
  },
  mounted () {}
}
</script>

<style>
</style>
