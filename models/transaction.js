const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const transactionSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: "Please Enter a name"
  },
  value: {
    type: Number,
    required: "Please enter an amount"
  },
  date: {
    type: Date,
    default: Date.now
  }
});
const Transaction = mongoose.model("transaction", transactionSchema);

module.exports = Transaction;