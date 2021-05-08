var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var WorkoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },
});

var Workout = mongoose.model("Workout", WorkoutSchema);

module.export = Workout;

//Not super duper sure how well this will work, if there are any errors, refer back to this comment (From Past-Self)