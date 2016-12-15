<template>
  <div>
    <div v-if="user" class="card">
      <div class="card-contain">
        <h1>{{user.name.display}}</h1>
        <dl class="structured-list">
          <dt>Position:</dt>
          <dd>{{user.latestPosition}}</dd>
          <dt>Shirt number:</dt>
          <dd>{{user.info.shirtNum}}</dd>
          <dt>Birth:</dt>
          <dd>
            {{user.birth.date.label}} in {{user.birth.country.country}}
          </dd>
          <dt>Age:</dt>
          <dd>{{user.age}}</dd>
          <dt>Dimensions:</dt>
          <dd>{{user.height}}cm and {{user.weight}}kg</dd>
        </dl>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "user-show",
  props: {
    contacts: Array
  },
  data () {
    return {
      user: null
    };
  },
  created () {
    this.setCurrentUser();
  },
  watch: {
    "contacts": "setCurrentUser",
    "$route": "setCurrentUser"
  },
  methods: {
    setCurrentUser () {
      if (!this.contacts)
        return false;

      this.contacts.map((entry)=> {
        if (entry.id === parseInt(this.$route.params.id)) {
          this.user = entry;
        }
      });
    }
  },
  components: {}
};
</script>

<style>
  h1 {
    font-size: 3em;
    margin: 0;
  }
  .structured-list dt {
    display: block;
    font-size: 12px;
    font-weight: bold;
    text-transform: uppercase;
  }
  .structured-list dd + dt {
    margin-top: 1rem;
  }
  .structured-list dd {
    margin-left: 0;
  }
</style>
