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
}
.contact-list__heading > h2 {
  margin: 0;
  padding: 2px 10px;
  font-size: 14px;
}
</style>
