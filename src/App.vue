<template>
  <div id="app">
    <header role="banner">
      Header
    </header>
    <main>
      <router-view :contacts="contacts"></router-view>
    </main>
  </div>
</template>

<script>
  export default {
    name: "main",
    data (){
      return {
        contacts: []
      }
    },
    beforeMount (){
      this.fetchPlayers()
    },
    methods: {
      fetchPlayers () {
        this.$http.get("/players.json").then((response) => {
          this.contacts = response.body.players
        }, (response) => {
          // TODO: Add helpful message
        })
      }
    }
  }
</script>

<style>
  body {
    font-family: Helvetica, sans-serif;
    margin: 0;
  }
  header {
    background: whitesmoke;
    position: fixed;
    width: 100%;
    top: 0;
    padding: 1em;
  }
  main {
    margin-top: 50px;
    padding: 1em;
  }
</style>
