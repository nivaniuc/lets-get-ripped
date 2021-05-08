var db = require("../models");

module.exports = app => {
    app.get("/api/workout", (req,res) => {
        db.Workout.find({})
        .then(dbWorkout);
        console.log(dbWorkout);
        res.json(dbWorkout);
    })
});