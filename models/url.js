// const { default: mongoose } = require("mongoose");

const mongoose = require("mongoose");
const UrlSchema = new mongoose.Schema(
  {
    shortId: {
      type: String,
      unique: true,
      required: true,
    },
    redirectURL: {
      required: true,
      type: String,
    },
    visitHistory: [{ timestamp: { type: Number } }],
  },
  { timestamp: true }
);
const URL=mongoose.model('url',UrlSchema)
module.exports=URL
