const mongoose = require("mongoose");

const eventSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    text: {
      type: String,
      required: [true, "Please add a text value"],
    },
    description: {
      type: String,
      required: [true, "Please add a description"],
    },
    price: {
      type: String, // NUMBER??
      required: [true, "Please add a price Eur"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Event", eventSchema);
