var db = require("../models");
//get the workout
module.exports = app => {
    app.get("/api/workouts", (req, res) => {
        db.Workout.find({})
        .sort({ day: 1})
        .then(dbWorkout =>{
            res.json(dbWorkout);
        })
        .catch(err => {
            res.status(400).json(err)
        });
});

//This is supposed to add an exercise 
app.put("/api/workouts/:id", (req, res) => {
    console.log(req.params.id);
    console.log(req.body);
    console.log(req.body.duration);
    db.Workout.findByIdAndUpdate({
      _id: req.params.id
    }, {
      $push: { exercises: req.body },
      $inc: { totalDuration: req.body.duration }
    })
    .then(dbWorkout => {
        console.log(dbWorkout);
        res.json(dbWorkout);
//I cant figure out what the error is on this page right now and its honestly kind of driving me mad. Please Clean up (- Past Self)