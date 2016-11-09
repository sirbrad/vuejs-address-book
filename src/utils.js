export function fetchUser(id, contacts) {
  let contact

  contacts.map((entry)=> {
    if (entry.id === parseInt(id)) {
      contact = entry.name.last;
    }
  })

  return contact
}
