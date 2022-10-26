const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  // userDataId: { type: mongoose.ObjectId, required: true }
  // userDataId: { type: mongoose.Types.ObjectId }
});

module.exports = mongoose.model("User", UserSchema);