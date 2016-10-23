<template>
  <div>
    <div v-if="user">
      {{user.name.display}}
    </div>
  </div>
</template>

<script>
export default {
  name: "user-view",
  props: {
    contacts: Array
  },
  data () {
    return {
      user: null
    }
  },
  created () {
    this.setCurrentUser()
  },
  computed: {
  },
  watch: {
    "contacts": "setCurrentUser"
  },
  methods: {
    setCurrentUser () {
      if (!this.contacts)
        return false

      this.contacts.map((entry)=> {
        if (entry.id === parseInt(this.$route.params.id)) {
          this.user = entry
        }
      })
    }
  },
  components: {}
}
</script>

<style>
</style>
