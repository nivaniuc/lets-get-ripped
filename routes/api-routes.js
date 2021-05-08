var db = require("../models");

//GET THE WORKOUT
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

//THIS IS SUPPOSED TO ADD AN EXERCISE
app.put("/api/workouts/:id", (req, res) => {
    db.Workout.findByIdAndUpdate({
      _id: req.params.id
    }, {
      $push: { exercises: req.body },
      $inc: { totalDuration: req.body.duration }

    })
    .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.status(400).json(err)
      });
  });
  
//WORKOUT CREATION
  app.post("/api/workouts", (req, res) => {
    db.Workout.create(req.body)
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });

  //WORKOUT GET IN RAGE
  app.get("/api/workouts/range", (req, res) => {
    db.Workout.find({})
      .then(dbWorkout => {
        res.json(dbWorkout)
      })
      .catch(err => {
        res.status(400).json(err)
      });
  });
}
//I cant figure out what the error is on this page right now and its honestly kind of driving me mad. Please Clean up (- Past Self)