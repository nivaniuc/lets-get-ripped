var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var WorkoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now,
  },
  exercises: Array,
  totalDuration: {
    type: Number,
    default: 0,
  },
});

var Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
