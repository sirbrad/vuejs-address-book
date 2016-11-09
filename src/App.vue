<template>
  <div id="app">
    <section class="sidebar">
      <contact-list :contacts="contacts"></contact-list>
    </section>
    <main class="main">
      <transition :name="transitionName" mode="out-in">
        <router-view :key="$route.fullPath" :contacts.sync="contacts"></router-view>
      </transition>
    </main>
  </div>
</template>

<script>
  import ContactList from "./components/ContactList.vue"
  import { fetchUser } from "./utils"

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
        contacts: [],
        transitionName: "fade"
      }
    },
    beforeMount (){
      this.fetchPlayers()
    },
    watch: {
      "$route" (to, from) {
        let toUser = fetchUser(to.params.id, this.contacts);
        let fromUser = fetchUser(from.params.id, this.contacts);

        return this.transitionName = (toUser > fromUser) ? "slide-down" : "slide-up";
      }
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
  }

  #app {
    display: flex;
    min-height: 100vh;
    flex-direction: row;
  }

  .main {
    display: flex;
    flex: 1;
    margin-left: 20%;
  }

  .main > div {
    flex: 1;
    flex-direction: column;
  }

  .sidebar {
    flex: 1;
    border-right: 1px solid #eee;
    flex: 0 0 12em;
    position: fixed;
    left: 0;
    top: 0;
    width: 20%;
    height: 100%;
    overflow: scroll;
    z-index: 1;
  }

  .slide-up-enter-active, .slide-up-leave-active,
  .slide-down-enter-active, .slide-down-leave-active
   {
    transition: all .15s;
  }
  .slide-up-leave-active,
  .slide-down-enter {
    transform: translateY(100%);
  }
  .slide-up-enter,
  .slide-down-leave-active {
    transform: translateY(-100%);
  }
  .card {
    flex: 1;
    min-height: 100vh;
    padding: 20px;
  }
  .card-contain {
    max-width: 400px;
    margin: 10vh auto 0;
  }
  .card--v-align {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .card--v-align > .card-contain {
    margin: 0;
  }
</style>
