<template>
  <li>
    <router-link :to="/user/+contact.id">
      {{contact.name.display}}
    </router-link>
  </li>
</template>

<script>
export default {
  name: "contact-list-item",
  props: {
    contact: Object
  },
  data () {
    return {}
  },
  computed: {},
  mounted () {},
  methods: {},
  components: {}
}
</script>

<style>
</style>
