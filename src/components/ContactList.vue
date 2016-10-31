<script>
import ContactListItem from './ContactListItem.vue'
import ContactListHeading from './ContactListHeading.vue'

let getSymbol = (entry) => entry.charAt(0).toUpperCase()
let reverseName = (name) => name.split(" ").reverse()

export default {
  name: "contact-list",
  components: {
    ContactListItem,
    ContactListHeading
  },
  props: {
    contacts: Array
  },
  render (h){
    let currentSymbol = null
    let rows = []

    this.contacts.forEach((item) => {
      const name = reverseName(item.name.display)

      if (getSymbol(name[0]) !== currentSymbol)
        rows.push(h(ContactListHeading, {props: {symbol: getSymbol(name[0])}}))

      rows.push(h(ContactListItem, {props: {contact: item}}))

      currentSymbol = getSymbol(name[0])
    })
    
    return h('ol', {class: "contact-list"}, rows)
  }
}
</script>

<style>
.contact-list {
  list-style: none;
  margin: 0;
  padding-left: 0;
}
</style>
