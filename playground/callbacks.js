var getUser = (id, callback) => {
  var user = {
    id: id,
    name: 'Pouyan'
  };
  setTimeout(() => {
    callback(user);
  }, 2000);
};

getUser(31, (userObj) => {
  console.log(userObj);
});
