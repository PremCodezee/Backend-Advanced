const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/backendendgame");

const userSchema = mongoose.Schema({
  name: String,
  nickname: String,
  description: String,
  categories: {
    type: Array,
    default: []
  },
  dateCreated: {
    type: Date,
    default: Date.now()
  }
});

module.exports = mongoose.model("User", userSchema);
