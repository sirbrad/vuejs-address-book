<template>
  <li>
    <router-link :to="/user/+contact.id" class="contact-list__item">
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
.contact-list__item {
  padding: 10px;
  display: block;
  text-decoration: none;
}
.contact-list__item:hover,
.contact-list__item:focus {
  background: black;
}
</style>
