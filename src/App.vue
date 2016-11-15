<template>
  <div id="app">
    <sidebar :contacts="contacts"></sidebar>
    <main class="main">
      <transition :name="transitionName" mode="out-in">
        <router-view :key="$route.fullPath" :contacts.sync="contacts"></router-view>
      </transition>
    </main>
  </div>
</template>

<script>
  import Sidebar from "./components/Sidebar.vue"
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
    components: {
      Sidebar
    },
    data (){
      return {
        contacts: [],
        transitionName: ""
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
    margin: 0;
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
