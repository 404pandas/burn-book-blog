// relations go here

// import user
const User = require("./User");

// import post
const Post = require("./Post");

// import comment

// post belongs to user
Post.belongsTo(User, {
  foreignKey: "userId",
  onDelete: "CASCADE",
});

// post has many comment

// comment belongs to user

// export user comment and post
module.exports = {
  User,
  Post,
};
