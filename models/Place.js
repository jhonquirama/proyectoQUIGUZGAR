let moongoose = require("mongoose");
let Schema = moongoose.Schema;

let PlaceSchema = Schema({
  name: String,
  description: String
});

module.exports = moongoose.model("Place", PlaceSchema);
