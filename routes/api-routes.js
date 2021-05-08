var db = require("../models");

module.exports = app => {
    app.get("/api/workout", (req,res) => {
        db.Workout.find({})
        .then(dbWorkout);
        console.log(dbWorkout);
        res.json(dbWorkout);
    })
});

//I cant figure out what the error is on this page right now and its honestly kind of driving me mad. Please Clean up (- Past Self)