<template>
  <div id="app">
    <header role="banner">
      Header
    </header>
    <main>
      <router-view :contacts.sync="contacts"></router-view>
    </main>
  </div>
</template>

<script>
  let reverseName = (name) => name.split(" ").reverse()

  function orderByLastName (contacts) {
    return contacts.sort((a, b) => {
      let nameA = a.name.display.toUpperCase(); // ignore upper and lowercase
      let nameB = b.name.display.toUpperCase(); // ignore upper and lowercase

      nameA = reverseName(nameA)
      nameB = reverseName(nameB)

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
          this.contacts = orderByLastName(response.body.players)
        }, (response) => {
          // TODO: Add helpful message
          console.log('error')
        })
      }
    }
  }
</script>

<style>
  body {
    font-family: Helvetica, sans-serif;
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
