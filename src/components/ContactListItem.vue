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
  }
};
</script>

<style>
.contact-list__item {
  padding: 10px;
  display: block;
  text-decoration: none;
  transition: all 0.2s;
}
.contact-list__item:hover,
.contact-list__item:focus {
  background: rgba(0, 0, 0, .02);
}
.contact-list__item.router-link-active {
  border-left: 5px solid #FC0405;
}
</style>
