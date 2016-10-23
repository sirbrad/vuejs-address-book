<template>
  <li class="contact-list__heading">
    <h2>{{symbol}}</h2>
  </li>
</template>
<script>
export default {
  name: "contact-list-heading",
  props: {
    symbol: String
  }
}
</script>

<style>
.contact-list__heading {
  background: #eee;
  line-height: 1;
  margin: 0;
}
</style>
