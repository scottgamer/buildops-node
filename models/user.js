const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  createdEmployees: [
    {
      type: Schema.Types.ObjectId,
      ref: "Employee"
    }
  ]
});

module.exports = mongoose.model("User", userSchema);
