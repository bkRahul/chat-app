const users = [];

const addUser = ({ id, name, room }) => {
  room = room.trim().toLowerCase();
  name = name.trim().toLowerCase();

  const existingUser = users.find(
    user => user.name === name && user.room === room
  );
  if (existingUser) {
    return { error: 'username is already taken' };
  }
  const user = { id, name, room };
  users.push(user);
  return { user };
};

const removeUser = id => {
  const userIndex = users.findIndex(user => user.id === id);
  if (userIndex !== -1) {
    return users.splice(userIndex, 1)[0];
  }
};

const getUser = id => users.find(user => user.id === id);

const getUsersInRoom = room => users.filter(user => user.room === room);

module.exports = {
  addUser,
  removeUser,
  getUser,
  getUsersInRoom,
};
