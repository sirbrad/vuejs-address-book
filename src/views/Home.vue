<template :contacts="contacts">
  <div>
    <ol style="width:200px; float:left;">
      <li v-for="contact in contactsOrderByLastName">
        {{contact.name.first}} <strong>{{contact.name.last}}</strong>
      </li>
    </ol>
  </div>
</template>

<script>
export default {
  props: {
    contacts: Array
  },
  computed: {
    contactsOrderByLastName (){
      return this.contacts.sort((a, b) => {
        let nameA = a.name.last.toUpperCase(); // ignore upper and lowercase
        let nameB = b.name.last.toUpperCase(); // ignore upper and lowercase
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }

        // names must be equal
        return 0
      })
    }
  },
  mounted () {},
  methods: {},
  components: {}
}
</script>

<style>

</style>
