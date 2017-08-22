export default (data, id) =>
  data.users.find((user) => user.id === id)
