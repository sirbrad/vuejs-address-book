<template>
  <div id="app">
    <section>
      <section class="sidebar">
        <contact-list :contacts="contacts"></contact-list>
      </section>
      <main class="main">
        <transition name="fade">
          <router-view :key="$route.fullPath" :contacts.sync="contacts"></router-view>
        </transition>
      </main>
    </section>
  </div>
</template>

<script>
  import ContactList from "./components/ContactList.vue"

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
    components: { ContactList },
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
  *,*:before,*:after {
    box-sizing: border-box;
  }
  body {
    font-family: Helvetica, sans-serif;
    margin-left: 25%;
  }
  .sidebar {
    border-right: 1px solid #eee;
    position: fixed;
    left: 0;
    top: 0;
    width: 25%;
    height: 100%;
    overflow: scroll;
    z-index: 1;


    display: flex;
    min-height: 100vh;
    flex-direction: column;
  }
  .main {
    padding: 20px;
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity 1s
  }
  .fade-enter, .fade-leave-active {
    opacity: 0
  }
</style>
