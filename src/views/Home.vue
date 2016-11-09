<template>
  <div class="card card--v-align">
    <div class="card-contain">
      <h1>Select a player</h1>
    </div>
  </div>
</template>

<script>

export default {
  name: "home",
  props: {
    contacts: Array
  },
  mounted () {}
}
</script>

<style scoped>
  h1 {
    color: rgba(0, 0, 0, .2);
  }
</style>
