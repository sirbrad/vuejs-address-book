<template>
  <div>
    <div v-if="user">
      <h1>{{user.name.display}}</h1>
      <dl>
        <dt>Position:</dt>
        <dd>{{user.latestPosition}}</dd>
        <dt>Shirt number:</dt>
        <dd>{{user.info.shirtNum}}</dd>
        <dt>Birth:</dt>
        <dd>
          {{user.birth.date.label}} in {{user.birth.country.country}}
        </dd>
        <dt>Age:</dt>
        <dd>{{user.age}}</dd>
        <dt>Dimensions:<dt>
        <dd>{{user.height}}cm and {{user.weight}}kg</dd>
      </dl>
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
    this.setCurrentUser();
  },
  computed: {
  },
  watch: {
    "contacts": "setCurrentUser"
  },
  methods: {
    setCurrentUser () {
      if (!this.contacts)
        return false;

      this.contacts.map((entry)=> {
        if (entry.id === parseInt(this.$route.params.id)) {
          this.user = entry;
        }
      })
    }
  },
  components: {}
}
</script>

<style>
</style>
